// const printValue = function (value) {
//     console.log(value);
//   };
  
//   const prettyPrint = function (value) {
//     console.log("Logging value: ", value);
//   };
  
//   const repeat = function (n, action) {
//     for (let i = 0; i < n; i += 1) {
//       action(i);
//     }
//   };
  
//   // Передаем printValue как callback-функцию
//   repeat(3, printValue);
//   // 0
//   // 1
//   // 2
  
//   // Передаем prettyPrint как callback-функцию
//   repeat(3, prettyPrint);
//   // Logging value: 0
//   // Logging value: 1
//   // Logging value: 2
  




// // global: {}
// let b = 10;
// const test = () => {
//   console.log("a", a);
//   console.log("b", b);
// };

// test();

// const a = 4545;

// let user = {
//   name: "User",
//   age: 45,
//   showThis() {
//     console.log("this", this);
//   },
// };

//  const showArrowThis = () => {
//       console.log("nested this", this);
//     };

// user.showThis();

// const test = user.showThis;

// test();

// user.showArrowThis();

// Напишите две функции:

// letMeSeeYourName(callback) - спрашивает имя пользователя через prompt и вызывает коллбек ф-цию callback
// greet(name) - коллбек принимающий имя и логирующий в консоль строку "Привет" + name

// function letMeSeeYourName(callback) {
//   const name = prompt("Введите ваше имя: ", '');
//   callback(name);
// }

// function greet(name) {
//   console.log(`Привет ${name}`);
// }

// letMeSeeYourName(greet);

// // Напишите две функции:

// makeProduct(name, price, callback) - принимает имя и цену товара, а также колбек. Функция создаёт обьект товара, добавляя ему уникальный идентификатор в свойство id и вызывает колбек передавая ему созданный обьект.
// showProduct(product) - коллбек принимающий обьект продукта и логирующий его в консоль

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

// makeProduct("Холодильник", 10000, showProduct);

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
