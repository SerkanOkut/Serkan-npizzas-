import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
      baseUrl: 'http://localhost:5173',
      video: false, // Gereksiz video kaydını devre dışı bırakır
      chromeWebSecurity: false, // Güvenlik kısıtlamalarını kaldırır
    },
});
