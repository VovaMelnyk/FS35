// чому тут фігурні дужки ?
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
//   constructor({ price }) { // деструктуризиция обекта
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

// // Не зрозуміло  чому порівнює по індексу
// const books = [
//   {
//     title: "Последнее королевство",
//     author: "Бернард Корнуэлл",
//     genres: ["приключения", "историческое"],
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     genres: ["фантастика", "мистика"],
//   },
//   {
//     title: "Красна как кровь",
//     author: "Ли Танит",
//     genres: ["ужасы", "мистика", "приключения"],
//   },
// ];

// Пиши код ниже этой строки
// const allGenres = books.flatMap((book) => book.genres);
// console.log(`allGenres`, allGenres);
// const uniqueGenres = allGenres.filter(
//   (genre, index, allGenres) => allGenres.indexOf(genre) === index
// );

// arr.method((el, index, arr) =>)

// console.log(`result`, new Set(allGenres));

// "приключения" => 0 === 0 => true
// "историческое" => 1 === 1 => true
// "мистика" => 3 === 3 => true
// .....
// "мистика" => 3 === 5 => false

// const numbers = [1, 2, 11, 3, 21];
// numbers.sort();
// console.log(`numbers`, numbers);

// numbers.forEach((number) => console.log(number));

//  Сортировка примитивов
// Выполнить сортировку массива цен по убыванию и возрастанию.

// const prices = [2, 14, 1, 37, 26, 8];
// const pricesInAscendingOrder = [...prices].sort((a, b) => a - b);
// const pricesInDescendingOrder = [...prices].sort((a, b) => b - a);

// console.log(`pricesInAscendingOrder`, pricesInAscendingOrder);
// console.log(`pricesInDescendingOrder`, pricesInDescendingOrder);

// console.log(`arr`, [...prices]);

// Выполнить сортировку массива названий мониторов в алфавитном и обратном алфавитном порядке.

// const items = ["SAMSUNG", "LG", "ASUS", "DELL", "BENQ"];
// const itemsInAlphabeticalOrder = [...items].sort((a, b) => (a > b ? 1 : -1));
// const itemsInDescAlphabeticalOrder = [...items].sort((a, b) =>
//   a > b ? -1 : 1
// );

// console.log(`itemsInAlphabeticalOrder`, itemsInAlphabeticalOrder);
// console.log(`itemsInDescAlphabeticalOrder`, itemsInDescAlphabeticalOrder);

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

// const allTopics = courses.flatMap((course) => course.topics);
// console.log(`allTopics`, allTopics);
// const uniqueTopics = allTopics.filter(
//   (topic, index, arr) => arr.indexOf(topic) === index
// );
// console.log(`uniqueTopics`, uniqueTopics);

async function getData() {
  let result = null;
  let response = await fetch("https://restcountries.eu/rest/v2/all");
  result = await response.json();
  return result;
}

// getData().then((data) => localStorage.setItem("arr", JSON.stringify(data)));

const arr = JSON.parse(localStorage.getItem("arr"));
console.log(arr);

// Получить стрыны из региона Europe
// Получить название самой большой страни в Европе
// Получить название самой маленькой страни в Европе
// Получить список стран с которыми граничит Швейцария (Switzerland)
// Получить процент который занимает  Австрия  в мире

const REGIONS = {
  EUROPE: "Europe",
  ASIA: "Asia",
};

const findCountryByRegion = (countries, region) =>
  countries.filter((country) => country.region === region);
// .map((country) => country.name);

const countriesInEurope = findCountryByRegion(arr, REGIONS.EUROPE);

const findLargestAndSmallestCountries = (countries) => {
  const sortedCouytriesList = [...countries].sort((a, b) => b.area - a.area);
  return {
    max: sortedCouytriesList[0],
    min: sortedCouytriesList[sortedCouytriesList.length - 1],
  };
};

console.log(`result `, findCountryByRegion(arr, REGIONS.EUROPE));
console.log(
  "min and max countries",
  findLargestAndSmallestCountries(countriesInEurope)
);

const findCountryByName = (contryName, countries) =>
  countries.find((country) => country.name === contryName);

const borders = findCountryByName("Switzerland", arr).borders;

const bordersCountries = (countries, borders) =>
  countries
    .filter((country) => borders.includes(country.alpha3Code))
    .map((country) => country.name);

console.log(`bordersCountries`, bordersCountries(countriesInEurope, borders));
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
