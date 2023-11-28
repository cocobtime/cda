document.addEventListener('DOMContentLoaded', function () {
  var menuButton = document.getElementById('toggle-menu');
  var navigation = document.getElementById('navigation');

  menuButton.addEventListener('click', function () {
      navigation.classList.toggle('active');
  });
});
