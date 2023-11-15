document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('.nav');

    menuToggle.addEventListener('change', function() {
        if (this.checked) {
            nav.style.display = 'flex';
        } else {
            nav.style.display = 'none';
        }
    });
});
