

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

// script.js envio de formulario

const $form = document.querySelector('#fs-frm');

$form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const url = this.action;
    const method = this.method;

    try {
        const response = await fetch(url, {
            method: method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            this.reset();
            alert('¡Gracias por contactarme!');
        } else {
            throw new Error('Error al enviar el formulario');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
    }
}


// Obtener el modal
var modal = document.getElementById('modal');

// Obtener la imagen y el contenedor de la imagen dentro del modal
var modalImg = document.getElementById("imgModal");
var captionText = document.getElementById("caption");

// Asignar el evento onclick a todas las imágenes del proyecto
var images = document.getElementsByClassName("project-img");
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("cerrar")[0];

// Cuando el usuario hace clic en <span> (x), cerrar el modal
span.onclick = function() {
    modal.style.display = "none";
}
