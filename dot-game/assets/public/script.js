const dot = document.querySelector('.dot');

// makes dot random size between 10-50px;
const diameter = 10 + Math.floor(Math.random() * 40);
dot.style.width = `${diameter}px`;
dot.style.height = dot.style.width;

console.log(diameter);

//makes points inversely proportional to the dot size (range from 1-10 points)
// -1px = +0.225 points
// 50 - diameter = pointIncrement * 0.225
// +1 to include 50px and 10 px
const points = document.querySelector('.points');
pointsAmount = 1 + (50 - diameter) * 0.225;
points.innerText = `${Math.round(pointsAmount)}`;
console.log(points.innerText);

dot.addEventListener('click', () => {
  dot.style.display = 'none';
});
