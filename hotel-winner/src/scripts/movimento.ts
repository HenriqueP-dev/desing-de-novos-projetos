/**
 * Movimento do site (GSAP + ScrollTrigger).
 * Regra: entrada do hero, revelações discretas e um leve respiro no vídeo.
 * Usa opacity (nunca autoAlpha/visibility): o conteúdo segue legível para leitores de tela antes de aparecer.
 * Tudo dentro de gsap.matchMedia: com "reduzir movimento", nada disso roda e o conteúdo já está visível.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const raiz = document.documentElement;
const mm = gsap.matchMedia();

mm.add('(prefers-reduced-motion: no-preference)', () => {
  raiz.classList.add('mov-ok');

  // 1. Abertura do hero: linhas do título sobem de dentro da máscara, depois o resto.
  const linhas = gsap.utils.toArray<HTMLElement>('[data-hero-linha]');
  if (linhas.length) {
    gsap.timeline({ defaults: { ease: 'expo.out' } })
      .from(linhas, { yPercent: 108, duration: 1.5, stagger: 0.12 })
      .from('[data-hero-sub]', { opacity: 0, y: 14, duration: 1.1 }, '-=1.15')
      .from('[data-hero-quadro]', { opacity: 0, y: 36, duration: 1.5 }, '-=1.0')
      .from('[data-hero-barra]', { opacity: 0, y: 20, duration: 1.1 }, '-=1.15');
  }

  // 2. Só um respiro no vídeo ao rolar (sem moldura que se abre: gesto clichê de sites de hotel).
  const quadro = document.querySelector<HTMLElement>('[data-hero-quadro]');
  const midia = quadro?.querySelector('video, .hv__vazio');
  if (quadro && midia) {
    gsap.fromTo(midia, { scale: 1.06 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: quadro, start: 'top 85%', end: 'bottom 30%', scrub: 0.6 } });
  }

  // 3. Revelações discretas: blocos marcados sobem e aparecem; fotos se abrem por máscara.
  gsap.utils.toArray<HTMLElement>('[data-revelar]').forEach((el) => {
    gsap.fromTo(el, { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 1.3, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 86%', once: true } });
  });
  gsap.utils.toArray<HTMLElement>('[data-revelar-foto]').forEach((el) => {
    gsap.fromTo(el, { clipPath: 'inset(14% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.6, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
  });

  // 4. Parallax discreto dentro das fotos (só quando há foto real).
  gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
    gsap.fromTo(el, { yPercent: -5 }, { yPercent: 0, ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } });
  });

  return () => raiz.classList.remove('mov-ok');
});

// Recalcula as posições depois que fontes e mídia mudam a altura da página.
document.fonts?.ready.then(() => ScrollTrigger.refresh());
addEventListener('load', () => ScrollTrigger.refresh());
