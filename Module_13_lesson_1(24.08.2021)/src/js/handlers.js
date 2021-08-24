import refs from "./refs.js";
import {
  createTask,
  createTaskWithAxios,
  deleteTask,
  deleteTaskWithAxios,
} from "../helper/api.js";
import { createLi } from "./templateStringHandler.js";
export function submitHandler(e) {
  e.preventDefault();
  const value = refs.input.value;
  createTaskWithAxios(value);
  refs.input.value = "";
}

export function createList(array) {
  const list = array.map((task) => createLi(task)).join("");
  refs.ul.insertAdjacentHTML("beforeend", list);
}

export function deleteHandler(event) {
  if (event.target.dataset.id) {
    const id = event.target.dataset.id;
    deleteTaskWithAxios(id);
  }
}

export function deleteUi(id) {
  const button = document.querySelector(`[data-id='${id}']`);
  const li = button.parentElement;
  li.remove();
}
