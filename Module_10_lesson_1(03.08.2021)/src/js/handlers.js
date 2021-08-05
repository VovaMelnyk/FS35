import refs from "./refs.js";
import serverData from "../data/serverData.js";
import questionsTemplate from "../templates/questions.hbs";
import { createLi } from "./templateStringHandler.js";

// export function submitHandler(e) {
//   e.preventDefault();
//   const value = refs.input.value;
//   serverData.push(value);
//   refs.input.value = "";

//   const markup = questionsTemplate(serverData);
//   refs.root.innerHTML = markup;
// }

export function submitHandler(e) {
  e.preventDefault();
  const value = refs.input.value;
  refs.ul.insertAdjacentHTML("beforeend", createLi(value));
  const array = JSON.parse(localStorage.getItem("list"));
  const arrayForStorage = array ? array : [];
  arrayForStorage.push(value);
  localStorage.setItem("list", JSON.stringify(arrayForStorage));
  refs.input.value = "";
}
