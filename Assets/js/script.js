// Cambia el color de la barra al desplazarse hacia abajo
window.addEventListener('scroll', function() {
    console.log("Desplazamiento activado"); 
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 10) {
        navbar.style.backgroundColor = 'black';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});

// Smooth scroll
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.navbar-nav a[href^="#"]');
  
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
        
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
  
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Asegura el funcionamiento del carrusel al cargar bien la página
document.addEventListener('DOMContentLoaded', function() {
    var myCarousel = document.getElementById('inicio');
    var carousel = new bootstrap.Carousel(myCarousel);
});

//Alerta de correo enviado formulario
$('#envia_correo').click(function () {
    alert("El correo fue enviado correctamente...");
});

//función de tooltip en formulario
$(document).ready(function () {
    $("#envia_correo").tooltip();
});

//tooltip barra footer
$(document).ready(function() {
    $('[data-bs-toggle="tooltip"]').tooltip();
});