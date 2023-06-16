// Timer functionality
let timerIntervalId;
const timerElement = document.querySelector('.time');
const timeInput = document.getElementById("timeInput");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

function startTimer(duration, display) {
  let timer = duration;
  let intervalId = setInterval(function () {
    const hours = parseInt(timer / 3600, 10);
    const minutes = parseInt((timer % 3600) / 60, 10);
    const seconds = parseInt(timer % 60, 10);

    const formattedTime = formatTime(hours, minutes, seconds);
    display.innerHTML = formattedTime;

    if (--timer < 0) {
      clearInterval(intervalId);
      display.innerHTML = "<span>0s</span>";
      // Play timer sound here
      playTimerSound();
    }
  }, 1000);

  return intervalId;
}

function formatTime(hours, minutes, seconds) {
  const formattedHours = hours < 10 ? "0" + hours : hours;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
  return `<span>${formattedHours}h : ${formattedMinutes}m : ${formattedSeconds}s</span>`;
}

startBtn.addEventListener("click", function () {
  const timeValue = timeInput.innerText;
  const timeParts = timeValue.split(" : ");
  const hours = parseInt(timeParts[0], 10);
  const minutes = parseInt(timeParts[1], 10);
  const seconds = parseInt(timeParts[2], 10);

  if (!isNaN(hours) && !isNaN(minutes) && !isNaN(seconds)) {
    const duration = hours * 3600 + minutes * 60 + seconds;
    if (duration > 0) {
      timerIntervalId = startTimer(duration, timerElement);
    }
  }
});

stopBtn.addEventListener("click", function () {
  clearInterval(timerIntervalId);
  timerElement.innerHTML = "<span>0s</span>";
});

// Timer sound functionality
function playTimerSound() {
  // Play the timer sound here
  const audio = new Audio("https://youtu.be/TLwhqmf4Td4");
  audio.play();
}
