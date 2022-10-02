const hoursEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

const updateClock = function () {
  // Get current date
  const currentDate = new Date();

  // Hour, minutes, seconds from the current Date
  const hour = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const second = currentDate.getSeconds();
  console.log(`Hour:${hour}, Minutes${minutes}, Seconds:${second}`);

  // Hours degree rotation
  const hourDeg = (hour / 12) * 360;
  hoursEl.style.transform = `rotate(${hourDeg}deg)`;

  // Minutes degree rotation
  const minuteDeg = (minutes / 60) * 360;
  minuteEl.style.transform = `rotate(${minuteDeg}deg)`;

  // Seconds degree rotation
  const secondDeg = (second / 60) * 360;
  secondEl.style.transform = `rotate(${secondDeg}deg)`;
};
updateClock();

setInterval(updateClock, 1000);
