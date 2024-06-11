// scripts.js

// main.js

// Sello de agua
const body = document.body;
body.style.position = 'relative';

const watermark = document.createElement('div');
watermark.style.position = 'absolute';
watermark.style.top = 0;
watermark.style.left = 0;
watermark.style.width = '100%';
watermark.style.height = '100%';
watermark.style.backgroundImage = "url('img/01.png')";
watermark.style.backgroundSize = 'contain';
watermark.style.backgroundRepeat = 'no-repeat';
watermark.style.backgroundPosition = 'center';
watermark.style.opacity = 0.1;
watermark.style.zIndex = -1;
body.appendChild(watermark);


// Modal para la galería de imágenes
var modal = document.getElementById("modal");
var modalImg = document.getElementById("imgModal");
var images = document.querySelectorAll(".galeria img");
images.forEach(function(image) {
    image.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});

var span = document.getElementsByClassName("cerrar")[0];
span.onclick = function() {
    modal.style.display = "none";
}

// Preguntas Frecuentes
document.querySelectorAll('.faq-item h3').forEach((question) => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});


// Mostrar la fecha y hora actual
function mostrarFechaHora() {
    var fechaHora = new Date();
    var opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    var fechaHoraString = fechaHora.toLocaleDateString('es-ES', opciones);
    document.getElementById('fechaHora').innerHTML = fechaHoraString;
}

setInterval(mostrarFechaHora, 1000);
mostrarFechaHora();

