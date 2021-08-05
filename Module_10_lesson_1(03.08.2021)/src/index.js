// import simpleTemplate from "./templates/simple.hbs";
// import listTemplate from "./templates/list.hbs";
// import arrTemplate from "./templates/array.hbs";
// import libsTemplate from "./templates/libs.hbs";
// import { base, list, frameworks, libs } from "./data/hbsData.js";
import refs from "./js/refs.js";
import { submitHandler } from "./js/handlers.js";
import questionsTemplate from "./templates/questions.hbs";
import serverData from "./data/serverData.js";
import "./styles/style.css";
import { createLi } from "./js/templateStringHandler.js";

// const root = document.querySelector("#root");

// // 1) Simple example
// const markup = simpleTemplate(base);

// root.insertAdjacentHTML("beforeend", markup);

// const listMarkup = listTemplate(list);

// root.insertAdjacentHTML("beforeend", listMarkup);

// const arrMarkup = arrTemplate(frameworks);

// root.insertAdjacentHTML("beforeend", arrMarkup);

// const libsMarkup = libsTemplate(libs);

// root.insertAdjacentHTML("beforeend", libsMarkup);

// 1) Поучить доступ к данным формы - event submit
// 2) На основе данных из формы нарисовать элемнт списка - hbs

// const markup = questionsTemplate(serverData);

// refs.root.insertAdjacentHTML("beforeend", markup);

// localStorage.setItem("theme", "dark");
// const theme = localStorage.getItem("theme");
// console.log(theme);

// const settings = {
//   theme: "pink",
//   fontSize: 12,
//   fontFamily: "Roboto",
// };

// const dataForStorage = JSON.stringify(settings);

// localStorage.setItem("settings", dataForStorage);

// const data = localStorage.getItem("settings");

// console.log(`data`, JSON.parse(data));

// console.log(localStorage.getItem("settings"));

/////////////////// template string
const storageCollection = JSON.parse(localStorage.getItem("list"));
// "[1,2,3,4]" // [1,2,3,4] // null
const dataFromStorage = storageCollection ? storageCollection : [];
const result = dataFromStorage.map((string) => createLi(string));
const markup = result.join("");
refs.ul.insertAdjacentHTML("beforeend", markup);
refs.form.addEventListener("submit", submitHandler);
