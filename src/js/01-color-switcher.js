function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startButtonRef = document.querySelector('button[data-start]');
const stopButtonRef = document.querySelector('button[data-stop]');
const bodyRef = document.querySelector('body');

startButtonRef.addEventListener('click', handleStart);
stopButtonRef.addEventListener('click', handleStop);

let idInterval;

function handleStart(event) {
  startButtonRef.disabled = true;
  stopButtonRef.disabled = false;
  idInterval = setInterval(() => {
    const randomColor = getRandomHexColor();

    bodyRef.style.backgroundColor = randomColor;
  }, 1000);
}

function handleStop(event) {
  startButtonRef.disabled = false;
  stopButtonRef.disabled = true;
  clearInterval(idInterval);
}
