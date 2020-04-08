const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 120;
const ALERT_THRESHOLD = 60;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

const TIME_LIMIT = 1500; // 25 min
const BREAK_LIMIT = 300; // 5 min
const TIMER_MS = 1501100; // 25 min 1.1 second
const BREAK_MS = 301000; // 5 min 1 second
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let breakLeft = BREAK_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;
let beep = document.getElementById("beep");

document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;


function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
      beep.play();
    }
  }, 1000);
}

function startBreak() {
  timePassed = 0; // this one line of code took me 1 hour to figure out ..
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    breakLeft = BREAK_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(breakLeft);
    setCircleDasharray2();
    //setRemainingPathColor(breakLeft); // This line may be redundant

    if (breakLeft === 0) {
      onTimesUp();
      beep.play();
      //add funtion here that will create a button that will restart the timer once its clicked.
      document.getElementById("secondRound").style.display = "block";
      timeLeft = TIME_LIMIT;
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const {
    alert,
    warning,
    info
  } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

function calculateTimeFraction2() {
  const rawTimeFraction = breakLeft / BREAK_LIMIT;
  return rawTimeFraction - (1 / BREAK_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray2() {
  const circleDasharray = `${(
    calculateTimeFraction2() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

document.getElementById("secondRound").onclick = function () {
  timePassed = 0;
  timeLeft = TIME_LIMIT;
  roundTwo();
}
//second round
function roundTwo() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
      beep.play();
      document.getElementById("saveFarm").style.display = "block";
    }
  }, 1000);
}

document.getElementById("saveFarm").onclick = function () {
  location.href = "timerComplete.html";
}

/************************************************************************** 
    would be better if we could hav firebase set the default to 0 and
    just pull the data from firebase and use a constructor to instantiate
    the data
***************************************************************************/

let chickenB = document.getElementById("chicken");
let pigB = document.getElementById("pig");
let cowB = document.getElementById("cow");
let horseB = document.getElementById("horse");
let sheepB = document.getElementById("sheep");
let dogB = document.getElementById("dog");
let backB = document.getElementById("back");

function Animal(type) {
  this.type = type;
}

chickenB.onclick = function () {
  document.getElementById("header2").style.display = "none";
  setTimeout(startBreak, TIMER_MS);
  startTimer();
  document.getElementById("page1").style.display = "none";
  document.getElementById("animal").src = "images/chicken.png"
  document.getElementById("animal").style.display = "block";
  document.getElementById("app").style.display = "block";
  document.getElementById("backButton").style.display = "block";
  let newAnimal = new Animal("chicken");
  sessionStorage.setItem("animal", newAnimal.type);

}

pigB.onclick = function () {
  document.getElementById("header2").style.display = "none";
  setTimeout(startBreak, TIMER_MS);
  startTimer();
  document.getElementById("page1").style.display = "none";
  document.getElementById("animal").src = "images/pig.png"
  document.getElementById("animal").style.display = "block";
  document.getElementById("app").style.display = "block";
  document.getElementById("backButton").style.display = "block";
  let newAnimal = new Animal("pig");
  sessionStorage.setItem("animal", newAnimal.type);
}

cowB.onclick = function () {
  document.getElementById("header2").style.display = "none";
  setTimeout(startBreak, TIMER_MS);
  startTimer();
  document.getElementById("page1").style.display = "none";
  document.getElementById("animal").src = "images/cow.png"
  document.getElementById("animal").style.display = "block";
  document.getElementById("app").style.display = "block";
  document.getElementById("backButton").style.display = "block";
  let newAnimal = new Animal("cow");
  sessionStorage.setItem("animal", newAnimal.type);
}

horseB.onclick = function () {
  document.getElementById("header2").style.display = "none";
  setTimeout(startBreak, TIMER_MS);
  startTimer();
  document.getElementById("page1").style.display = "none";
  document.getElementById("animal").src = "images/horse.png"
  document.getElementById("animal").style.display = "block";
  document.getElementById("app").style.display = "block";
  document.getElementById("backButton").style.display = "block";
  let newAnimal = new Animal("horse");
  sessionStorage.setItem("animal", newAnimal.type);
}

sheepB.onclick = function () {
  document.getElementById("header2").style.display = "none";
  setTimeout(startBreak, TIMER_MS);
  startTimer();
  document.getElementById("page1").style.display = "none";
  document.getElementById("animal").src = "images/sheep.png"
  document.getElementById("animal").style.display = "block";
  document.getElementById("app").style.display = "block";
  document.getElementById("backButton").style.display = "block";
  let newAnimal = new Animal("sheep");
  sessionStorage.setItem("animal", newAnimal.type);

}

dogB.onclick = function () {
  document.getElementById("header2").style.display = "none";
  setTimeout(startBreak, TIMER_MS);
  startTimer();
  document.getElementById("page1").style.display = "none";
  document.getElementById("animal").src = "images/dog.png"
  document.getElementById("animal").style.display = "block";
  document.getElementById("app").style.display = "block";
  document.getElementById("backButton").style.display = "block";
  let newAnimal = new Animal("dog");
  sessionStorage.setItem("animal", newAnimal.type);

}

backB.onclick = function () {
  location.href = "main.html";
}