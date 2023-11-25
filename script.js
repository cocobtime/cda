function toggleMobileMenu(hamburgerIcon) {
    const navList = document.getElementById('nav-list');
    const isVisible = navList.classList.contains('active');
  
    if (isVisible) {
      navList.classList.remove('active');
      hamburgerIcon.classList.add('closed');
    } else {
      navList.classList.add('active');
      hamburgerIcon.classList.remove('closed');
    }
  }