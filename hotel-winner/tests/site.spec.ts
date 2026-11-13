import { test, expect, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { existsSync } from 'node:fs';
// Os testes leem o conteúdo do cliente ativo (src/conteudo/ativo.ts): servem para qualquer cliente do modelo.
import { hotel, avaliacao, apartamentos, pontosTuristicos, comodidades, equipamentosApto, distancias, textos, secoes } from '../src/conteudo/ativo';

const temVideo = existsSync('public/videos/hero.mp4') || existsSync('public/videos/hero.webm');
const totalElogios = avaliacao.temas.reduce((n, t) => n + t.itens.length, 0);
const totalFotos = apartamentos.reduce((n, a) => n + a.fotos.length, 0);

const PAGINAS = ['/', '/acomodacoes/', ...(secoes.pontosTuristicos ? ['/pontos-turisticos/'] : []), '/contato/'];

test.describe('páginas', () => {
  for (const rota of PAGINAS) {
    test(`${rota} abre com título e cabeçalho`, async ({ page }) => {
      const r = await page.goto(rota);
      expect(r?.status()).toBe(200);
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('header .hd__logo')).toBeVisible();
    });
  }
  test('endereço inexistente mostra a página 404 com saída', async ({ page }) => {
    const r = await page.goto('/nao-existe/');
    expect(r?.status()).toBe(404);
    await expect(page.locator('h1')).toHaveText('Página não encontrada');
    await expect(page.getByRole('link', { name: 'Voltar ao início' })).toBeVisible();
  });
});

test.describe('responsividade: sem rolagem horizontal', () => {
  for (const largura of [375, 768, 1280, 1920]) {
    for (const rota of [...PAGINAS, '/nao-existe/']) {
      test(`${rota} em ${largura}px`, async ({ page }) => {
        await page.setViewportSize({ width: largura, height: 900 });
        await page.goto(rota);
        const sobra = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
        expect(sobra).toBeLessThanOrEqual(0);
      });
    }
  }
});

test.describe('acessibilidade (axe, WCAG 2.2 AA)', () => {
  for (const rota of [...PAGINAS, '/nao-existe/']) {
    for (const largura of [1440, 390]) {
      test(`${rota} em ${largura}px, inclusive com erros no formulário`, async ({ page }) => {
        await page.setViewportSize({ width: largura, height: 900 });
        await page.goto(rota);
        const botao = page.locator('#reserva .rb__ok');
        if (await botao.count()) await botao.click();
        const r = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();
        expect(r.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target).join(', ')}`)).toEqual([]);
      });
    }
  }
});

test.describe('conteúdo fiel ao documento do hotel', () => {
  const proibidos = [/meia-noite/i, /às 24h/i, /\bStandard\b|\bSuperior\b/, /\bR\$ ?\d/, /responde pelo WhatsApp/i];
  for (const rota of PAGINAS) {
    test(`${rota} não afirma o que não foi confirmado`, async ({ page }) => {
      await page.goto(rota);
      const texto = await page.locator('body').innerText();
      for (const p of proibidos) expect(texto, String(p)).not.toMatch(p);
    });
  }
  test('a home mostra os dados reais', async ({ page }) => {
    await page.goto('/');
    const t = await page.locator('body').innerText();
    const esperados = [hotel.enderecoCompleto, hotel.telefone, hotel.categoria, hotel.checkIn, hotel.checkOut, ...distancias.map((d) => d.km)];
    if (secoes.avaliacoes) esperados.push(`${avaliacao.total} avaliações`);
    for (const esperado of esperados) expect(t).toContain(esperado);
    await expect(page.locator('#comodidades li')).toHaveCount(comodidades.length);
    if (secoes.avaliacoes) await expect(page.locator('.temas li')).toHaveCount(totalElogios);
    await expect(page.locator('.contato__tel')).toHaveAttribute('href', hotel.telefoneLink);
  });
});

async function preencher(page: Page) {
  await page.fill('#f-in', '2031-12-10');
  await page.fill('#f-out', '2031-12-12');
  await page.selectOption('#f-g', '3');
}

test.describe('formulário de reserva', () => {
  test('envio vazio mostra o resumo de erros com foco e links', async ({ page }) => {
    await page.goto('/');
    await page.click('#reserva .rb__ok');
    const resumo = page.locator('.rb__resumo');
    await expect(resumo).toBeVisible();
    await expect(resumo).toBeFocused();
    await expect(resumo.locator('a')).toHaveCount(2);
    await resumo.locator('a').nth(1).click();
    await expect(page.locator('#f-out')).toBeFocused();
  });
  test('saída antes da chegada avisa ao mudar o campo', async ({ page }) => {
    await page.goto('/');
    await page.fill('#f-in', '2031-12-10');
    await page.fill('#f-out', '2031-12-09');
    await page.locator('#f-out').dispatchEvent('change');
    await expect(page.locator('#e-out')).toBeVisible();
  });
  test('sem WhatsApp informado: pedido pronto com ligar e copiar, sem dizer que enviou', async ({ page }) => {
    await page.goto('/');
    await preencher(page);
    await page.click('#reserva .rb__ok');
    const msg = page.locator('.rb__msg');
    await expect(msg).toContainText('10/12/2031 a 12/12/2031 (2 noites) para 3 hóspedes');
    await expect(msg.getByRole('link', { name: /Ligar para o hotel/ })).toHaveAttribute('href', hotel.telefoneLink);
    await expect(msg.getByRole('button', { name: 'Copiar mensagem' })).toBeVisible();
    await expect(msg).not.toContainText(/abriu|enviado/);
  });
  test('com WhatsApp e pop-up bloqueado: avisa e mantém os dados', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => { (document.querySelector('#reserva') as HTMLElement).dataset.wa = '5517999999999'; window.open = () => null; });
    await preencher(page);
    await page.click('#reserva .rb__ok');
    await expect(page.locator('.rb__msg')).toContainText('bloqueou');
    await expect(page.locator('#f-in')).toHaveValue('2031-12-10');
  });
  test('o título do topo não se desloca quando aparecem erros', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(2200); // termina a abertura animada
    // posição na PÁGINA (não na tela): o envio rola até o resumo de erros, e isso não é deslocamento de layout
    const topo = () => page.locator('h1').evaluate((h) => h.getBoundingClientRect().top + scrollY);
    const antes = await topo();
    await page.click('#reserva .rb__ok');
    expect(Math.abs((await topo()) - antes)).toBeLessThanOrEqual(2);
  });
});

test.describe('menu no celular', () => {
  test.use({ viewport: { width: 390, height: 844 } });
  test('abre, prende o foco no painel e fecha com Esc', async ({ page }) => {
    await page.goto('/');
    const botao = page.locator('.hd__menu');
    await botao.click();
    await expect(page.locator('#painel')).toBeVisible();
    await expect(page.locator('#painel a').first()).toBeFocused();
    for (let i = 0; i < 8; i++) {
      await page.keyboard.press('Tab');
      const fora = await page.evaluate(() => { const e = document.activeElement!; return !e.closest('#painel') && !e.classList.contains('hd__menu') && e !== document.body; });
      expect(fora).toBe(false);
    }
    await page.keyboard.press('Escape');
    await expect(page.locator('#painel')).toBeHidden();
    await expect(botao).toBeFocused();
  });
});

test.describe('vídeo e movimento', () => {
  test.skip(!temVideo, 'este cliente ainda não tem vídeo em public/videos/');
  test('vídeo toca mudo e o botão pausa', async ({ page }) => {
    await page.goto('/');
    const v = page.locator('[data-hero-video]');
    await expect.poll(() => v.evaluate((el: HTMLVideoElement) => !el.paused && el.muted)).toBe(true);
    await page.click('[data-hero-btn]');
    await expect(page.locator('[data-hero-btn]')).toHaveText('Reproduzir vídeo');
    expect(await v.evaluate((el: HTMLVideoElement) => el.paused)).toBe(true);
  });
  test.describe('com "reduzir movimento"', () => {
    test.use({ reducedMotion: 'reduce' });
    test('o vídeo não toca sozinho e todo o conteúdo já aparece', async ({ page }) => {
      await page.goto('/');
      await page.waitForTimeout(800);
      expect(await page.locator('[data-hero-video]').evaluate((el: HTMLVideoElement) => el.paused)).toBe(true);
      await expect(page.locator('[data-hero-btn]')).toHaveText('Reproduzir vídeo');
      const ocultos = await page.evaluate(() => [...document.querySelectorAll('[data-revelar]')].filter((e) => getComputedStyle(e).opacity !== '1').length);
      expect(ocultos).toBe(0);
    });
  });
  test('blocos animados continuam no texto acessível antes de aparecer', async ({ page }) => {
    await page.goto('/');
    const escondidos = await page.evaluate(() => [...document.querySelectorAll('[data-revelar]')].filter((e) => getComputedStyle(e).visibility === 'hidden').length);
    expect(escondidos).toBe(0);
  });
  test('ao rolar, os blocos animados terminam visíveis', async ({ page }) => {
    await page.goto('/');
    for (let y = 0; y < 6000; y += 500) { await page.mouse.wheel(0, 500); await page.waitForTimeout(120); }
    await page.waitForTimeout(1600);
    const ocultos = await page.evaluate(() => [...document.querySelectorAll('[data-revelar]')].filter((e) => getComputedStyle(e).opacity !== '1').length);
    expect(ocultos).toBe(0);
  });
});

test.describe('ação na primeira tela e barra de ligar', () => {
  test('desktop: o vídeo ocupa a primeira tela e o botão de ligar aparece sobre ele', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    const video = page.locator('.hero__video');
    await expect(video).toBeInViewport({ ratio: 0.9 });
    const caixa = await video.boundingBox();
    expect(caixa!.width).toBeGreaterThanOrEqual(1430);
    expect(caixa!.height).toBeGreaterThan(650);
    const ligar = page.locator('.hero__acoes').getByRole('link', { name: textos.hero.ligar });
    await expect(ligar).toHaveAttribute('href', hotel.telefoneLink);
    await expect(ligar).toBeInViewport();
    await expect(page.locator('h1')).toBeInViewport();
    await expect(page.locator('.ligar')).toBeHidden();
  });
  test('celular: botão de ligar na primeira tela e barra fixa', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await expect(page.locator('.hero__acoes').getByRole('link', { name: textos.hero.ligar })).toBeInViewport();
    const barra = page.locator('.ligar');
    await expect(barra).toBeVisible();
    await expect(barra).toHaveAttribute('href', hotel.telefoneLink);
  });
});

test.describe('acomodações', () => {
  test('mostra as quatro categorias do texto do hotel e não inventa "individual"', async ({ page }) => {
    await page.goto('/acomodacoes/');
    await expect(page.locator('article.cat h3')).toHaveText(apartamentos.map((a) => `${textos.acomodacoes.categoriaRotulo} ${a.nome}`));
    const t = await page.locator('main, body').first().innerText();
    if (!apartamentos.some((a) => /individual/i.test(a.nome))) expect(t).not.toMatch(/Apartamento Individual/);
  });
  test('as fotos reais carregam e quem não tem foto assume que falta', async ({ page }) => {
    await page.goto('/acomodacoes/');
    const imgs = page.locator('article.cat img');
    await expect(imgs).toHaveCount(totalFotos);
    for (let i = 0; i < totalFotos; i++) {
      await imgs.nth(i).scrollIntoViewIfNeeded();
      await expect.poll(() => imgs.nth(i).evaluate((e: HTMLImageElement) => e.complete && e.naturalWidth > 0)).toBe(true);
      expect(((await imgs.nth(i).getAttribute('alt')) ?? '').length).toBeGreaterThan(20);
    }
    for (const a of apartamentos.filter((x) => x.fotos.length === 0)) await expect(page.locator(`#${a.id}`)).toContainText(textos.acomodacoes.semFoto);
  });
  test('equipamentos em todos os apartamentos e cartões na home levam à categoria', async ({ page }) => {
    await page.goto('/acomodacoes/');
    await expect(page.locator('.eq__lista li')).toHaveCount(equipamentosApto.length);
    await page.goto('/');
    await expect(page.locator('.aco__card')).toHaveCount(apartamentos.length);
    await page.locator('.aco__card').first().click();
    await expect(page).toHaveURL(new RegExp(`/acomodacoes/#${apartamentos[0].id}$`));
  });
});

test.describe('pontos turísticos', () => {
  test.skip(!secoes.pontosTuristicos, 'este cliente não tem pontos turísticos');
  test('página com os nomes do site do hotel, sem inventar distâncias', async ({ page }) => {
    await page.goto('/pontos-turisticos/');
    await expect(page.locator('h1')).toHaveText(textos.pontos.titulo);
    await expect(page.locator('.pts__nome')).toHaveText(pontosTuristicos.map((p) => p.nome));
    for (const [i, p] of pontosTuristicos.entries()) await expect(page.locator('.pts li').nth(i)).toContainText(p.distancia || textos.pontos.semDistancia);
  });
  test('home tem a seção e o menu leva à página', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    await expect(page.locator('.pt__lista li')).toHaveCount(pontosTuristicos.length);
    await page.locator('header .hd__l').getByRole('link', { name: 'Pontos turísticos' }).click();
    await expect(page).toHaveURL(/\/pontos-turisticos\/$/);
  });
  for (const largura of [1000, 1201, 1280, 1440]) {
    test(`cabeçalho não estoura nem quebra linha em ${largura}px`, async ({ page }) => {
      await page.setViewportSize({ width: largura, height: 800 });
      await page.goto('/');
      const sobra = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(sobra).toBeLessThanOrEqual(0);
      const caixas = await page.locator('header .hd__a:visible, header .hd__cta:visible, header .hd__logo').evaluateAll((els) => els.map((e) => { const r = e.getBoundingClientRect(); return [r.left, r.right]; }).sort((p, q) => p[0] - q[0]));
      for (let i = 1; i < caixas.length; i++) expect(caixas[i][0]).toBeGreaterThanOrEqual(caixas[i - 1][1] + 8);
      const alturas = await page.locator('header .hd__a:visible, header .hd__cta:visible').evaluateAll((els) => els.map((e) => e.getBoundingClientRect().height));
      for (const a of alturas) expect(a).toBeLessThan(60);
    });
  }
});
