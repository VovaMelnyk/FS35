// {}

// const printValue = function (value, word = "Hello") {
//   console.log(`${word}:${value}`);
// };

// {printValue}

// const prettyPrint = function (value) {
//   console.log("Logging value: ", value);
// };

// const repeat = function (action, n) {
//   // action = printValue
//   //   console.log("action", action);
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//     // printValue(i)
//   }
// };

// Передаем printValue как callback-функцию
// repeat(printValue, 3);
// 0
// 1
// 2

//   // Передаем prettyPrint как callback-функцию
// repeat(prettyPrint, 3);
// Logging value: 0
// Logging value: 1
// Logging value: 2

// function test() {
//   console.log(`test`);
// }

// function showString(callback) {
// }

// const arr = [1, 2, 3];

// const result = arr.map((el) => el * 2);
// console.log(result);

// showString(test);

// // global: {}
// let b = 10;
// const test = () => {
//   console.log("a", a);
//   console.log("b", b);
// };

// const a = {};
// const b = new Object()
// const c = new Array() // []

// "use strict";

// function showThis() {
//   console.log(`this`, this);
// }

// const user = {
//   age: 4,
//   name: "Bob",
//   showThis() {
//     console.log(`this`, this);
//   },
// };

// {}

// function test() {
//     // {}
//   console.log(`a`, a);
// }

// // {test}

// test();

// const a = 4545;

// user.showThis();

// function test(string) {
//   console.log(`arguments`, arguments);
//   console.log(`${string}: ${this.name}`); // user
// }

// test("Hello");

// test.call(user, "Hello");
// test.apply(user, ["Hello"]);

// showThis();

// function test () {
// test()
// }

// window.showThis();

// console.log(Object.keys(user));

// let user = {
//   name: "User",
//   age: 45,
//   showThis() {
//     console.log("this", this);
//   },
// };

// // user.showThis();

// const test = user.showThis;
// test(); // window
// user.showThis(); // user

// user.showThis = function () {
//   console.log(`New function`);
// };

// test();
// user.showThis();

// showThis();

// console.log(`test`, test);

//  const showArrowThis = () => {
//       console.log("nested this", this);
//     };

// const test = user.showThis;

// test();

// user.showArrowThis();

// Напишите две функции:

// letMeSeeYourName(callback) - спрашивает имя пользователя через prompt и вызывает коллбек ф-цию callback
// greet(name) - коллбек принимающий имя и логирующий в консоль строку "Привет" + name

// function letMeSeeYourName(callback) {
//   const name = prompt("Enter name");
//   callback(name);
// }

// function greet(name) {
//   console.log(`Hello, ${name}`);
// }

// function greetWithAlert(name) {
//   alert(name);
// }

// function universalGreet(name) {
//   console.log(`Hello, ${name}`);
//   alert(name);
// }

// letMeSeeYourName(greet);
// letMeSeeYourName(greetWithAlert);
// letMeSeeYourName(universalGreet);

// function letMeSeeYourName(callback) {
//   const name = prompt("Введите ваше имя: ", '');
//   callback(name);
// }

// function greet(name) {
//   console.log(`Привет ${name}`);
// }

// letMeSeeYourName(greet);

// usestrict

// // Напишите две функции:

// makeProduct(name, price, callback) - принимает имя и цену товара, а также колбек. Функция создаёт обьект товара, добавляя ему уникальный идентификатор в свойство id и вызывает колбек передавая ему созданный обьект.
// showProduct(product) - коллбек принимающий обьект продукта и логирующий его в консоль

// const makeProduct = (name, price, callback) => {
//   const product = {
//     name,
//     price,
//     id: Date.now(),
//   };

//   callback(product);
// };

// const logger = (product) => {
//   console.log(product);
// };

// const messager = (product) => {
//   console.log("Product created", product);
// };

// function makeProduct(name, price, callback) {
//   const product = {
//     id: Date.now(),
//     name,
//     price,
//   };

//   callback(product);
// }

// function showProduct(product) {
//   console.log(product);
// }

// makeProduct("Холодильник", 10000, logger);
// makeProduct('TV', 120000, messager)

// Исправьте ошибки чтобы код работал.

// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(price);
//   }
// }

// product.showPrice();

// Исправьте ошибки чтобы код работал.

// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//     console.log(this);
//   },
// };

// function callAction(action) {
//   action();
// }

// callAction(product.showPrice);

// Напишите метод Some

// Напишите метод every

// Напишите метод map

// const filter = function (array, test) {
//     const filteredElements = [];

//     for (const element of array) {
//       const passed = test(element);

//       if (passed) {
//         filteredElements.push(element);
//       }
//     }

//     return filteredElements;
//   };

//   const fruits = [
//     { name: "apples", quantity: 200, isFresh: true },
//     { name: "grapes", quantity: 150, isFresh: false },
//     { name: "bananas", quantity: 100, isFresh: true },
//   ];

//   const freshFruits = filter(fruits, (fruit) => fruit.isFresh);
//   console.log(freshFruits); // массив с объектами apples и bananas
