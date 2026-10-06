import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  // Sztywny port: mostek kieruje ruch na 4321, więc przeskok na 4322 zrywałby połączenie.
  server: { port: 4321, host: false },
  // Domena z „ś” zapisana w punycode (grupa-nieruchomości.pl)
  site: 'https://xn--grupa-nieruchomoci-mod.pl',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
  // Strona i panel pod jednym adresem w pracy lokalnej: scripts/mostek.mjs (npm run start w katalogu głównym).
});
