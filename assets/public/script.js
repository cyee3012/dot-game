const score = document.querySelector('.score');
const speed = document.querySelector('.speed');
const pause = document.querySelector('.pause');
const gameContainer = document.querySelector('.game-container');

// toggle speed
speedSetting = 30;
speed.addEventListener('click', () => {
  if (speed.innerText == "speed: 4x") {
  speed.innerText = "speed: 1x"
  speedSetting = 30;
  } else if ( speed.innerText == "speed: 1x") {
    speed.innerText = "speed: 2x"
    speedSetting = 60;
  } else if (speed.innerText == "speed: 2x") {
    speed.innerText = "speed: 4x"
    speedSetting = 120;
  }
});

const createDot = () => {
  // create actual dot
  const dot = document.createElement("div");
  dot.classList.add('dot');
  dot.dataset.points = 'points'
  gameContainer.appendChild(dot);

  const diameter = 10 + Math.floor(Math.random() * 41);
  const xPosition = Math.floor(Math.random() * (301 - (diameter)));
  const yPosition = (0 - diameter) / 2;
  console.log(yPosition)
  dot.style.display = 'block';
  dot.style.width = `${diameter}px`;
  dot.style.height = dot.style.width;
  dot.style.left = `${xPosition}px`;
  dot.style.bottom = `${yPosition}px`;
  console.log(`${xPosition} xPosition` );
  console.log(`${diameter} diameter`);
  // add points element to dot
  // makes points inversely proportional to the dot size (range from 1-10 points)
  // -1px = +0.225 points. 50 - diameter = pointIncrement * 0.225 (+1 to include 50px and 10 px)
  pointsAmount = 1 + (50 - parseFloat(dot.style.width)) * 0.225;
  dot.dataset.points = `${Math.round(pointsAmount)}`;
  console.log(`${dot.dataset.points} points`);
  return dot
};

  // dot moves from bottom to top
const moveDot = (dot) => {
  let newPositon = parseFloat(dot.style.bottom);
  const dotMovement = setInterval(function() {
    console.log(newPositon);
    newPositon = newPositon + speedSetting;
    dot.style.bottom = newPositon +"px";
  }, 1000);
// click to make dot disappear
dot.addEventListener('click', () => {
  dot.style.display = 'none';
  score.innerText = `${parseInt(score.innerText)+parseInt(dot.dataset.points)}`;
  dot.style.bottom = 0;
  clearInterval(dotMovement);
});
  return dot
};

let dotsAppear = setInterval(function() {
  moveDot(createDot());
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
       speedSetting = 120;
       dotsAppear = setInterval(function() {
        moveDot(createDot());
      }, 1000);
      } else if (speed.innerText == "speed: 2x") {
        speedSetting = 60;
        dotsAppear = setInterval(function() {
          moveDot(createDot());
        }, 1000);
      } else if (speed.innerText == "speed: 1x") {
        speedSetting = 30;
        dotsAppear = setInterval(function() {
          moveDot(createDot());
        }, 1000);
      };
    };
});



