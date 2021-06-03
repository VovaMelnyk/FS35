// function makeStringFromArray(array, delimeter) {
//   let string;
//   string = array.join(delimeter);
//   return string;
// }

// const result = makeStringFromArray([1, 2, 4, 5], "-");
// console.log(result);

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
//   let a = sum2();

//   function sum2() {
//     let a = 30;
//     return a + b;
//   }

//   return a + b;
// }

// console.log(sum());

//1) Напиши функцию calculateAverage() которая принимает произвольное кол-во аргументов и возвращает их
// среднее значение.Все аругменты будут только числами.

// function calculateAverage() {}

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2

// 2) Напишите функцию greet(name), которая при вызове будет получать имя(например, «Василий») и логировать строку «Привет, <имя>».
// В случае отсутствующего аргумента выводить «Привет, гость»
// const greet = function (name) {
// }

// greet('Манго');
// greet();

// 3) Выполните рефакторинг заменив объявление функции на стрелочную функцию.

// function checkNumbers(a, b) {
//   if (a > b) {
//     return `число ${a} больше ${b}`;
//   }

//   return `число ${b} больше ${a}`;
// }

// 4) Выполните рефакторинг заменив объявление функции на стрелочную функцию.

// function mult(x, y, z) {
//     return x * y * z;
//   }

// 5) Написать ф - ю capitalize которая буде принимать строку и будет возвращать новую где каждое слово будет с большой буквы
// capitalize('the quick brown fox') // 'The Quick Brown Fox '

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
// addCourse("Express"); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'У вас уже есть такое курс'
// removeCourse('React'); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс с таким имененем не найден'
// updateCourse('Express', 'NestJS'); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
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
