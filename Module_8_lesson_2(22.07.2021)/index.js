// add lodash and use throttle and debounce

// Оптимизировать роботу scroll и resize

// function scrollTrack() {
//   console.log("scroll");
// }

// function resizeTrack() {
//   console.log("resize");
// }

// const scrollThrottled = _.throttle(scrollTrack, 500); // create new function

// addEventListener("scroll", scrollThrottled);
// addEventListener("scroll", _.throttle(scrollTrack, 500));

// addEventListener("resize", _.throttle(resizeTrack, 700));

// function trackInputEvent() {
//   console.log("Send data to server");
// }

// const input = document.querySelector("input");

// input.addEventListener("input", _.debounce(trackInputEvent, 1000));

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

// const videoPlayer = document.querySelector("video");

// const handleVideoObserver = () => {
//   if (!videoPlayer.paused) {
//     videoPlayer.pause();
//   } else {
//     videoPlayer.play();
//   }
// };

// const watcher = new IntersectionObserver(handleVideoObserver, {
//   threshold: 0.5,
// });

// watcher.observe(videoPlayer);

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

// const targetElement = document.querySelector(".animated-text");

// const handleObserver = (entries) => {
//   console.log("entries", entries);
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("visible");
//     } else {
//       entry.target.classList.remove("visible");
//     }
//   });
// };

// const watcher = new IntersectionObserver(handleObserver, { threshold: 1 });

// watcher.observe(targetElement);

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
