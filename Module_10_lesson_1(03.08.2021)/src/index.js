import simpleTemplate from "./templates/simple.hbs";
import listTemplate from "./templates/list.hbs";
import arrayTemplate from "./templates/array.hbs";
import { nanoid } from "nanoid";
import { base, list, frameworks } from "./data/hbsData.js";
import "./styles/style.css";

// const menuData = {
//   title: "Eat it createElement, templates rule!",
//   items: ["Handlebars", "LoDash", "Pug", "EJS", "lit-html"],
// };

// const markup = menuTemplate(menuData); // html разметка с подставленным значениями
// console.log(markup);

// 1) Simple example
// console.log(frameworks);

// const markup = arrayTemplate(frameworks);
// console.log(markup);
