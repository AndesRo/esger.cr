// scripts.js

// Modal Image Gallery
$(document).ready(function() {
    $('.galeria img').on('click', function() {
        $('#modal').css('display', 'block');
        $('#img01').attr('src', $(this).attr('src'));
    });

    $('.cerrar').on('click', function() {
        $('#modal').css('display', 'none');
    });
});

// Form validation
function validateForm() {
    let email = document.forms["contactForm"]["email"].value;
    if (email == "") {
        alert("El email debe ser completado");
        return false;
    }
}

// Smooth scroll
$('a[href*="#"]').on('click', function(e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
});

// Display current date and time in footer
function updateDateTime() {
    var now = new Date();
    var dateTimeStr = now.toLocaleDateString() + " " + now.toLocaleTimeString();
    document.getElementById("fechaHora").innerHTML = dateTimeStr;
}
setInterval(updateDateTime, 1000);


// JavaScript no es necesario para la animación, pero puedes usarlo para controlar la aparición o desaparición del banner flotante.

// Por ejemplo, para ocultar el banner después de cierto tiempo
setTimeout(function() {
    document.querySelector('.banner-float').style.display = 'none';
}, 10000); // 10 segundos
