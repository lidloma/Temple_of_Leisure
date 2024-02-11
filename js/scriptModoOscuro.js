const modoOscuroBtn = document.getElementById('modoOscuroBtn');
const contenedorInicio = document.querySelector('body');

modoOscuroBtn.addEventListener('click', () => {
    contenedorInicio.classList.toggle('dark-mode');
});