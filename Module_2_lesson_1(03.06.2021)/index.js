// function makeStringFromArray(array, delimeter) {
//     // let string;
//     // string = array.join(delimeter);
//   //   console.log(string);
// //   return array.join(delimeter);
// }

// const result = makeStringFromArray([1, 2, 4, 5], "-"); //1-2-4-5
// const result = makeStringFromArray([1, 2, 4, 5], "!"); //1!2!4!5
// const result = makeStringFromArray([1, 2, 4, 5], ","); //1,2,4,5

// console.log(result);
// const arr = [1, 2, 4, 5];

// [1, 2, 4, 5].join(','); // 1,2,4,5
// [1, 2, 4, 5].join('-'); // 1-2-4-5
// [1, 2, 4, 5].join('!'); // 1!2!4!5

// const c = 20;

// function calc(a, b) {
//   function test() {
//     const c = 10;
//   }
//   return a + b + c;
// }

// console.log(calc(5, 15));

// function double(array) {
//   for (let i = 0; i < array.length; i++) {
//     array[i] = array[i] * 2; // 2// 4 //6 // 8
//   }
// }

// const numbers = [1, 2, 3, 4];
// double(numbers);
// console.log(numbers);

// a = 5
// b = 15
// c = 10
// a + b + c
// return

// let a = 5;
// let b = 10;

// function sum() {
//   let a = 50;
//   let b = 100;

//   return a + b;
// }

// let a = 5;
// let b = 10;

// function sum() {
//   return a + b;
// }

// let a = 5;
// let b = 10;

// function sum(a, b) {
//   return a + b;
// }

// let a = 5;
// let b = 10;

// function sum() {
//   let a = 10;

//   function sum2() {
//     let a = 30;
//     return a + b;
//   }

//   return a + b;
// }

// let a = 5;
// let b = 10;

// function sum() {
//   let a = sum2(); // 40

//   function sum2() {
//     let a = 30;
//     return a + b;
//   }

//   return a + b;
// }

// console.log(sum()); // 50

//1) Напиши функцию calculateAverage() которая принимает произвольное кол-во аргументов и возвращает их
// среднее значение.Все аругменты будут только числами.

// 1) Нужно посчитать суму всех аргументов
//2) Посчитать средьнее значение
//3) Вывести результат на экран

// function calculateAverage() {
//   console.log("arguments", arguments);
//   const numbers = Array.from(arguments);
//   let total = 0;
//   for (let number of numbers) {
//     total += number;
//   }
//   const length = numbers.length;
//   const average = total / length;
//   return average;
// }

// function calculateAverage() {
//   console.log("arguments", arguments);
//   const numbers = Array.from(arguments);
//   let total = 0;
//   for (let number of numbers) {
//     total += number;
//   }
//   return (total / numbers.length).toFixed(2);
// }

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2

// 2) Напишите функцию greet(name), которая при вызове будет получать имя(например, «Василий») и логировать строку «Привет, <имя>».
// В случае отсутствующего аргумента выводить «Привет, гость»

// const greet = function (name = "гость") {
//   return `Привет ${name}`;
// };

// console.log(greet("Манго"));
// console.log(greet());

// const greet = function (name = "гость") {
//   console.log(`Привет ${name}`);
// };

// greet("Манго");
// greet();

// 3) Выполните рефакторинг заменив объявление функции на стрелочную функцию.

// function checkNumbers(a, b) {
//   if (a > b) {
//     return `число ${a} больше ${b}`;
//   }

//   return `число ${b} больше ${a}`;
// }

// const checkNumbers = function (a, b) {
//   if (a > b) {
//     return `число ${a} больше ${b}`;
//   }

//   return `число ${b} больше ${a}`;
// };

// const checkNumbers = (a, b) => {
//   if (a > b) {
//     return `число ${a} больше ${b}`;
//   }

//   return `число ${b} больше ${a}`;
// };

// const checkNumbers = (a, b) => {
//   return a > b ? `число ${a} больше ${b}` : `число ${b} больше ${a}`;
// };

// const checkNumbers = (a, b) =>
//   a > b ? `число ${a} больше ${b}` : `число ${b} больше ${a}`;

// 5) Написать ф - ю capitalize которая буде принимать строку и будет возвращать новую где каждое слово будет с большой буквы
// capitalize('the quick brown fox') // 'The Quick Brown Fox '

// function capitalize(string) {
//   const arrayFromString = string.split(" ");
//   const newArray = [];

//   for (let word of arrayFromString) {
//     let firstLetter = word[0].toUpperCase();
//     let restString = word.slice(1);
//     let finalString = `${firstLetter}${restString}`;
//     newArray.push(finalString);
//   }
//   return newArray.join(" ");
// }

// console.log(capitalize("the quick brown fox"));

// function capitalize (string) {
//     const arr = string.split(' ')
//     const finalArray =[]
//     for(let word of arr) {
//         const firstLetter = word[0].toUpperCase()
//         const restString = word.slice(1)
//         const result = firstLetter + restString;
//         finalArray.push(result)
//     }
//     const finalString = finalArray.join(' ')
//     return finalString
// }

// 6) Напишите функции для работы с коллекцией обучающих курсов courses:

// addCourse(name) - добавляет курс в конец коллекции
// removeCourse(name) - удаляет курс из коллекции
// updateCourse(oldName, newName)- изменяет имя на новое

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// function addCourse(course) {
//   if (courses.includes(course)) {
//     console.log("У вас уже есть такое курс");
//     return;
//   }
//   courses.push(course);
// }

// const addCourse = (course) => {
//   if (courses.includes(course)) {
//     console.log("У вас уже есть такое курс");
//     return;
//   }
//   courses.push(course);
// };

// const removeCourse = (course) => {
//   const courseIndex = courses.indexOf(course);
//   if (courseIndex === -1) {
//     console.log("Курс с таким имененем не найден");
//     return;
//   }
//   courses.splice(courseIndex, 1);
// };

// const updateCourse = (courseToDelete, courseToAdd) => {
//   const index = courses.indexOf(courseToDelete);
//   courses.splice(index, 1, courseToAdd);
//   //   courses[index] = courseToAdd;
//   //   removeCourse(courseToDelete);
//   //   addCourse(courseToAdd);
// };

// addCourse("Express"); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse("CSS"); // 'У вас уже есть такое курс'
// removeCourse("React"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse("Vue"); // 'Курс с таким имененем не найден'
// updateCourse("Express", "NestJS"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

// console.log(courses);

// 7) Написать ф-ю которая принимает строку в rem и возвращает ответ в пикселях
// toPX('2rem') //32px
// toPX('1rem') //16px

// 8) Написать програму которая спрашивает у пользователя цены, он вписывает их через prompt
// пока не нажмет отмену. После этого посчитать суму чисел и используя alert вывести результат на экран

// 9) Написать ф - ю конвертыции валют где мы передаем суму, валюту из которой переводим и валюту в которую переводим
// Эта ф-я возвращает суму в той валюте в которуюу переводили
// const usdToEur = 0.82;
// const eurToUsd = 1.21;
// const usdToBtc = 0.000026;
// const btcToUsd = 38630.7;
// const eurToBtc = 0.000031;
// const btcToEur = 31864.3;

// const USD = "USD";
// const EUR = "EUR";
// const BTC = "BTC";

// function convert(sum, from, to) {}
