const dot = document.querySelector('.dot');
const score = document.querySelector('.score');
const speed = document.querySelector('.speed');
const pause = document.querySelector('.pause');

// makes dot random size between 10-50px;
const diameter = 10 + Math.floor(Math.random() * 40);
dot.style.width = `${diameter}px`;
dot.style.height = dot.style.width;

console.log(diameter);

// toggle speed
speedSetting = 1;
speed.addEventListener('click', () => {
  if (speed.innerText == "speed: 4x") {
  speed.innerText = "speed: 1x"
  speedSetting = 1;
  } else if ( speed.innerText == "speed: 1x") {
    speed.innerText = "speed: 2x"
    speedSetting = 2;
  } else if (speed.innerText == "speed: 2x") {
    speed.innerText = "speed: 4x"
    speedSetting = 4;
  }
});

// dot moves from bottom to top
position = 0;
  const moveDot = setInterval(function() {
  newPositon = position += speedSetting;
  dot.style.bottom = newPositon +"px";
}, 100);

// pause game
pause.addEventListener('click', () => {
  if (pause.innerText == "pause") {
    pause.innerText = "resume?";
    speedSetting = 0;
  } else if (pause.innerText == "resume?") {
    pause.innerText = "pause";
      if (speed.innerText == "speed: 4x") {
       speedSetting = 4;
      } else if (speed.innerText == "speed: 2x") {
        speedSetting = 2;
      } else if (speed.innerText == "speed: 1x") {
        speedSetting = 1;
      };
    };
});

//makes points inversely proportional to the dot size (range from 1-10 points)
// -1px = +0.225 points. 50 - diameter = pointIncrement * 0.225 (+1 to include 50px and 10 px)
const points = document.querySelector('.points');
pointsAmount = 1 + (50 - diameter) * 0.225;
points.innerText = `${Math.round(pointsAmount)}`;
console.log(points.innerText);

dot.addEventListener('click', () => {
  dot.style.display = 'none';
  score.innerText = `score: ${points.innerText}`;
  dot.style.bottom = 0;
  clearInterval(moveDot);
});
