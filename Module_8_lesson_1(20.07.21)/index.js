//event.preventDefault();
// const form = document.querySelector("form");
// const input = document.querySelector("input");
// function onSubmit(e) {
//   e.preventDefault();
//   console.log(input.value);
// }

// form.addEventListener("submit", onSubmit);

// const [decrementBtn, num, incrementBtn] =
//   document.querySelector("#counter").children;
// const onIncrementClick = () => {
//   num.textContent += 1;
// };
// const onDecrementClick = () => {
//   num.textContent -= 1;
// };

// incrementBtn.addEventListener("click", onIncrementClick);
// decrementBtn.addEventListener("click", onDecrementClick);

// function enterHandler(e) {
//   if (e.key === "Enter") {
//     console.log(e.target.textContent);
//   }
// }

// window.addEventListener("keypress", enterHandler);

// const parent = document.querySelector(".parent");

// function check(e) {
//   console.log(e.target);
//   console.log(e.currentTarget);
// }

// parent.addEventListener("click", check);

// Сделать фиксированый скрол на старнице для менюшки

// let header = document.querySelector(".header");
// let nav = document.querySelector(".nav");
// let headerH = header.clientHeight;
// function toggleMenu() {
//   if (pageYOffset > headerH) {
//     nav.classList.add("fixed-nav");
//   } else {
//     nav.classList.remove("fixed-nav");
//   }
// }
// window.addEventListener("scroll", toggleMenu);

// Написать код при котором кнопки будут убегать от курсора мышки

// let container = document.querySelector(".container");
// function changeCords(e) {
//   let btnHeight = e.target.clientHeight;
//   let btnWidth = e.target.clientWidth;
//   let newTop = Math.floor(Math.random() * (window.innerHeight - btnHeight));
//   let newLeft = Math.floor(Math.random() * (window.innerWidth - btnWidth));
//   e.target.style.top = `${newTop}px`;
//   e.target.style.left = `${newLeft}px`;
// }
// container.addEventListener("mouseover", changeCords);


// event delegation

