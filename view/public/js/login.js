// Seleccionar elementos del DOM
const formLogin = document.getElementById("formLogin");
const usuarioInput = document.getElementById("usuario");
const contrasenaInput = document.getElementById("contrasena");
const errorDiv = document.getElementById("error");

// Validar campos en tiempo real
usuarioInput.addEventListener("input", validarUsuario);
contrasenaInput.addEventListener("input", validarContrasena);

// Validar usuario (email)
function validarUsuario() {
    const usuario = usuarioInput.value.trim();
    if (!/\S+@\S+\.\S+/.test(usuario)) {
        mostrarError(usuarioInput, "Ingrese un correo válido.");
    } else {
        mostrarExito(usuarioInput);
    }
}

// Validar contraseña (no vacía)
function validarContrasena() {
    const contrasena = contrasenaInput.value.trim();
    if (contrasena.length < 8) {
        mostrarError(contrasenaInput, "La contraseña debe tener al menos 8 caracteres.");
    } else {
        mostrarExito(contrasenaInput);
    }
}

// Mostrar error en un campo
function mostrarError(input, mensaje) {
    input.classList.add("error");
    input.classList.remove("success");
    errorDiv.textContent = mensaje;
}

// Mostrar éxito en un campo
function mostrarExito(input) {
    input.classList.add("success");
    input.classList.remove("error");
    errorDiv.textContent = "";
}

// Validar el formulario completo antes de enviarlo
formLogin.addEventListener("submit", (event) => {
    validarUsuario();
    validarContrasena();

    const errores = formLogin.querySelectorAll(".error");
    if (errores.length > 0) {
        event.preventDefault(); // Evitar el envío si hay errores
        errorDiv.textContent = "Por favor, corrige los errores antes de continuar.";
    } else {
        alert("Inicio de sesión exitoso");
    }
});

// btn registro funcion
document.querySelector('.registro').onclick = function() {
    window.location.href = 'registro.html';
};

// btn home funcion
document.querySelector('.btnHome').onclick = function() {
    window.location.href = '../../../../index.html';
};
// Modo noche
const btnModoNoche = document.getElementById("modoNoche");

btnModoNoche.addEventListener("click", () => {
    document.body.classList.toggle("noche");

    // Guardar el estado del modo noche en localStorage
    if (document.body.classList.contains("noche")) {
        localStorage.setItem("modoNoche", "true");
    } else {
        localStorage.setItem("modoNoche", "false");
    }
});

// Cargar el estado del modo noche al cargar la página
window.addEventListener("load", () => {
    if (localStorage.getItem("modoNoche") === "true") {
        document.body.classList.add("noche");
    }
});