const dot = document.querySelector('.dot');
const plusDiameter = Math.floor(Math.random() * 40);
const diameter = (dot + plusDiameter);

dot.addEventListener('click', () => {
  dot.style.display = 'none';
});
