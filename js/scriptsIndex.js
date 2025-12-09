document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const clave = document.getElementById("claveDeInicio").value;
    const errorDiv = document.getElementById("errorAlIngresar");

    if (usuario === "mari" && clave === "123") {
        window.location.href = `admin.html?usuario=${encodeURIComponent(usuario)}`;
    } else {
        errorDiv.textContent = "Usuario incorrecto";
    }

    // En el login (index.html)
    sessionStorage.setItem("usuarioLogueado", usuario);
});
