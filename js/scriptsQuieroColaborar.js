const tipoColaboracion = document.getElementById("tipoColaboracion");
const dineroSec = document.getElementById("dineroSection");
const trabajoSec = document.getElementById("trabajoSection");
const difusionSec = document.getElementById("difusionSection");

// Ocultar todos al inicio
dineroSec.style.display = "none";
trabajoSec.style.display = "none";
difusionSec.style.display = "none";

tipoColaboracion.addEventListener("change", function () {
    dineroSec.style.display = "none";
    trabajoSec.style.display = "none";
    difusionSec.style.display = "none";

    if (this.value === "dinero") dineroSec.style.display = "block";
    else if (this.value === "trabajo") trabajoSec.style.display = "block";
    else if (this.value === "difusion") difusionSec.style.display = "block";
});
