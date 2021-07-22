// add lodash and use throttle and debounce

// Оптимизировать роботу scroll и resize

// const resize = function () {
//   console.log("resize");
// };
// const throttledResize = _.throttle(resize, 300);
// window.addEventListener("resize", throttledResize);

// Оптимизировать роботу события input

// const sendDataToServer = function () {
//   console.log("server call");
//   console.log(input.value);
// };

// const debounceSendDataToServer = _.debounce(sendDataToServer, 300);
// const input = document.querySelector("input");

// input.addEventListener("input", debounceSendDataToServer);

// Написать сайт на котором при загрузке проигрвывается видео. Как только видео пропадает
// из области видимостя более чем на 60% - ставить его на паузу

// const video = document.querySelector("video");

// let observer = new IntersectionObserver(
//   () => {
//     if (!video.paused) {
//       video.pause();
//     } else {
//       video.play();
//     }
//   },
//   { threshold: 0.6 }
// );

// observer.observe(video);

// Написать код который будет отслеживать прогрес просмотра страницы

// let n = 0;
// let count = document.querySelector("#count");
// const observer = new IntersectionObserver(
//   (entries, observer) => {
//     console.log(entries);
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         count.textContent = `articles fully viewed - ${++n}`;
//         observer.unobserve(entry.target);
//       }
//     });
//   },
//   {
//     threshold: 1,
//   }
// );

// document
//   .querySelectorAll("article > p:last-child")
//   .forEach((p) => observer.observe(p));

// Написать код который запускает анимацию когда юзер доскроливает до конкретного контента

// const target = document.querySelector(".animated-text");

// const handleObserver = (entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("visible");
//     } else {
//       entry.target.classList.remove("visible");
//     }
//   });
// };

// const observer = new IntersectionObserver(handleObserver);

// observer.observe(target);
