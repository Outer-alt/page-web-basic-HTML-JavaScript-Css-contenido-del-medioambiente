// Obtiene el usuario desde URL o sessionStorage
function obtenerUsuario() {
    const urlParams = new URLSearchParams(window.location.search);
    let usuario = urlParams.get('usuario');

    if (!usuario) {
        usuario = sessionStorage.getItem("usuarioLogueado");
    }

    return usuario;
}

// Guarda el usuario en sessionStorage
function guardarUsuario(usuario) {
    sessionStorage.setItem("usuarioLogueado", usuario);
}

// Muestra el usuario en los elementos del DOM
function mostrarBienvenida(usuario) {
    document.getElementById("bienvenida").textContent = `Bienvenido/a, ${usuario}`;
    document.getElementById("usuarioNombre").textContent = usuario;
}

// Inicializa el flujo
const usuario = obtenerUsuario();
if (usuario) {
    mostrarBienvenida(usuario);
    guardarUsuario(usuario);
}
