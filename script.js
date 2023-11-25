function toggleMobileMenu() {
    var mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu.style.display === "block") {
      mobileMenu.style.display = "none";
    } else {
      mobileMenu.style.display = "block";
    }
  }
  
  document.getElementById("hamburger-icon").addEventListener("click", toggleMobileMenu);
  