// Timer variables
let hours = 0;
let minutes = 0;
let seconds = 0;
let timer;

// DOM elements
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

// Event listeners
startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

// Timer functions
function startTimer() {
  timer = setInterval(updateTimer, 1000);
  startButton.disabled = true;
}

function pauseTimer() {
  clearInterval(timer);
  startButton.disabled = false;
}

function resetTimer() {
  clearInterval(timer);
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateTimerDisplay();
  startButton.disabled = false;
}

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  updateTimerDisplay();
}

function updateTimerDisplay() {
  hoursElement.textContent = formatTime(hours);
  minutesElement.textContent = formatTime(minutes);
  secondsElement.textContent = formatTime(seconds);
}

function formatTime(time) {
  return time.toString().padStart(2, "0");
}
