import { test, expect } from '@playwright/test';
// Testes que só fazem sentido para o Hotel Winner (a apresentação de uma página). Apague este arquivo ao criar outro cliente.

test('apresentação de uma página abre, cabe numa folha A4 e não promete o que não há', async ({ page }) => {
  await page.goto('/apresentacao/');
  await expect(page.locator('h1')).toContainText('proposta de site');
  const t = await page.locator('body').innerText();
  expect(t).toContain('a combinar');
  expect(t).not.toMatch(/R\$|aumento|mais reservas/i);
  const pdf = await page.pdf({ format: 'A4', printBackground: true, preferCSSPageSize: true });
  const paginas = (pdf.toString('latin1').match(/\/Type\s*\/Page[^s]/g) ?? []).length;
  expect(paginas).toBe(1);
});
