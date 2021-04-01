const dot = document.querySelector('.dot');

const newDiameter = 10 + Math.floor(Math.random() * 40);

dot.style.width = `${newDiameter}px`;
dot.style.height = dot.style.width;


dot.addEventListener('click', () => {
  dot.style.display = 'none';
});
