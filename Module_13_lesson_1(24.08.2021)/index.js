const getUsers = () => {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((result) => result.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
// getUsers().then((data) => console.log(data));

const getUsersAsync = async () => {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos");
    const dataFromServer = result.json();
    console.log("dataFromServer", dataFromServer);
  } catch (error) {
    return "Error";
  }
};

getUsersAsync();
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

new Promise((resolve, reject) => {
  reject("ERROR");
});

function renderList() {
  console.log("Render list");
}

// function renderButton() {
//   console.log("Render Button");
// }

// const draw = async () => {
//   await renderList();
//   await renderButton();
// };

// const paint = () => {
//   renderList();
//   renderButton();
// };

// draw();
// paint();
