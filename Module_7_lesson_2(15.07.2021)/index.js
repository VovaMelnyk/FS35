// work with collections
// const items = document.querySelectorAll(".menu-item"); // HTML collection - foreach
// const items = [...document.querySelectorAll(".menu-item")];
// const items = Array.from(document.querySelectorAll(".menu-item"));

// console.log(items);
// items.forEach((item) => item.classList.add("red"));

// создать форму в которой можно написать текст и при ее сабмите таакой текст показывать в параграфе
// При клике очистить - удалять текст

// e
// const showKey = (e) => {
//   if (e.key === "a") {
//     alert("You press key a");
//   }

//   console.log(e);
// };

// addEventListener("keypress", showKey);

// const button = document.querySelector("#btn");

// const clickMe = (e, text) => {
//   console.log("e object", e);
//   console.log(text);
// };

// const clickMe = () => {
//   console.log(this);
// };

// function clickMe() {
//   console.log(this);
// }

// const clickMe = (e) => {
//   console.log(e);
// };

// button.addEventListener("click", clickMe);
// button.removeEventListener("click", clickMe);
// // button.addEventListener("click", () => clickMe());
// button.addEventListener("click", function (e) {
//   clickMe(e, "Hello Text");
// });
// button.removeEventListener("click", function (e) {
//   clickMe(e, "Hello Text");
// });

// button.addEventListener("click", clickMe());

//Написать приложение которое будет считать цену шашлика в зависимости от цены за килограм и количиства купленого продукта
//Работа с формой - input, submit

// const priceInput = document.querySelector("#price");
// const quantityInput = document.querySelector("#quantity");
// const totalText = document.querySelector(".total");

// const refs = {
//   priceInput: document.querySelector("#price"),
//   quantityInput: document.querySelector("#quantity"),
//   totalText: document.querySelector(".total"),
//   form: document.querySelector(".form"),
//   amount: document.querySelector(".amount"),
//   container: document.querySelector(".container"),
// };

// console.log(refs);

// function calculate(e) {
//   e.preventDefault();
//   const price = refs.priceInput.value;
//   const quantity = refs.quantityInput.value;
//   const total = price * quantity;
//   refs.totalText.textContent = `${total.toFixed(2)} грн`;
// }

// function showAmount() {
//   const quantity = refs.quantityInput.value;
//   refs.amount.textContent = quantity;
// }

// // refs.form.addEventListener("input", calculate);
// refs.form.addEventListener("submit", calculate);
// refs.quantityInput.addEventListener("input", showAmount);
// window.addEventListener("DOMContentLoaded", calculate);

// const randomRgbColor = () => {
//   const r = Math.round(Math.random() * (255 - 1) + 1);
//   const g = Math.round(Math.random() * (255 - 1) + 1);
//   const b = Math.round(Math.random() * (255 - 1) + 1);
//   return `rgb(${r},${g},${b})`;
// };
// const color = randomRgbColor();
// refs.container.style.backgroundColor = color;
// console.log("container", refs.container);

// style.cssText = "background: red; color: #fff; padding: 10px; ";
// `<div
//   class="box"
//   style="background-color: ${randomColor()} ; width: ${width}px; height: ${height}px"
// ></div>`;

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
// form.addEventListener("input", calc);
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
