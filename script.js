function toggleMobileMenu() {
    const navbar = document.getElementById('mobile-menu');
    if (navbar.style.display === 'block') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'block';
    }
}
