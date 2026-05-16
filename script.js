



function generarTextoIA(tipo, precio) {

    if (tipo === "boda") {
        return "Cobertura completa de boda con edición profesional";
    }

    if (tipo === "dron") {
        return "Tomas aéreas cinematográficas con drone 4K";
    }

    if (tipo === "album") {
        return "Álbum físico premium con selección de 150 fotos";
    }

    return "Servicio fotográfico profesional";
}


function calcularTotal() {

    let clientes =
        document.getElementById("nombreClientes").value;

    let boda =
        document.getElementById("precioBoda").value;

    let dron =
        document.getElementById("precioDron").value;

    let album =
        document.getElementById("precioAlbum").value;

    let total =
        Number(boda) +
        Number(dron) +
        Number(album);

    document.getElementById("resultado").innerHTML = `

        <h2>Presupuesto</h2>

        <p><strong>Clientes:</strong> ${clientes}</p>

        <p><strong>Fotografía boda:</strong> ${boda} €</p>

        <p><strong>Dron:</strong> ${dron} €</p>

        <p><strong>Álbum:</strong> ${album} €</p>

        <hr>

        <h3>Total: ${total} €</h3>


    `;
    localStorage.setItem("presupuesto", document.getElementById("resultado").innerHTML);

    let historial = JSON.parse(localStorage.getItem("historial")) || [];

let nuevoPresupuesto = document.getElementById("resultado").innerHTML;

historial.push(nuevoPresupuesto);

localStorage.setItem("historial", JSON.stringify(historial));

mostrarHistorial(historial);

}

function generarPDF() {

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    let empresa = "PresuShot Pro";

    let clientes = document.getElementById("nombreClientes").value;
    let boda = document.getElementById("precioBoda").value;
    let dron = document.getElementById("precioDron").value;
    let album = document.getElementById("precioAlbum").value;

    let total = Number(boda) + Number(dron) + Number(album);

    // CABECERA
    doc.setFillColor(0, 0, 0);
    doc.rect(0, 0, 210, 30, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.text(empresa, 20, 15);

    doc.setFontSize(18);
    doc.text("PRESUPUESTO FOTOGRAFÍA", 20, 25);

    doc.setDrawColor(200);
    doc.line(20, 32, 190, 32);

    // RESET COLOR
    doc.setTextColor(0, 0, 0);

    // INFO CLIENTE
    doc.setFontSize(12);
    doc.text("Cliente: " + clientes, 20, 45);
    doc.text("Fecha: " + new Date().toLocaleDateString(), 20, 55);

    // LINEA SEPARADORA
    doc.line(20, 60, 190, 60);

    // DETALLE
    doc.setFontSize(14);
    doc.text("Detalle del presupuesto", 20, 75);

    doc.setFontSize(12);
    doc.text(generarTextoIA("boda", boda) + " - " + boda + " €", 20, 90);
    doc.text(generarTextoIA("dron", dron) + " - " + dron + " €", 20, 100);
    doc.text(generarTextoIA("album", album) + " - " + album + " €", 20, 110);

    // TOTAL DESTACADO
    doc.setFontSize(18);
    doc.setFont(undefined, "bold");
    doc.setTextColor(0, 0, 0);

    doc.text("TOTAL FINAL: " + total + " €", 20, 135);

    // PIE
    doc.setFontSize(10);
    doc.setFont(undefined, "normal");
    doc.text("Gracias por confiar en nosotros", 20, 155);

    doc.save("presupuesto.pdf");
}



function enviarWhatsApp() {

    let clientes =
        document.getElementById("nombreClientes").value;

    let boda =
        document.getElementById("precioBoda").value;

    let dron =
        document.getElementById("precioDron").value;

    let album =
        document.getElementById("precioAlbum").value;

    let total =
        Number(boda) +
        Number(dron) +
        Number(album);

    let mensaje =
        "Hola " + clientes +
        ", aquí tienes vuestro presupuesto 😊 " +

        " Fotografía boda: " + boda + "€." +

        " Dron: " + dron + "€." +

        " Álbum: " + album + "€." +

        " Total: " + total + "€.";

    let url =
        "https://wa.me/?text=" +
        encodeURIComponent(mensaje);

    window.open(url, "_blank");
}

window.onload = function() {

    let historial = JSON.parse(localStorage.getItem("historial")) || [];

    mostrarHistorial(historial);
}

function mostrarHistorial(historial) {

    let contenedor = document.getElementById("historial");

    if (!contenedor) return;

    contenedor.innerHTML = "";

    historial.forEach((item, index) => {

        contenedor.innerHTML += `
    <div style="background:white;
                padding:10px;
                margin-top:10px;
                border-radius:8px;
                box-shadow:0px 0px 5px rgba(0,0,0,0.1);
                position:relative;">

         <button onclick="eliminarPresupuesto(${index})"
            style="
                position:absolute;
                top:10px;
                right:10px;
                background:transparent;
                color:#888;
                border:none;
                font-size:18px;
                cursor:pointer;"
            onmouseover="this.style.color='red'"
            onmouseout="this.style.color='#888'">
            ✖
        </button>


        ${item}
    </div>
`;
    });
}

function eliminarPresupuesto(index) {

    let confirmar = confirm("¿Seguro que quieres eliminar este presupuesto?");

    if (!confirmar) return;

    let historial = JSON.parse(localStorage.getItem("historial")) || [];

    historial.splice(index, 1);

    localStorage.setItem("historial", JSON.stringify(historial));

    mostrarHistorial(historial);
}

doc.setFontSize(10);
doc.setFont(undefined, "normal");
doc.setTextColor(120);

doc.text("Documento generado automáticamente por " + empresa, 20, 165);
