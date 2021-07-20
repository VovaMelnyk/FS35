//event.preventDefault();
// const form = document.querySelector("form");
// const input = document.querySelector("input");
// const link = document.querySelector("a");
// function onSubmit(e) {
//   e.preventDefault();
//   console.log("send data to server", input.value);
// }

// form.addEventListener("submit", onSubmit);

// const [decrementBtn, num, incrementBtn] =
//   document.querySelector("#counter").children;
// const onIncrementClick = () => {
//   num.textContent++; // typeof
// };
// const onDecrementClick = () => {
//   num.textContent--;
// };

// incrementBtn.addEventListener("click", onIncrementClick);
// decrementBtn.addEventListener("click", onDecrementClick);

// function enterHandler(e) {
//   if (e.key === "Enter") {
//     console.log(e.target.textContent);
//   }
// }

// function enterHandler(e) {
//   //   if (e.key !== "Enter") {
//   //     return;
//   //   }

//   console.log("key", e);

//   //   console.log(e.target.textContent);
// }

// window.addEventListener("keydown", enterHandler);

// const parent = document.querySelector(".parent");
// const modal = document.querySelector(".overlay");
// const closeIcon = document.querySelector("#close");

// function check(e) {
// //   e.stopImmediatePropagation();
//   console.log("target", e.target);
//   console.log("currentTarget", e.currentTarget);
//   //   console.log(e.target.dataset.status);
//   //   console.log(e.target.dataset.value);
//   //   console.log(e.target.dataset.number);

//   //   console.log(parent.dataset);
// }

// parent.addEventListener("click", check);

// function openModal(e) {
//   modal.classList.add("open-modal");
// }

// function closeModal() {
//   modal.classList.remove("open-modal");
// }

// function closeModalESC(e) {
//   if (e.key !== "Escape") {
//     return;
//   }

//   toggleModal();
// }

// function toggleModal() {
//   modal.classList.toggle("open-modal");
// }

// parent.addEventListener("click", toggleModal);
// closeIcon.addEventListener("click", toggleModal);
// window.addEventListener("keyup", closeModalESC);

// !e.key === escape?.return;

// Сделать фиксированый скрол на старнице для менюшки

// 1) Посчитать висоту хедера
// 2) Отслеживаем позицию скролла
// 2) Добавлять клас если скрол больше висоту хедера

// const header = document.querySelector(".header");
// const nav = document.querySelector(".nav");
// const headerHeight = header.clientHeight;
// pageYOffset;

// function navbarFixed() {
//   if (pageYOffset > headerHeight) {
//     nav.classList.add("fixed-nav");
//   } else {
//     nav.classList.remove("fixed-nav");
//   }
// }

// window.addEventListener("scroll", navbarFixed);

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
