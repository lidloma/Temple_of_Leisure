document.addEventListener("DOMContentLoaded", function() {
    var icons = document.querySelectorAll('.material-symbols-outlined');
    
    icons.forEach(function(icon) {
        icon.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});

