$("#menu").on('click', function(){
    $("nav ul").toggle('slow');
})

// Mostrar la ventana emergente de inicio de sesión al hacer clic en el enlace "perfil"
document.getElementById("perfil").addEventListener("click", function() {
    document.getElementById("modal-login").style.display = "block";
});

// Ocultar la ventana emergente de inicio de sesión al hacer clic en el botón de cierre
document.querySelectorAll(".close").forEach(function(closeBtn) {
    closeBtn.addEventListener("click", function() {
        document.querySelectorAll(".modal").forEach(function(modal) {
            modal.style.display = "none";
        });
    });
});

// Mostrar la ventana emergente de registro al hacer clic en el enlace "Regístrate aquí"
document.getElementById("registro-link").addEventListener("click", function() {
    document.getElementById("modal-registro").style.display = "block";
});

document.getElementById("login-link").addEventListener("click", function() {
    document.getElementById("modal-login").style.display = "block";
});


document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    // Obtener los valores de usuario y contraseña
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Comprobar si los datos de inicio de sesión son correctos
    if (username === "lidia" && password === "lidia") {
        // Redirigir a la página de área personal si los datos son correctos
        window.location.href = "areaPersonal.html";
    } else {
        // Mostrar un mensaje de error si los datos son incorrectos (puedes implementarlo según tus necesidades)
        alert("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
    }
});
