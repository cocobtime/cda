function toggleMobileMenu(el) {
    var navList = document.getElementById("nav-list");
    if (navList.style.display == "flex") {
        navList.style.display = "none";
        el.classList.remove('active');
    } else {
        navList.style.display = "flex";
        el.classList.add('active');
    }
}
