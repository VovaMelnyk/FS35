import refs from "./js/refs.js";
import { deleteHandler, submitHandler } from "./js/handlers.js";
import "./styles/style.css";
import { createLi } from "./js/templateStringHandler.js";
import axios from "axios";
import * as basicLightbox from "basiclightbox";
import "../node_modules/basiclightbox/dist/basiclightbox.min.css";
import { getTasks } from "./helper/api.js";

// let hiddenElement = document.getElementById("box");
// let btn = document.querySelector(".btn");

// function handleButtonClick() {
//   hiddenElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
// }

// function showEvent(event) {
//   console.log(event.target.dataset.price);
// }

// btn.addEventListener("click", showEvent);

// let x = 3;
// const y = x++;// x = 3
// console.log(`x:${x}, y:${y}`);
// // expected output: "x:4, y:3"

// let a = 3;
// const b = ++a; // a = 4
// // a = 4

// console.log(`a:${a}, b:${b}`);
// expected output: "a:4, b:4" поясніть будьласка Increment

// const container = document.querySelector(".container");
// console.log(container.dataset);

// yarn add basiclightbox

// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `);

// instance.show();

// let loader = false;

// function getData() {
//   loader = true;
//   if (loader) {
//     renderLoader();
//   }
//   fetch("http://localhost:7777/items")
//     .then((data) => renderData(data))
//     .finally(() => (loader = false));
// }

// function renderLoader() {
//   const loaderEl = document.createElement("h1");
//   loaderEl.textContent = "Загрузка";
//   refs.root.appendChild(loaderEl);
// }

refs.form.addEventListener("submit", submitHandler);
window.addEventListener("DOMContentLoaded", getTasks);
refs.ul.addEventListener('click', deleteHandler)

// fetch('http://localhost:7777/items', {
//     method: 'POST',
//     body: JSON.stringify({
//         desc: 'qqqqqq'
//     }),
//     headers: {
//       'Content-Type': 'application/json'
//     },
// })
// .then(res => res.json())
// .then(data => console.log(data))

// fetch('http://localhost:7777/items/2', {
//     method: 'Delete',
//     headers: {
//       'Content-Type': 'application/json'
//     },
// })
// .then(res => res.json())
// .then(data => console.log(data))

// fetch('http://localhost:7777/items/8', {
//     method: 'PUT',
//     body: JSON.stringify({
//         desc: 'aaaaa'
//     }),
//     headers: {
//       'Content-Type': 'application/json'
//     },
// })
// .then(res => res.json())
// .then(data => console.log(data))

// axios.post('http://localhost:7777/items', {desc: 'rrrrrr'})
// .then(res => console.log(res.data) )
