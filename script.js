document.getElementById('navbar-toggle').addEventListener('click', function() {
  const links = document.getElementById('navbar-links');
  links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
});
