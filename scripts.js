const body = document.body;
body.style.position = 'relative';

const createWatermarkImage = (url) => {
    const img = document.createElement('div');
    img.style.position = 'absolute';
    img.style.top = 0;
    img.style.left = 0;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.backgroundImage = `url(${url})`;
    img.style.backgroundSize = 'contain';
    img.style.backgroundRepeat = 'repeat';
    img.style.opacity = 0.1; // Opacidad del sello de agua (0.1 para que sea sutil)
    img.style.zIndex = -1; // Asegura que el sello de agua esté detrás de otros elementos
    return img;
};

// Crea tres imágenes de sello de agua
const watermark1 = createWatermarkImage('img/watermark1.png'); // Ruta de la primera imagen
const watermark2 = createWatermarkImage('img/img-5.jpg'); // Ruta de la segunda imagen
const watermark3 = createWatermarkImage('img/watermark3.png'); // Ruta de la tercera imagen

// Añade las imágenes al cuerpo del documento
body.appendChild(watermark1);
body.appendChild(watermark2);
body.appendChild(watermark3);


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
