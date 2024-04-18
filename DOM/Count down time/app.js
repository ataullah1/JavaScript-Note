console.log('Hello world');
const day = document.getElementById('day');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

// console.log(day, hour, minute, second);

// const dateTime = () => {
//   const date = new Date();
//   const dateDay = date.getDate();
//   const gonta = date.getHours();
//   const mnt = date.getMinutes();
//   const scnd = date.getSeconds();
//   day.innerText = dateDay;
//   hour.innerText = gonta;
//   minute.innerText = mnt;
//   second.innerText = scnd;
// };
// setTimeout(dateTime(), 1000);

function timer() {
  let currentTime = new Date();
  let date = currentTime.getDate();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let sec = currentTime.getSeconds();
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (sec < 10) {
    sec = '0' + sec;
  }

  day.innerText = date;
  hour.innerText = hours;
  minute.innerText = minutes;
  second.innerText = sec;
  setTimeout(timer, 1000);
}
