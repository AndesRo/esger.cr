const body = document.body;
body.style.position = 'relative';

const watermark1 = createWatermark();
const watermark2 = createWatermark();
const watermark3 = createWatermark();

function createWatermark() {
    const watermark = document.createElement('div');
    watermark.style.position = 'absolute';
    watermark.style.top = 0;
    watermark.style.left = 0;
    watermark.style.width = '100%';
    watermark.style.height = '100%';
    watermark.style.backgroundImage = "url('img/png 2.png')"; // Ruta de la imagen de sello de agua
    watermark.style.backgroundSize = 'contain';
    watermark.style.backgroundRepeat = 'no-repeat';
    watermark.style.backgroundPosition = 'center';
    watermark.style.opacity = 0.1; // Opacidad del sello de agua (0.1 para que sea sutil)
    watermark.style.zIndex = -1; // Asegura que el sello de agua esté detrás de otros elementos
    body.appendChild(watermark);
    return watermark;
}


// Modal para la galería de imágenes
const modal = document.getElementById("modal");
const modalImg = document.getElementById("imgModal");
const captionText = document.getElementById("caption");

function abrirModal(element) {
    modal.style.display = "block";
    modalImg.src = element.src;
    captionText.innerHTML = element.alt;
}

function cerrarModal() {
    modal.style.display = "none";
}

document.querySelector(".cerrar").onclick = cerrarModal;

// Preguntas Frecuentes
document.querySelectorAll('.faq-item h3').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
    });
});

// Mostrar la fecha y hora actual
function mostrarFechaHora() {
    const fechaHora = new Date();
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const fechaHoraString = fechaHora.toLocaleDateString('es-ES', opciones);
    document.getElementById('fechaHora').innerHTML = fechaHoraString;
}

setInterval(mostrarFechaHora, 1000);
mostrarFechaHora();

// Envío de formulario
const $form = document.querySelector('#fs-frm');

$form.addEventListener('submit', async event => {
    event.preventDefault();

    const formData = new FormData($form);
    const url = $form.action;
    const method = $form.method;

    try {
        const response = await fetch(url, {
            method: method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            $form.reset();
            alert('¡Gracias por contactarme!');
        } else {
            throw new Error('Error al enviar el formulario');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
    }
});

// Función para cerrar el banner
function closeBanner() {
    var banner = document.getElementById("banner");
    banner.style.right = "-300px"; // Oculta el banner moviéndolo fuera de la pantalla
}

// Muestra el banner después de que se cargue la página
document.addEventListener("DOMContentLoaded", function() {
    var banner = document.getElementById("banner");
    banner.style.right = "20px"; // Muestra el banner desplazándolo desde la derecha
});

// Cierra automáticamente el banner después de 3 segundos
setTimeout(closeBanner, 3000);
