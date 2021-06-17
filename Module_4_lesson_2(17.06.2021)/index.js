// use strict
// file
// fuction

// "use strict";

// function showThis() {
//   console.log(`this`, this.name);
// }

// showThis();

// x = 3.14; //

// myFunction();

// function myFunction() {
//   y = 3.14; //
// }

// x = 3.14;       // no error
// myFunction();

// function myFunction() {
//   "use strict";
//   y = 3.14;   // error

// }

// "use strict";

// const orders = [
//   { email: "solomon@topmail.ua", dish: "Burger" },
//   { email: "artemis@coldmail.net", dish: "Pizza" },
//   { email: "jacob@mail.com", dish: "Taco" },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position, a, b, c, d) {
//   console.log(`this`, this);
//   console.log(`a`, a);
//   console.log(`b`, b);
//   console.log(`c`, c);
//   console.log(`d`, d);
//   return `Готовим ${this.dish} для ${this.email}.Ваш заказ ${position}-й в очереди.`;
// }
// const messages = [];

// for (let i = 0; i < orders.length; i += 1) {
//   let order = orders[i];
//   let position = i + 1;
//   let result = composeMessage.call(order, position, 1, 2, "q", "Hello");
//   let result = composeMessage.apply(order, [position, 1, 2, "q", "Hello"]);

// //   let composeMessageBind = composeMessage.bind(order);
// //   composeMessageBind(position, 1, 2, "q", "Hello");
//   messages.push(result);
// }
// console.log(messages);

// Исправьте ошибки чтобы код работал.

// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(price);
//   }
// }

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

// Напишите функцию map(array, callback),
// которая первым параметром принимает массив, а вторым - функцию, которая применится к каждому элементу массива.
// Функция map должна вернуть новый массив, элементами которого будут результаты вызова коллбека.

// function map(arr, callback) {
//   let result = [];
//   for (let el of arr) {
//     result.push(callback(el));
//   }
//   return result;
// }

// console.log(map([64, 49, 36, 25, 16], (element) => element * 2));
// console.log(map([64, 49, 36, 25, 16], (element) => element - 10));
// console.log(map([64, 49, 36, 25, 16], (element) => Math.sqrt(element)));
// console.log(map([1.5, 2.1, 16.4, 9.7, 11.3], (element) => Math.ceil(element)));
// console.log(map([1.5, 2.1, 16.4, 9.7, 11.3], (element) => Math.floor(element)));

// Напишите метод Some

// function some(arr, callback) {
//   for (let element of arr) {
//     // let result = callback(element);
//     if (callback(element)) {
//       return true;
//     }
//   }
//   return false;
// }

// const numbers = [1, 3, 5, 7, 9, 10];
// const users = [{ name: "John" }, { name: "Dou" }, { name: "Jane" }];

// function checkNumber(number) {
//   return number % 2 === 0;
//   //   if (number % 2 === 0) {
//   //     return true;
//   //   }
//   //   return false;
// }

// function checkUserName(user) {
//   return user.name === "Bob";
// }

// console.log(some(numbers, checkNumber));

// console.log(some(users, checkUserName));
// console.log(some(users, (user) => user.name === "Bob"));
// console.log(some(users, function (user) {
//     return user.name === "Bob"
// });

// Напишите метод every

// 1) Напишите функцию makeCounter(), которая возвращает другую функцию, которая считает и логирует количество своих вызовов.

// function makeCounter() {}

// const counter = makeCounter();

// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

// 2)  Напишите функцию savePassword(password) которая принимает пароль и возвращает внутреннюю функцию,
// которая принимает строку и возвращает буль true, если строка совпадает с сохраненным паролем и false - если не совпадает.

// function makePasswordChecker(password) {
//
// }

// const checker = makePasswordChecker("Hello");

// console.log(`checker`, checker("Aaaaaa")); // false
// console.log(`checker`, checker("Bbbbbbb")); // false
// console.log(`checker`, checker("Hello")); // true

// const user = {};
// const b = { key: "b" };
// const c = { key: "c" };

// user[b] = 1; // add key '[object Object]'
// console.log(`user`, user);

// user[c] = 2; // rewrite key '[object Object]'
// console.log(`user`, user);

// const user = {
//   name: "bob",
//   age: 24,
// };

// const propertyName = "age";
// const moodValue = "isHappy";
// user[moodValue] = true;
// console.log(`user`, user);
// console.log(user[propertyName]);

// console.log(a[b]);

// Напишите функцию для хранения скидки.Функция возвращает другую функцию, которая принимает
// сумму покупки и возвращает финальную сумму с сохранённой скидкой.

// function applyDiscount(discount) { // 0.1
//   // {discount}
//   return function countFinalCost(value) {
//     //   {value, discount}
//     return value - value * discount;
//   };
// }

// // console.log(applyDiscount(0));

// const withBaseDiscount = applyDiscount(0); // {discount = 0}
// const withSilverDiscount = applyDiscount(0.05);
// const withGoldDiscount = applyDiscount(0.1);

// console.log(withBaseDiscount); //

// console.log(withBaseDiscount(100)); // 100
// console.log(withBaseDiscount(200)); // 200
// console.log(withSilverDiscount(100)); // 95
// console.log(withSilverDiscount(200)); //190
// console.log(withGoldDiscount(100)); // 90
// console.log(withGoldDiscount(200)); // 180
