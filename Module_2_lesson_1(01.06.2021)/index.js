// 1) В чем разница ?
// const clients = ['Mango', 'Poly', 'Ajax'];

// // Значение элемента можно заменить
// clients[0] = 'Kiwi';
// console.log(clients[0]); // Kiwi

// // Или добавить
// clients[3] = 'Alex';
// console.log(clients[3]); // Alex

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
// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi", newClients];
// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"].concat(newClients);
// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi", ...newClients];
// console.log(oldClients);

// 4) const для масивов
// const clients = ["Mango", "Poly", "Ajax"];
// clients = 5;
// console.log(clients);

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

//  const roles = ["user", "tester", "admin"];
// console.log(roles[1]);
// console.log(roles[0]);
// console.log(roles[5]);
// console.log(roles.length);
// console.log(roles[-1]);
// console.log(roles[roles.length - 1]);
// roles.pop();
// console.log(roles);
// roles.push("support");
// console.log(roles);
// roles.shift();
// console.log(roles);
// roles.unshift("manager");
// console.log(roles);
// roles.splice(2, 3);
// roles.splice(2, 1, "user2");
// roles.splice(2, 0, "user2");
// console.log(roles);
// const newArr = roles.slice();
// console.log(roles.includes('tester'));

// 2) Напиши функцию logItems(array), которая получает массив и использует цикл for, который для каждого элемента массива
//будет выводить в консоль сообщение в формате < номер элемента > - <значение элемента >.
//Нумерация элементов должна начинаться с 1.
// Например для первого элемента массива['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено
// 1 - Mango, а для индекса 2 выведет 3 - Ajax.

// 3) Напиши код который ищет самое маленькое число в массиве.

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

// const str = "довод";

// const strSplit = str.split("").reverse().join("");
// console.log(strSplit);
// console.log(str === strSplit);

// 5) Проверить если корзину пуста - показать фразу "Пустая корзина" иначе показать фразу "В корзине {х} товаров"
// где х - это количество товаров в корзине

// const basket = [];
// const basket = ["Хлеб", "Молоко", "Конфеты"];

// 6) Написать програму которая спрашивает у пользователя цены, он вписывает их через prompt
// пока не нажмет отмену. После этого посчитать суму чисел и используя alert вывести результат на экран