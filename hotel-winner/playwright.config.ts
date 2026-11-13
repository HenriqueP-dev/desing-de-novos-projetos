import { defineConfig, devices } from '@playwright/test';

// Testes de ponta a ponta: sobe o site de produção (build + preview) e testa no Chromium.
// Primeira vez no seu computador: npx playwright install chromium
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: [['list']],
  use: { baseURL: 'http://localhost:4322', trace: 'off', ...devices['Desktop Chrome'], viewport: { width: 1440, height: 900 } },
  webServer: { command: 'npm run build && npx astro preview --port 4322 --ignore-lock', url: 'http://localhost:4322', reuseExistingServer: !process.env.CI, timeout: 180_000 },
});
