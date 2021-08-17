import './sass/main.scss';
import { alert, info, success, error } from '../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';
 
  success({
    text: 'Notice me, senpai!'
  });

  fetch('https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&image_type=illustration&orientation=vertical&per_page=3')
//   fetch('https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&id=6543897')
  .then(response => response.json())
  .then(data => createGallery(data.hits))
  .catch(err => console.log(err))


  function createGallery (arr) {
      for (let obj of arr) {
          createImg(obj)
      }
  }


  function createImg (obj) {
      const img = document.createElement('img')
      img.src = obj.webformatURL;
      root.appendChild(img)
  }

  const root = document.querySelector('#root')


  // endpoint
  // resource
  // params



//   fetch('https://randomuser.me/api/')
//   .then(res => res.json())
//   .then(data => console.log(data))

// fetch('https://pokeapi.co/api/v2/pokemon/2').then(res => console.log(res))

// fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Mojito')
// .then(res => res.json())
// .then(data => getIngridient(data.drinks[0]))


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