// Modal Image Gallery
var modal = document.getElementById("modal");
var modalImg = document.getElementById("img01");
var images = document.querySelectorAll("#galeria img");
var cerrar = document.querySelector(".cerrar");

images.forEach(img => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
});

cerrar.onclick = function() {
    modal.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    function updateDateTime() {
        var now = new Date();
        var formattedDate = now.toLocaleDateString("es-ES", {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });
        var formattedTime = now.toLocaleTimeString("es-ES");
        document.getElementById("fechaHora").innerText = formattedDate + " " + formattedTime;
    }
    updateDateTime();
    setInterval(updateDateTime, 1000); // Update every second
});


