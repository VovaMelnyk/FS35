import refs from "./js/refs.js";
import { submitHandler } from "./js/handlers.js";
import "./styles/style.css";
import { createLi } from "./js/templateStringHandler.js";
import axios from "axios";

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
