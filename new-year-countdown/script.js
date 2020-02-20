const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const year = document.getElementById("year");
const loading = document.getElementById("loading");

const currentYear = new Date().getFullYear();
//set background year
year.innerHTML = currentYear + 1;

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

console.log(currentYear);
console.log(newYearTime);
console.log(newYearTime - currentYear);

//Update timer
function countdownTimer() {
  const currentTime = new Date();
  const remainingTime = newYearTime - currentTime;

  const d = Math.floor(remainingTime / 1000 / 60 / 60 / 24);
  const h = Math.floor(remainingTime / 1000 / 60 / 60) % 24;
  const m = Math.floor(remainingTime / 1000 / 60) % 60;
  const s = Math.floor(remainingTime / 1000) % 60;

  // Add values to DOM
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}

//Show Spinner
setTimeout(() => {
  loading.remove();
  //It isn't recommended to use setAttribute for styling, user properties of the style object instead
  // countdown.setAttribute("style", "display:flex");
  countdown.style.display = "flex";
}, 1000);

//Run functions every second
setInterval(countdownTimer, 1000);
