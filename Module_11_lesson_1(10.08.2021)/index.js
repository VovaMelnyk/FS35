// console.log(new Date("December 17", "1995 03:24:00"));

// Date.now() // 313442423443423423

// for (let i = 3; i > 0; i--) {
//   setTimeout(console.log(i), i * 1000);
// }

// setTimeout(console.log(i), 3000)
// setTimeout(console.log(i), 2000);
// setTimeout(console.log(i), 1000);

// 012
// 123
// 333
// error
// const a = setTimeout(() => console.log(object), 1000) // 1

// function addClasses() {
//   const modal = document.querySelector(".modal");
//   modal.classList.add("animate__bounce", "modal_show");
// }

// function showModal() {
//   setTimeout(addClasses, 2000);
// }
// window.addEventListener("DOMContentLoaded", showModal);

// sync code
// function add(a, b) {
//   return a + b;
// }
// console.log("object");
// console.log("Hello");
// add(1, 3);

// let arr = [];
// for (let i = 0; i < 10000000; i++) {
//   arr.push(i);
// }

// console.log(arr)

// function logger() {
//   console.log(`logger`);
// }

// console.log("1");
// console.log("2");
// setTimeout(logger, 2000);
// console.log("3");

// for (let i = 3; i > 0; i--) {
//   const delay = i * 1000;
//   setTimeout(() => console.log(i), delay);
// }
// // delay = 3000
// setTimeout(() => console.log(3), 3000)
// // delay = 2000
// setTimeout(() => console.log(2), 2000)
// // delay = 1000
// setTimeout(() => console.log(1), 1000)

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

// date (new Date() getDate, getMonth, getFullYear, getDay, getTime, getHours, getMinutes, getSeconds, getMileseconds, now)
// const today = new Date()
// console.log(today);
// console.log(today.getDate());
// console.log(today.getMonth());
// console.log(today.getFullYear());
// console.log(today.getDay());
// console.log(today.getHours());
// console.log(today.getMinutes());
// console.log(today.getSeconds());
// console.log(today.getMilliseconds());
// console.log(today.getTime());
// console.log(Date.now());

// const refs = {
//   startBtn: document.querySelector("#start"),
//   stopBtn: document.querySelector("#stop"),
//   secondText: document.querySelector(".seconds"),
//   minutesText: document.querySelector(".minutes"),
// };

// function timer() {
//   result = Math.floor((new Date() - startDate) / 1000);
//   seconds = result % 60;
//   minutes = Math.floor(result / 60);
//   refs.secondText.textContent = seconds < 10 ? `0${seconds}` : seconds;
//   refs.minutesText.textContent = minutes < 10 ? `0${minutes}` : minutes;
// }

// let watchId = null;
// let startDate = null;
// let result = null;
// let seconds = null;
// let minutes = null;

// function startWatch() {
//   startDate = new Date();
//   watchId = setInterval(timer, 1000);
// }

// // function startWatch() {
// //   startDate = new Date();
// //   watchId = setInterval(() => {
// //     result = Math.floor((new Date() - startDate) / 1000);
// //     refs.secondText.textContent = result < 10 ? `0${result}` : result;
// //   }, 1000);
// // }

// function stopWatch() {
//   clearInterval(watchId);
// }

// refs.startBtn.addEventListener("click", startWatch);
// refs.stopBtn.addEventListener("click", stopWatch);

// const time = 126;
// console.log("minutes", Math.floor(126 / 60));
// console.log("seconds", 126 % 60);

// new Date ()
// 1) 2 авг 21:03:36
// 2) 2 авг 21:03:37
// 1 сек

// Date.now()
// 1) 12345678980
// 2) 1234567891
// 1 сек

// stopwatch

// class Stopwatch {
//   constructor() {
//     this.timerId = null;
//     this.dateStart = null;
//     this.startBtn = document.querySelector("#start");
//     this.stopBtn = document.querySelector("#stop");
//     this.sec = document.querySelector(".seconds");
//     this.min = document.querySelector(".minutes");
//     this.hours = document.querySelector('.hours')

//     this.action = this.action.bind(this);
//     this.start = this.start.bind(this);
//     this.stop = this.stop.bind(this);
//   }

//   action() {
//     const delta = Date.now() - this.dateStart;
//     //   console.log(delta);
//     const sec = Math.floor((delta / 1000) % 60);
//     const minutes = Math.floor((delta / 1000 / 60) % 60);
//     const hours = Math.floor((delta / 1000 / 60 / 60) % 24);

//     this.sec.textContent = sec < 10 ? `0${sec}` : sec;
//     this.min.textContent = minutes < 10 ? `0${minutes}`: minutes;
//     this.hours.textContent = hours < 10 ? `0${hours}` : hours
//   }

//   start() {
//     this.timerId = setInterval(this.action, 500);
//     this.dateStart = Date.now();
//   }

//   stop() {
//     clearInterval(this.timerId);
//   }

//   init() {
//     this.startBtn.addEventListener("click", this.start);
//     this.stopBtn.addEventListener("click", this.stop);
//   }
// }

// const watch = new Stopwatch();
// watch.init();

class StopWatch {
  constructor() {
    // this = {}
    this.refs = {
      start: document.querySelector("#start"),
      stop: document.querySelector("#stop"),
      sec: document.querySelector(".seconds"),
      min: document.querySelector(".minutes"),
    };
    this.id = null;
    this.startDate = null;

    // this.timerStart = this.timerStart.bind(this);
    // this.timerStop = this.timerStop.bind(this);

    // this = {refs, id, startDate, timerStart, timerStop}
  }

  calc = () => {
    const currentDate = Date.now();
    const delta = (currentDate - this.startDate) / 1000;
    const sec = Math.floor(delta % 60);
    const min = Math.floor(delta / 60);
    this.refs.sec.textContent = sec < 10 ? `0${sec}` : sec;
    this.refs.min.textContent = min < 10 ? `0${min}` : min;
  };

  timerStart = () => {
    this.startDate = Date.now();
    this.id = setInterval(this.calc, 1000);
  };

  timerStop = () => {
    clearInterval(this.id);
  };

  // init() {
  //   this.refs.start.addEventListener("click", this.timerStart);
  //   this.refs.stop.addEventListener("click", this.timerStop);
  // }
}

const watch = new StopWatch();
window.addEventListener("DOMContentLoaded", watch.timerStart);

// watch.init();
console.log(watch);

// const refs = {
//   start: document.querySelector("#start"),
//   stop: document.querySelector("#stop"),
//   sec: document.querySelector(".seconds"),
//   min: document.querySelector(".minutes"),
// };

// function calc() {
//   const currentDate = Date.now();
//   const delta = (currentDate - startDate) / 1000;
//   const sec = Math.floor(delta % 60);
//   const min = Math.floor(delta / 60);
//   refs.sec.textContent = sec < 10 ? `0${sec}` : sec;
//   refs.min.textContent = min < 10 ? `0${min}` : min;
// }

// let id = null;
// let startDate = null;

// function timerStart() {
//   startDate = Date.now();
//   id = setInterval(calc, 1000);
//   console.log(start);
// }

// function timerStop() {
//   clearInterval(id);
// }

// refs.start.addEventListener("click", timerStart);
// refs.stop.addEventListener("click", timerStop);

// setInterval(() => {
//   console.log("run");
// }, 1000);

// фиксировать дату старта
// считаем сколько времени прошло от старта

// 20:25:12
// 20:25:13
// 1
// 220 sec 3m 40 sec
console.log(220 % 60);
console.log(Math.floor(220 / 60));
