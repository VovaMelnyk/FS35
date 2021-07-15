// work with collections
// const items = document.querySelectorAll(".menu-item");
// const items = [...document.querySelectorAll(".menu-item")];

// console.log(items);
// items.forEach((item) => item.classList.add("red"));

// создать форму в которой можно написать текст и при ее сабмите таакой текст показывать в параграфе
// При клике очистить - удалять текст

// e
// const showKey = (e) => {
//   console.log(e);
// };

// window.addEventListener("keypress", showKey);

//Написать приложение которое будет считать цену шашлика в зависимости от цены за килограм и количиства купленого продукта
//Работа с формой - input, submit

// let price = document.querySelector("#price");
// let quantity = document.querySelector("#quantity");
// let totalP = document.querySelector(".total");
// let amount = document.querySelector(".amount");
// let form = document.querySelector(".form");

// function calc(e) {
//   let total = price.value * quantity.value;
//   totalP.textContent = total.toFixed(2) + "грн";
//   amount.textContent = quantity.value;
// }
// form.addEventListener("submit", calc);
// window.addEventListener("DOMContentLoaded", calc);

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
