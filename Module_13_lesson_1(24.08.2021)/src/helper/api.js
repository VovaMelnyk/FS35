import axios from "axios";
import { createList, deleteUi } from "../js/handlers.js";
import refs from "../js/refs.js";
import { createLi } from "../js/templateStringHandler.js";

export function createTask(value) {
  fetch("http://localhost:7777/items", {
    method: "POST",
    body: JSON.stringify({ text: value }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => refs.ul.insertAdjacentHTML("beforeend", createLi(data)))
    .catch((err) => console.log(err));
}

export function createTaskWithAxios(value) {
  axios
    .post("http://localhost:7777/items", { text: value })
    .then((result) =>
      refs.ul.insertAdjacentHTML("beforeend", createLi(result.data))
    )
    .catch((err) => console.log(err));
}

export function getTasks() {
  axios
    .get("http://localhost:7777/items")
    .then((result) => createList(result.data))
    .catch((err) => console.log(err));
}

export function deleteTask(id) {
  fetch(`http://localhost:7777/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

export function deleteTaskWithAxios(id) {
  axios
    .delete(`http://localhost:7777/items/${id}`)
    .then((result) => deleteUi(id))
    .catch((err) => console.log(err));
}

export function updateTask(id, value) {
  fetch(`http://localhost:7777/items/${id}`, {
    method: "PUT",
    body: JSON.stringify({ text: value }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => refs.ul.insertAdjacentHTML("beforeend", createLi(data)))
    .catch((err) => console.log(err));
}

export function updateTaskWithAxios(id, value) {
  axios
    .put(`http://localhost:7777/items/${id}`, { text: value })
    .then((result) =>
      refs.ul.insertAdjacentHTML("beforeend", createLi(result.data))
    )
    .catch((err) => console.log(err));
}

// put;
// patch;

// {
//   id: 2;
//   text: "qqqqq";
//   desc: "wwewewewe";
// }
// // put
// {
//   text: "qqqqq";
// }

// {
//   id: 2;
//   text: "qqqqq";
// }

// // patch
// {
//   text: "wwwwww";
// }

// {
//   id: 2;
//   text: "wwwwww";
//   desc: "wwewewewe";
// }
