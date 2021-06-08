// ES5, ES6, ES12

// function countProps(object) {
//   let propCount = 0;
//   //   let arr = [];
//   const arr = [];

//   const keys = Object.keys(object);
//   for (key of keys) {
//     arr.push(key);
//   }
//   // arr - []
//   // arr - ['mail', 'isOnline', 'score']
//   console.log(arr);
//   propCount = arr.length;
//   console.log(arr.length);

//   return propCount;
// }

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// Можем ли мы использовать this вместо hotel в этом примере из конспекта?
const hotel = {
  name: "Resort Hotel",
  stars: 5,
  capacity: 100,
  //   showName() {
  //     console.log(`this`, this);
  //     // console.log(`name =`, this.name);
  //   },

  //     showName: function () {
  //       // this = hotel
  //         // clg
  //     console.log(`this`, this);
  //   },
};

// hotel.showName();

// const keys = Object.keys(hotel);
// const values = Object.values(hotel);
// const entries = Object.entries(hotel); //[[name, 'Resort Hotel'], [stars, '5'], [capacity, 100]]
// const obj = Object.fromEntries(entries);

// console.log(`keys`, keys);
// console.log(`values`, values);
// console.log(`entries`, entries);
// console.log(`obj`, obj);

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = { x: 5, j: 10, ...a, z: 15, ...b };
// // x :1 => x: 5 перезаписиваем на x: 1
// // y : 2 => y : 2
// // x: 0 => x : 1 переписиваем на x:0
// // z: 3 => z: 15 переписиваем на z: 3

// console.log(c); // {x: 0, j: 10, y: 2, z: 3}
//можно уточнить, почему  в получившемся объекте, Х = 0, а не 5 ?

// const newSettings = {
//   theme: "Default",
// };

// const pinkSettings = {
//   theme: "Pink",
//   font: "Open",
//   size: "15px",
// };

// const siteSettings = {
//   theme: "Dark",
//   font: "monospace",
//   navbarPosition: "fixed",
//   ...pinkSettings,
// };

// console.log(`settings`, siteSettings);

// Optional Chaining ?.

// const car = {
//   speed: {
//     value: 150,
//     unit: "mph",
//   },
//   doors: 5,
//   wheels: {
//     value: 5,
//     // size: {
//     //   big: "Large",
//     // },
//   },
// };
// console.log(car.wheels.value);
// console.log(car.wheels && car.wheels.value);

// if (car.wheels) {
//   console.log(car.wheels.value);
// }

// console.log(car.wheels?.size?.big);

// car.wheels // undefined
// undefined.value
// console.log(car.speed?.value);
// console.log(car.speed?.whatever);
// console.log(car.speed?.whatever?.value);

// 1)  Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);
// console.log(`keys`, keys);

// for (let key of keys) {
//   // key = 'name'
//   // key = 'age'
//   console.log(`${key} : ${user[key]}`);
// }

// console.log(user);

// 2) У нас есть объект, в котором хранятся зарплаты нашей команды.
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
// Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const money = Object.values(salaries);
// console.log(`money`, money);
// let total = 0;

// for (let element of money) {
//   total += element;
// }

// console.log(`total`, total);

// function calculateSalaries(salaries) {
//   const money = Object.values(salaries);
//   console.log(`money`, money);
//   let total = 0;

//   for (let element of money) {
//     total += element;
//   }
//   return total;
// }

// console.log("result", calculateSalaries(salaries));

// 3) Напишите ф - цию calcTotalPrice(stones, stoneName), которая принимает массив обьектов и строку с названием камня.
// Ф - ция считает и возвращает общую стоимость камней с таким именем, ценой и количеством из обьекта

// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 3 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 200, quantity: 2 },
// ];

// console.log(`result`, calcTotalPrice(stones, "Бриллиант")); // 8100

// 4) Создайте объект calculator(калькулятор) с тремя методами:
// read()- запрашивает два значения и сохраняет их как свойства объекта.
// sum() - возвращает сумму сохранённых значений.
// mult() - перемножает сохранённые значения и возвращает результат.

// const calculator = {
//   a: null,
//   b: null,

//   read() {
//     this.a = prompt("Enter A value");
//     this.b = prompt("Enter B value");
//   },

//   sum() {
//     return Number(this.a) + Number(this.b);
//   },

//   mult() {
//     return this.a * this.b;
//   },
// };

// console.log("before read", calculator);
// calculator.read();
// console.log("after read", calculator);
// console.log(`sum`, calculator.sum());
// console.log(`mult`, calculator.mult());

// 5) Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    return {
      id: this.transactions.length,
      amount,
      type,
    };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {},

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {},

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {},

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {},

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {},
};

console.log(`account`, account);
console.log("result", account.createTransaction(100, Transaction.DEPOSIT));
