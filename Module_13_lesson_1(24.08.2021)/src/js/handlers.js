import refs from "./refs.js";
import questionsTemplate from "../templates/questions.hbs";
import { createLi } from "./templateStringHandler.js";

export function submitHandler(e) {
  e.preventDefault();
  const value = refs.input.value;
  refs.ul.insertAdjacentHTML("beforeend", createLi(value));
  refs.input.value = "";
}
