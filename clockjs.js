const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

function time(){
  const date = new Date();
  const sec = date.getSeconds();
  const secDegree = ((sec/60) * 360) + 90;
  second.style.transform = `rotate(${secDegree}deg)`;

  const min = date.getMinutes();
  const minDegree = ((min/60) * 360) + 90;
  minute.style.transform = `rotate(${minDegree}deg)`;

  const hours = date.getHours();
  const hourDegree = ((hours/12) * 360) + 90;
  hour.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(time, 1000);
