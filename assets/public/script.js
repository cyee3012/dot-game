let dot = document.querySelector('.dot');
let points = document.querySelector('.points');
const score = document.querySelector('.score');
const speed = document.querySelector('.speed');
const pause = document.querySelector('.pause');
const gameContainer = document.querySelector('.game-container');

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

// makes dot random size between 10-50px;
const movingDot = (dot) => {
  let diameter = 10 + Math.floor(Math.random() * 41);
  let xPosition = Math.floor(Math.random() * (301 - (diameter)));
  let yPosition = Math.floor(Math.random() * (1 - (diameter)));
  console.log(yPosition)
  dot.style.display = 'block';
  dot.style.width = `${diameter}px`;
  dot.style.height = dot.style.width;
  dot.style.left = `${xPosition}px`;
  dot.style.bottom = `${yPosition}px`;
  console.log(xPosition);
  console.log(diameter);

  // dot moves from bottom to top
  position = yPosition;
    const moveDot = setInterval(function() {
    newPositon = position += speedSetting;
    dot.style.bottom = newPositon +"px";
  }, 5000);

  //makes points inversely proportional to the dot size (range from 1-10 points)
  // -1px = +0.225 points. 50 - diameter = pointIncrement * 0.225 (+1 to include 50px and 10 px)
  pointsAmount = 1 + (50 - diameter) * 0.225;
  points.innerText = `${Math.round(pointsAmount)}`;
  console.log(points.innerText);

  // click to make dot disappear
  dot.addEventListener('click', () => {
    dot.style.display = 'none';
    score.innerText = `${parseInt(score.innerText)+parseInt(points.innerText)}`;
    dot.style.bottom = 0;
    clearInterval(moveDot);
  });
};

// // duplicate dot
const dotsAppear = setInterval(function() {
  let moreDots = dot.cloneNode(true);
  newDot = gameContainer.appendChild(moreDots);
  movingDot(newDot);
}, 1000);


// pause game
pause.addEventListener('click', () => {
  if (pause.innerText == "pause") {
    pause.innerText = "resume?";
    speedSetting = 0;
    clearInterval(dotsAppear);
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



