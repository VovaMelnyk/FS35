import example from "./images/smoke.png";
import svg from "./images/flat.svg";
import "./styles/main.scss";

console.log("Interesting!");

// Create a class property without a constructor
class Game {
  name = "Violin Charades";
}
const myGame = new Game();
// Create paragraph node
const p = document.createElement("p");
p.textContent = `I like ${myGame.name}.`;

// Create heading node
const heading = document.createElement("h1");
heading.textContent = "Interesting!";

// Append SVG and heading nodes to the DOM
const app = document.querySelector("#root");
app.append(heading, p);

const img = document.createElement("img");
img.src = example;
app.append(img);

const svgImage = document.createElement("img");
svgImage.src = svg;
app.append(svgImage);
