let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let mensaje = document.getElementById("mensaje");
let size = 20;

function aceptar() {
    mensaje.classList.remove("hidden");
    yesButton.style.display = "none";
    noButton.style.display = "none";
}

function negar() {
    size += 5; // Ahora crece más lento
    yesButton.style.fontSize = `${size}px`;
}
