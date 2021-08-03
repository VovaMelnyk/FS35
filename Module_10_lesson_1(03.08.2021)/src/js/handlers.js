import refs from "./refs.js";
import serverData from "../data/serverData.js";
import questionsTemplate from "../templates/questions.hbs";

export function submitHandler(e) {
  e.preventDefault();
  const value = refs.input.value;
  serverData.push(value);
  refs.input.value = "";

  const markup = questionsTemplate(serverData);
  refs.root.innerHTML = markup;
}
