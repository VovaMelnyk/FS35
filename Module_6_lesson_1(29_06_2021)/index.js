// Часто при решении задач вижу следующую ситуацию  у Вас в примерах и у Репеты.
// Когда обрабатывается входящий объект Вы или Репета =)
// делаете вид что знаете какие ключи\параметры
// у объекта есть, ну и в соответствии присваиваете эти значения переменным.
// Вопрос, в реально жизни мы тоже будем знать что у "входящего" объекта внутри или нам нужно будет это самим определять\проверять ?
// Например, в какой - то тех.документации должно будет быть описание параметров\ключей, а если нет тех.документации ?
// Пример кода: Получили от бекенда объект вида { name: 1, family: 2 } Чтобы понять что у объекта есть name, оптимально
// будет сперва сделать тестовый вывод информации по объекту ? Уже потом реализовывать логику ?

// В чем же принципиальная разница между forEach & map?

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numbers.find(num => num > 5)); // 6
// console.log(numbers.find(num => num < 5)); // 0
// console.log(numbers.find(num => num === 5)); // 5
// пример из конспекта. почему меньше 5 возвращает 0? а не скажем 4

// const scientist = [
//   {
//     name: "Albert",
//     surname: "Einstein",
//     born: 1879,
//     dead: 1955,
//     id: 1,
//   },
//   {
//     name: "Isaac",
//     surname: "Newton",
//     born: 1643,
//     dead: 1727,
//     id: 2,
//   },
//   {
//     name: "Galileo",
//     surname: "Galilei",
//     born: 1564,
//     dead: 1642,
//     id: 3,
//   },
//   {
//     name: "Marie",
//     surname: "Curie",
//     born: 1867,
//     dead: 1934,
//     id: 4,
//   },
//   {
//     name: "Johannes",
//     surname: "Kepler",
//     born: 1571,
//     dead: 1630,
//     id: 5,
//   },
//   {
//     name: "Nicolaus",
//     surname: "Copernicus",
//     born: 1473,
//     dead: 1543,
//     id: 6,
//   },
//   {
//     name: "Max",
//     surname: "Planck",
//     born: 1858,
//     dead: 1947,
//     id: 7,
//   },
//   {
//     name: "Katherine",
//     surname: "Blodgett",
//     born: 1898,
//     dead: 1979,
//     id: 8,
//   },
//   {
//     name: "Ada",
//     surname: "Lovelace",
//     born: 1815,
//     dead: 1852,
//     id: 9,
//   },
//   {
//     name: "Sarah E.",
//     surname: "Goode",
//     born: 1855,
//     dead: 1905,
//     id: 10,
//   },
//   {
//     name: "Lise",
//     surname: "Meitner",
//     born: 1878,
//     dead: 1968,
//     id: 11,
//   },
//   {
//     name: "Hanna",
//     surname: "Hammarström",
//     born: 1829,
//     dead: 1909,
//     id: 12,
//   },
// ];

//  получить массив ученых которые родились в 19 ст
//  Посчитать суму лет сколько прожили все ученные
//  Отсортировать по алфавиту
//  Отсортировать по количеству прожитых лет
//   Удалить ученых которые родились в 15,16,17 ст
//   Найти год рождения Albert Einstein
//   Узнать все ли ученые работала в 19 ст

// async function getData() {
//   let result = null;
//   let response = await fetch("https://restcountries.eu/rest/v2/all");
//   result = await response.json();
//   return result;
// }

// getData().then((data) => localStorage.setItem("arr", JSON.stringify(data)));

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

