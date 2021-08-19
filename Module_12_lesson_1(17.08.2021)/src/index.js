import "./sass/main.scss";
import axios from 'axios';
// import debounce from 'lodash.debounce';

// debounce(test, 2000)

// function test () {
//   console.log('object')
// }

// import {
//   alert,
//   info,
//   success,
//   error,
// } from "../node_modules/@pnotify/core/dist/PNotify.js";
// import "@pnotify/core/dist/BrightTheme.css";

// success({
//   text: "Notice me, senpai!",
// });

// fetch(
//   "https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&image_type=illustration&orientation=vertical&per_page=3"
// )
//   //   fetch('https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&id=6543897')
//   .then((response) => response.json())
//   .then((data) => createGallery(data.hits))
//   .catch((err) => console.log(err));

// function createGallery(arr) {
//   for (let obj of arr) {
//     createImg(obj);
//   }
// }

// function createImg(obj) {
//   const img = document.createElement("img");
//   img.src = obj.webformatURL;
//   root.appendChild(img);
// }

// const root = document.querySelector("#root");

// pagination
// let page = 1

// const fetchData = () => {
// fetch(`https://api.github.com/search/users?q=Vova&client_id=67684cabc84f94f0938e&client_secret=782ea639550c1b5d986bdd8129813652ed04c92c&page=${page}`)
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .then(() => page++)
// }

// const button = document.querySelector('button');
// button.addEventListener('click', fetchData)

// endpoint
// resource
// params


// Search cocktail by name
// www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

// List all cocktails by first letter
// www.thecocktaildb.com/api/json/v1/1/search.php?f=a

// Search ingredient by name
// www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka

// Lookup full cocktail details by id
// www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007

// Lookup ingredient by ID
// www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=552

// Lookup a random cocktail
// www.thecocktaildb.com/api/json/v1/1/random.php

// Search by ingredient
// www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin
// www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka

// Filter by alcoholic
// www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic
// www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic

// Filter by Category
// www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink
// www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail

// Filter by Glass
// www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass
// www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute

// List the categories, glasses, ingredients or alcoholic filters
// www.thecocktaildb.com/api/json/v1/1/list.php?c=list
// www.thecocktaildb.com/api/json/v1/1/list.php?g=list
// www.thecocktaildb.com/api/json/v1/1/list.php?i=list
// www.thecocktaildb.com/api/json/v1/1/list.php?a=list

const refs = {
  form: document.querySelector('#form'),
  input: document.querySelector('#search'),
  container: document.querySelector('.container'),
  more: document.querySelector('#more')
}

const hendlerSubmit = (e) => {
  e.preventDefault()
  // innerHTML
  const value = refs.input.value
  axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
  .then(result => renderCollection(result.data.drinks))
  .catch(err => console.log(err))
    // fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
  // .then(response => response.json())
  // .then(result => renderCollection(result.drinks))
  // .catch(err => console.log(err))
}

let currentPage = 1

const gitHanlerSubmit = (e) => {
  e.preventDefault()
  const value = refs.input.value;
  axios.get(`https://api.github.com/search/users?q=${value}&client_id=67684cabc84f94f0938e&client_secret=782ea639550c1b5d986bdd8129813652ed04c92c&page=${currentPage}`)
  .then(result => renderGitCollection(result.data.items))
  .then(() => currentPage++)
  .catch((err) => console.log(err))
}


function createItem ({strDrinkThumb, strDrink}) {
  const article = `<article>
    <img src='${strDrinkThumb}' alt='${strDrink}'/>
    <p>${strDrink}</p>
  </article>
`
refs.container.insertAdjacentHTML('beforeend', article)
}

function createGitItem ({avatar_url, login}) {
  const article = `<article>
    <img src='${avatar_url}' alt='${login}'/>
    <p>${login}</p>
  </article>
`
refs.container.insertAdjacentHTML('beforeend', article)
}

function renderCollection (arr) {
  arr.forEach(el => createItem(el))
}

function renderGitCollection (arr) {
  arr.forEach(el => createGitItem(el))
}


// fetch(`https://www.thecoctaildb.com/api.php/json/v1/1/search.php?s=${value}`)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
// }







refs.form.addEventListener('submit', gitHanlerSubmit)
refs.more.addEventListener('click', gitHanlerSubmit)



// function getIngridient(obj) {
//     const ing = []
//     const keys = Object.keys(obj).filter(el => el.includes('strIngredient'))
//     for (let el of keys) {
//         if (obj[el]) {
//             ing.push(obj[el])
//         }
//     }
//     console.log(`ing`, ing)
// }
