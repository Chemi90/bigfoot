// Menú Responsive
const menuToggle = document.getElementById('mobile-menu');
const nav = document.querySelector('.nav ul');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
    // Animación del icono del menú (hamburger to close)
    menuToggle.classList.contains('active') ?
        menuToggle.classList.add('open') :
        menuToggle.classList.remove('open');
});

// Smooth Scrolling para Navegación
const navLinks = document.querySelectorAll('.nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 70, // Ajusta según la altura del header
            behavior: 'smooth'
        });
        // Cerrar el menú móvil al hacer clic
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.classList.remove('open');
        }
    });
});

// Animaciones al Desplazarse usando Intersection Observer
const observerOptions = {
    threshold: 0.1
};

const sections = document.querySelectorAll('section');

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Cambio de Estilo del Header al Hacer Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
