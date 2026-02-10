// Smooth navbar transition on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
    } else {
        navbar.style.boxShadow = "none";
    }
});