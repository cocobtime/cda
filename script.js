document.getElementById('navbar-toggle').addEventListener('click', function() {
  const links = document.getElementById('navbar-links');
  if (links.style.display === 'flex') {
      links.style.display = 'none';
  } else {
      links.style.display = 'flex';
  }
});
