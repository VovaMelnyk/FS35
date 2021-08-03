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

const markup = questionsTemplate(serverData);

refs.root.insertAdjacentHTML("beforeend", markup);

refs.form.addEventListener("submit", submitHandler);
