document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Aquí puedes agregar la lógica para verificar los datos del formulario

    // Muestra el mensaje de confirmación
    document.getElementById('mensaje').style.display = 'block';
});