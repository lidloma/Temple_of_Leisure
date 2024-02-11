function enviarFormulario(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Ocultar el formulario
    document.getElementById('contenedorForm').style.display = 'none';
    // Mostrar el mensaje de respuesta
    document.getElementById('respuesta').style.display = 'block';
}