let is24Hour = true;

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let displayHours;
  if (is24Hour) {
    displayHours = hours.toString().padStart(2, '0');
  } else {
    displayHours = ((hours % 12) || 12).toString().padStart(2, '0');
  }

  document.getElementById('clockTime').textContent =
    `${displayHours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

document.getElementById('btn24').onclick = function () {
  is24Hour = true;
  updateClock();
};
document.getElementById('btn12').onclick = function () {
  is24Hour = false;
  updateClock();
};

setInterval(updateClock, 1000);
updateClock();
