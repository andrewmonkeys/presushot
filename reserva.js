function enviarSolicitud() {

    let nombre = document.getElementById("nombre").value;
    let fecha = document.getElementById("fecha").value;
    let lugar = document.getElementById("lugar").value;

    let servicios = [];

    if (document.getElementById("boda").checked) servicios.push("Boda");
    if (document.getElementById("preboda").checked) servicios.push("Preboda");
    if (document.getElementById("postboda").checked) servicios.push("Postboda");
    if (document.getElementById("video").checked) servicios.push("Vídeo");
    if (document.getElementById("album").checked) servicios.push("Álbum");

    let mensaje =
`Hola, soy ${nombre}.

Quiero información para mi boda:

📅 Fecha: ${fecha}
📍 Lugar: ${lugar}

Servicios:
${servicios.join(", ")}`;

    let url = "https://wa.me/34679537009text=" + encodeURIComponent(mensaje);

    window.open(url, "_blank");
}