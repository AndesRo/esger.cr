// scripts.js

// Galería de imágenes modal
$(document).ready(function() {
    // Abrir modal al hacer clic en una imagen de la galería
    $('.galeria img').on('click', function() {
        $('#modal').css('display', 'block'); // Mostrar el modal
        $('#img01').attr('src', $(this).attr('src')); // Establecer la imagen en el modal
    });

    // Cerrar modal al hacer clic en el botón de cerrar
    $('.cerrar').on('click', function() {
        $('#modal').css('display', 'none'); // Ocultar el modal
    });
});

// Validación del formulario
function validateForm() {
    let email = document.forms["contactForm"]["email"].value;
    if (email == "") {
        alert("El email debe ser completado"); // Mostrar mensaje de alerta si el campo de correo electrónico está vacío
        return false;
    }
}

// Desplazamiento suave al hacer clic en enlaces internos
$('a[href*="#"]').on('click', function(e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top // Desplazar suavemente a la sección correspondiente
    }, 500, 'linear');
});

// Mostrar la fecha y hora actual
function updateDateTime() {
    var now = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };
    var dateTimeStr = now.toLocaleDateString('es-ES', options);
    document.getElementById("fechaHora").innerHTML = dateTimeStr;
}

// Evento de clic para mostrar el formulario de cotización
document.getElementById('mostrarFormulario').addEventListener('click', function() {
    document.getElementById('formularioCotizacion').style.display = 'block';
    document.getElementById('bannerCotizacion').style.display = 'none';
});

// Llamar a la función updateDateTime cada segundo
setInterval(updateDateTime, 1000);

// Control del banner flotante utilizando JavaScript
// Por ejemplo, ocultar el banner después de cierto tiempo (10 segundos en este caso)
setTimeout(function() {
    document.querySelector('.banner-float').style.display = 'none'; // Ocultar el banner flotante
}, 10000);

// Validación del formulario de cotización
function validateCotizacionForm() {
    let email = document.forms["cotizacionForm"]["email"].value;
    let servicio = document.forms["cotizacionForm"]["servicio"].value;
    if (email == "") {
        alert("El email debe ser completado"); // Mostrar mensaje de alerta si el campo de correo electrónico está vacío
        return false;
    }
    if (servicio == "") {
        alert("Por favor selecciona un servicio"); // Mostrar mensaje de alerta si no se ha seleccionado un servicio
        return false;
    }
}

