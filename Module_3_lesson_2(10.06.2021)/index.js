// const arr = ["cat", "dog", "elephant", "lion", "tiger", "mouse"];
// const arr2 = [...arr.slice(4)];
// // 1) const copy = ...arr
// //2) const smallArr = copy.slice(4)
// // 3) arr2[...smallArr]
// console.log(arr);
// console.log(arr2);

// const user = {
//   name: "Bob",
//   age: 25,
//   isPremium: true,
//   showUserInfo() {
//     // const this = objLink
//     // const arguments
//     return `UserName is ${this.name}, userAge: ${this.age}, userStatus: ${this.isPremium}`; // Error
//   },
// };

// const name = user.name;
// const age = user.age;
// const status = user.isPremium;

// const { name, age, isPremium: status } = user;

// console.log(`name`, name);
// console.log(`age`, age);
// console.log(`status`, status);

// const response = {
//   status: "ok",
//   data: [1, 2, 3, 4],
//   isLoading: false,
// };

// const response2 = {
//   status: "ok",
//   data: "Hello World",
//   isLoading: true,
// };

// const { status, data } = response;

// console.log(`status`, status);
// console.log(`data`, data);

// const { status: userStatus, data: userData } = response2;

// function renderHeader(user) {
//   const { name, age, status } = user;
//   console.log(
//     `User name is ${name.toUpperCase()}, user age is ${age}, user status ${status}`
//   );
// }

// function renderHeader({ name, age, status }) {
//   console.log(
//     `User name is ${name.toUpperCase()}, user age is ${age}, user status ${status}`
//   );
// }

// const person = {
//   age: 15,
//   status: true,
//   name: "Bob",
// };

// renderHeader("Bob", 15, true);
// renderHeader(15, true, "Bob");
// renderHeader(person);

// console.log(person.showUserInfo());

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
  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    this.balance -= amount;
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
    return "Transaction Not Exist";
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    const filteredTransactions = [];
    let total = 0;
    for (let transaction of this.transactions) {
      if (transaction.type === type) {
        filteredTransactions.push(transaction);
      }
    }

    for (let transaction of filteredTransactions) {
      total += transaction.amount;
    }
    return total;
  },
};

// console.log(`account`, account);
// console.log("result", account.createTransaction(100, Transaction.DEPOSIT));
account.deposit(100);
account.deposit(115);
account.withdraw(50);
console.log(account.getTransactionDetails(10));
console.log("balance", account.getBalance());
console.log(`history`, account.transactions);
console.log(`filter`, account.getTransactionTotal(Transaction.WITHDRAW));

// let a = {
//     x: 1,
//     y: 2
// }

// let b = {
//     z: 5,
//     y: 4
// }

// let c = {
//     w: 7,
//     z: 8
// }

// let final = {
//     ...a,
//     ...b,
//     ...c
// }

// const sum = (a,...args) => {
//     console.log(args);
// }

// sum(1,2,3,4,5)

// let user = {
//     name: 'User',
//     age: 23,
//     isFrontend: true
// }

// let a = user.name;
// let b = user.age;
// let c = user.isFrontend;

// console.log(a);
// console.log(b);
// console.log(c);

// const  {age} = user;

// Написатm  ф-ю которая принимает 2 параметра (обект заказа и обект с ценами товара)
//Эта ф-я должна возвращать цену заказа

// const productsPrice = {
//     apple: 20,
//     orange: 5,
//     cheese: 12,
//     pork: 45,
//     bread: 23
// }

// const orderA = {
//     apple: 5,
//     cheese: 1,
//     bread: 3
// }

// const orderB = {
//     orange: 10,
//     pork: 2,
//     bread: 1
// }

// Написать ф-ю isObjectEmpty которая проверяет пустой ли обект  Если обект пустой то возвращаем true иначе false
// isObjectEmpty({}) // true
// isObjectEmpty({name: 'user, age: {21}}) // false

// НАписать ф-ю которая формирует новый обект из предыдущих

//  let desc = {
//     title: 'Warior',
//     year: 2019,
//     time: 120
// }
// let trailer = {
//     id: 2,
//     url: 'youtube/trailer/warior&2019'
// }

// let similarMovies = {
//     id: 5,
//     count: 5,
//     filmList : [
//         {
//             title: 'Movie1',
//             year: 2010,
//             time: 90
//         },
//         {
//             title: 'Movie2',
//             year: 2010,
//             time: 100
//         },{
//             title: 'Movie2',
//             year: 2010,
//             time: 85
//         }
//     ]
// }

// let filmInfo = {
//     ...desc,
//     ...similarMovies,
//     ...trailer,
//     budget: '100000$',
//     time: 150,
// }

// function sum(...args) {
//   console.log(`arguments`, arguments);
//   const numbers = [...arguments];
//   console.log(`numbers`, numbers);
//   console.log(`args`, args);
// }

// function sum(a, b, ...numbers) {
//   console.log(`numbers`, numbers);
//   const firstNumbers = [a, b];
//   console.log(`a`, a);
//   console.log(firstNumbers);
// }

// sum(1, 2, 3, 4, 5);

// const sum = () => {
//   console.log(`arduments`, arguments);
// };

// function sum(...numbers) {
//     let total = 0;
//     for (let el of numbers) {
//         total += el;
//     }
//     return total;
// }
// console.log(sum(5, 6, 7, 82, 41, 225));

// Props
// args as obj

// const atTheOldToad = {
//     potions: [
//       { name: 'Speed potion', price: 460 },
//       { name: 'Dragon breath', price: 780 },
//       { name: 'Stone skin', price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//       return this.potions;
//     },
//     addPotion(potionName) {
//       if (this.potions.includes(potionName)) {
//         return `Potion ${potionName} is already equipped!`;
//       }

//       this.potions.push(potionName);
//     },
//     removePotion(potionName) {
//       const potionIndex = this.potions.indexOf(potionName);

//       if (potionIndex === -1) {
//         return `Potion ${potionName} is not in inventory!`;
//       }

//       this.potions.splice(potionIndex, 1);
//     },
//     updatePotionName(oldName, newName) {
//       const potionIndex = this.potions.indexOf(oldName);

//       if (potionIndex === -1) {
//         return `Potion ${oldName} is not in inventory!`;
//       }

//       this.potions.splice(potionIndex, 1, newName);
//     },
//     // Change code above this line
//   };

// const potions = [
//   { name: "Speed potion", price: 460 },
//   { name: "Dragon breath", price: 780 },
//   { name: "Stone skin", price: 520 },
// ];

// function getAllProps(propName) {
//   const result = [];
//   for (let potion of potions) {
//     if (potion[propName] !== undefined) {
//       result.push(potion[propName]);
//     }
//   }
//   return result;
// }
// console.log(getAllProps("price"));
//  ['Speed potion', 'Dragon breath', 'Stone skin']
