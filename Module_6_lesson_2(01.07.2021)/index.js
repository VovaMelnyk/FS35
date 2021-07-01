// // чому тут фігурні дужки ?
// class Car {
//   static #MAX_PRICE = 50000;
//   static checkPrice(price) {
//     if (price > Car.#MAX_PRICE) {
//       return "Внимание! Цена превышает допустимую.";
//     } else {
//       return "Всё хорошо, цена в порядке.";
//     }
//   }
//   //  Пиши код выше этой строки
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

// // Не зрозуміло  чому порівнює по індексу
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];
//   // Пиши код ниже этой строки
//   const allGenres = books.flatMap(book=>book.genres);
//   const uniqueGenres = allGenres.filter((genres, index)=>allGenres.indexOf(genres)===index );

//  Сортировка примитивов
// Выполнить сортировку массива цен по убыванию и возрастанию.

// const prices = [2, 14, 1, 37, 26, 8];
// const pricesInAscendingOrder = prices;
// const pricesInDescendingOrder = prices;

// Выполнить сортировку массива названий мониторов в алфавитном и обратном алфавитном порядке.

// const items = ['SAMSUNG', 'LG', 'ASUS', 'DELL', 'BENQ'];
// const itemsInAlphabeticalOrder = items;
// const itemsInDescAlphabeticalOrder = items;

// Собрать в allTopics массив всех предметов всех курсов используя flatMap.
// Используя Array.prototype.filter выполнить фильтрацию, оставив в uniqueTopics только уникальные элементы.
// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub Desktop", "GitHub"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "Terminal", "Git", "GitHub", "HTML", "CSS"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Functions",
//       "Conditions",
//       "Classes",
//       "DOM",
//       "Git",
//       "GitHub",
//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Promises",
//       "AJAX",
//       "Git",
//       "GitHub",
//     ],
//   },
// ];
// const allTopics = courses;
// const uniqueTopics = allTopics;

// async function getData() {
//   let result = null;
//   let response = await fetch("https://restcountries.eu/rest/v2/all");
//   result = await response.json();
//   return result;
// }

// // getData().then((data) => localStorage.setItem("arr", JSON.stringify(data)));

// const arr = JSON.parse(localStorage.getItem("arr"));
// console.log(arr);

// Получить стрыны из региона Europe
// Получить название самой большой страни в Европе
// Получить название самой маленькой страни в Европе
// Получить список стран с которыми граничит Швейцария (Switzerland)
// Получить процент который занимает  Австрия  в мире

// function findBorders(countryName, countryArray) {
//   const countryCode = countryArray.find(
//     (el) => el.name === countryName
//   ).alpha3Code;
//   console.log(countryCode);
//   const result = countryArray
//     .filter((el) => el.borders.includes(countryCode))
//     .map((el) => el.name);
//   return result;
// }

// console.log(findBorders("Switzerland", arr));
