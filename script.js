
function confirmarEncargo() {
    const mensaje = document.querySelector("#mensaje");

    mensaje.textContent =
        "Encargo recibido - te atiende Samuel Amador";

    mensaje.classList.remove("oculto");
}

document.querySelector("#btn-confirmar")
    .addEventListener("click", confirmarEncargo);
