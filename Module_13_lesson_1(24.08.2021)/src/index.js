import refs from "./js/refs.js";
import { submitHandler } from "./js/handlers.js";
import "./styles/style.css";
// import "../node_modules/basiclightbox/dist/basicLightbox.min.css";
import { createLi } from "./js/templateStringHandler.js";
import axios from "axios";
// import * as basicLightbox from "basiclightbox";

// let hiddenElement = document.getElementById("box");
// let btn = document.querySelector(".btn");

// function handleButtonClick() {
//   hiddenElement.scrollIntoView({ block: "end", behavior: "smooth" });
// }

// btn.addEventListener("click", handleButtonClick);

// let x = 3;
// const y = x++;

// console.log(`x:${x}, y:${y}`);
// // expected output: "x:4, y:3"

// let a = 3;
// const b = ++a;

// console.log(`a:${a}, b:${b}`);
// // expected output: "a:4, b:4" поясніть будьласка Increment

// const container = document.querySelector(".container");
// console.log(container.dataset);

// event.target.dataset.source;

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
