// Simple theme toggler
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});