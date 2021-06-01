// 1) В чем разница ?
// const clients = ["Mango", "Poly", "Ajax"];

// Значение элемента можно заменить
// clients[0] = "Kiwi";
// console.log(clients[0]); // Kiwi

// Или добавить
// clients[5] = "Alex";
// console.log(clients[3]);
// console.log(clients[4]);
// console.log(clients[5]);
// clients[100] = "Bob";

// console.log(clients); // ["Kiwi", "Poly", "Ajax", "Alex"]

// 2) Почему не работает консоль лог(words)  внутри функции ?
// let title = "Arrays for begginers";
// console.log(title);

// function slugify(title) {
//   // Change code below this line
//   let normalizedTitle = title.toLowerCase();
//   const words = normalizedTitle.split(" ");
//   console.log(words);
// }

// slugify(title);

// 3) Можно ли в значения массива вставлять переменные ?
// const newClients = ["Monkong", "Singu"];
// const userName = "Bob";
// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi", newClients];
// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"].concat(newClients);
// const oldClients = ["Mango", "Ajax", ...newClients, "Poly", "Kiwi"];
// console.log(oldClients);
// const number = ["Bob"];
// const number2 = [2];
// console.log(number + number2);

// 4) const для масивов
// const clients = ["Mango", "Poly", "Ajax"];
// clients = 5;
// console.log(clients);

// 5)  И чем отличается splice от переопределения?

// const arr = [2, 'a', true, null];

// const aar = [3, 'w']
// const a = [true, null]

// console.log([1, 3, 5] === [1, 3, 5]);

// const a = 5;
// const b = 5;

// console.log(a === b);

// const arr1 = [1, 2, 3]; // link1
// const arr2 = [1, 2, 3]; // link2

// console.log(arr1 === arr2);

// const numbers = [7, 3, 8, 9, 2]; // link1
// // const newNumbers = numbers.slice(3);
// const newNumbers = numbers.slice(); // link2
// console.log("numbers", numbers);
// console.log(`newNumbers`, newNumbers);
// numbers.push(4, 5, 6);
// console.log(numbers);

// 1) базовые операции с массивом
// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика».
// Удалите первый элемент и выведите его в консоль.
// Вставьте «Рэп» и «Регги» в начало массива.

// Массив по ходу выполнения операций:
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл

// const styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// styles.splice(1, 1, "Классика");
// const deletedStyle = styles.shift();
// styles.unshift("Рэп", "Регги");
// console.log(deletedStyle);
// console.log(styles);

const roles = ["user", "tester", "admin"];
// console.log(roles[1]);
// console.log(roles[0]);
// console.log(roles[5]);
// console.log(roles.length);
// console.log(roles[-1]);
// const lastIndex = roles.length - 1;
// console.log(roles[lastIndex]);
// roles.pop();
// console.log(roles);
// const result = roles.push("support");
// console.log(roles);
// roles.shift();
// console.log(roles);
// roles.unshift("manager");
// console.log(roles);
// roles.splice(2, 3);
// console.log(roles);
// roles.splice(2, 1, "user2");
// roles.splice(2, 0, "user2");
// console.log(roles);
// const newArr = roles.slice();
// console.log("newArr", newArr);
// console.log(roles === newArr);
// console.log(roles.includes("tester"));

// 2) Напиши функцию logItems(array), которая получает массив и использует цикл for, который для каждого элемента массива
//будет выводить в консоль сообщение в формате < номер элемента > - <значение элемента >.
//Нумерация элементов должна начинаться с 1.
// Например для первого элемента массива['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено
// 1 - Mango, а для индекса 2 выведет 3 - Ajax.

// const users = ["Mango", "Poly", "Ajax"]; // 3

// for (let i = 0; i < users.length; i++) {
//   console.log("index", i); // 0 // 1 // 2
//   console.log("value", users[i]); // users[0] // users[1] // users[2]
// }

// for (let user of users) {
//   console.log("index", users.indexOf(user));
//   console.log(user); // Mango //Poly  // Ajax
// }

// 3) Напиши код который ищет самое маленькое число в массиве.

// const numbers = [2, 17, 94, 1, 23, 37];

// 1) Определить стартовое минимальное число
// 2) Сравнить это число со всеми последующими елементами масива
// 3) Если стартовое число меньше числа с которым сравниваем - оставляем как есть
// 4) Если стартовое число больше числа с которым срасниваем - пререзаписываем минимальное число

// let smallestNumber = numbers[0]; // 2

// for (let number of numbers) {
//   // 2 // 17 // 94 // 1 // 23 // 37
//   if (smallestNumber > number) {
//     smallestNumber = number; // 1
//   }
// }

// console.log(smallestNumber); // 1

// const findSmallestNumber = function (numbers) {
//   let smallestNumber = numbers[0];

//   for (const number of numbers) {
//     if (smallestNumber > number) {
//       smallestNumber = number;
//     }
//   }

//   return smallestNumber;
// };

// console.log(findSmallestNumber([2, 17, 94, 1, 23, 37])); // 1
// console.log(findSmallestNumber([49, 4, 83, 7, 12])); // 4

// 4) Проверить является ли строка палиндромом

const str = "довод";
const newString = "Hello";

// 1) Сделать со строки масив
// 2) Перевевнуть масив наоборот
// 3) С масива сделать строку
// 4) Сравнить 2 строки

const array = str.split("");
array.reverse();
const reverseString = array.join("");
console.log(reverseString);

const reverseStringWithChaining = newString.split("").reverse().join("");

console.log(newString === reverseStringWithChaining);

// const strSplit = str.split("").reverse().join("");
// console.log(strSplit);
// console.log(str === strSplit);

// 5) Проверить если корзину пуста - показать фразу "Пустая корзина" иначе показать фразу "В корзине {х} товаров"
// где х - это количество товаров в корзине

// const basket = [];
// const basket = ["Хлеб", "Молоко", "Конфеты"];

// 6) Написать програму которая спрашивает у пользователя цены, он вписывает их через prompt
// пока не нажмет отмену. После этого посчитать суму чисел и используя alert вывести результат на экран

// includes
