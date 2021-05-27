// console.log(0.1 + 0.2 === 0.3);
// console.log(0.1 + 0.2);
// let result = 0.1 + 0.2;
// console.log(result)
// console.log(Math.floor(result))
// console.log(Math.ceil(result))
// console.log(Math.round(result))
// console.log(result.toFixed(2))

// let name = 'Bob';
// let slicedName = name.slice(0, 2);
// console.log('name', name);
// console.log("slicedName", slicedName)

// function sum() {
//     let result = null;
//     result = 2 + 3;
//     return result;
// }

// const myNewResult = result;

// console.log("myNewResult", myNewResult)

// console.log(0 || '' || null); // null

// console.log(0 || 'Манго') // Манго

// console.log(0 || 'false' || null)
 
// || - превый true
// && - первый false

// console.log('Mango' && null || false);
// 1) Mango && null // null
// 2) null ||  // false

// if (null) { 
// console.log("Hello")
// } else {
//     console.log("World")
// }




// Логические операторы
// // Что выведет код?

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && "hello");

// console.log(true && 0 && "hello");

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log(null || 2 && 3 || 4);

// if...else и prompt
// // Используя конструкцию if..else, напишите код, который будет спрашивать: «Какое количество месяцев в году». Если пользователь вводит 12 , 
// то показать: «Верно!», в противном случае – отобразить: «Не знаете ? 12!»

// 1) Попросить у юзера число
// 2) Проверить равно ли оно 12
// 3) На основе проверки запустить if или else

// const userNumber = Number(prompt('Enter number'));

// if (userNumber === 12) {
//     console.log('Correct')
// } else {
//     console.log('Error')
// }


// // Написать программу которая получит от пользователя число и определит четное это число или не четное.

// 1) Получить число
// 2) Написать проверку на чет нечет
// 3) Вивести результат


// const day = prompt("Enter day");

// if (day % 2 === 0) {
//     console.log('Четное')
// } else {
//     console.log("Нечет")
// }
    

// Написать программу где мы спрашиваем у пользователя номер месяца  и показываем к какому времени года он принадлежит 
// Если пользователь вводит 2 - показываем слово Зима

// 1) Получить данные от юзера
// 2) Проверка на время года
// 3) Вывести результат

// const monthNumber = Number(prompt('enter month number'));

// if (monthNumber === 1) {
//     console.log('Зима')
// } else if (monthNumber === 2) {
//     console.log('Зима')
// } else if (monthNumber === 12) {
//     console.log('Зима')
// }


// if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
//     console.log("Зима")
// } else if (monthNumber >= 3 && monthNumber <= 5) {
//     console.log('Весна');
// } else if (monthNumber >= 6 && monthNumber <= 8) {
//     console.log('Лето')
// } else if (monthNumber >= 9 && monthNumber <= 11) {
//     console.log('Осень')
// } else {
//     console.log('данные не валидны')
// }

// Написать программу которая проверяет логин и пароль пользователя и выводит приветствие - если все отлично и ошибку если неверный логин

// const login = 'user@gmail.com';
// const password = '12345'

// const userLogin = prompt('Enter login')
// const userPassword = prompt('Enter password')

// if (login === userLogin && password === userPassword) {
//     console.log('Wellcome')
// } else {
//     console.log('Error')
// }

// const result = login === userLogin && password === userPassword ? "Wellcome" : 'Error'

// console.log('result', result)


// написать програму которая спращивает у пользователя период подписки на сервис и показывает цену подписки
// сначала if else потом switch 
// Если ввел День - цена 1.99
// Если Неделя - цена 5.99
// Если месяц - цена 10.99
// Если год - цена 100.99

// const period = prompt('Enter period')

// if (period === 'День') {
//     console.log('1.99')
// } else if (period === 'Неделя') {
//     console.log('5.99')
// } else if (period === 'Месяц') {
//     console.log('10.99')
// } else if (period === 'Год') {
//     console.log('100.99')
// }

// switch (period) {
//     case "День":
//         console.log('1.99')
//         break;
//         case 'Неделя':
//         console.log('5.99')
//         break;
//         case 'Месяц':
//         console.log('10.99')
//         break
//         case 'Год':
//         console.log('100.99')
//         break
//     default:
//         console.log('Error')
//         break;
// }


// Тернарный оператор
// // Перепишите if...else с использованием тернарного оператора.

// const a = 1;
// const b = 2;
// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// авторизация на тернарник

// Написать программу которая получит от пользователя число (количество минут) и выведёт на экран строку в формате часов и минут.



// for 

// Напишите цикл for который выводит в консоль браузера числа по возрастанию от min до max.

const max = 100;
const min = 20;

// for (let i = min; i <= max; i += 1) {
//     console.log(i)
// }

// вывести только числа кратные 10

// for (let i = min; i <= max; i += 10) {
//     console.log(i)
// } // 10 итераций

// for (let i = min; i <= max; i += 1) {
//     if (i % 10 === 0) {
//         console.log(i) // 20  30
//     }
//     continue
// }

// for (let i = min; i <= max; i += 1) {
//     if (i % 10 !== 0) {
//         continue

//     }
//     console.log(i) // 20  30
// }

// for (let i = min; i <= max; i += 10) {
//     if (i === 50) {
//         break
//     }
//     console.log(i)
// } // 10 итераций

// for (let i = min; i < 50; i += 10) {
    
//     console.log(i)
// } // 10 итераций




// for(let i = min; i <= max; i += 1) {
//   console.log(i)
// }

// Напишите цикл for который выводит в консоль браузера числа по убыванию от max до min.

// const max = 100;
// const min = 20;

// for(let i = max; i >= min; i -= 1) {
//   console.log(i)
// }

// При помощи цикла for выведите чётные числа от 2 до 10.

// Решение 1: больше кода и итераций
// for(let i = 2; i <= 10; i += 1) {
//     if(i % 2 === 0) {
//       console.log(i);
//     }
//   }
  
//   // Решение 2: с continue и оператором %
//   for(let i = 2; i <= 10; i += 1) {
//     if(i % 2 !== 0) {
//       continue;
//     }
    
//     console.log(i);
//   }
  
//   // Решение 3: меньше кода и итераций
//   for(let i = 2; i <= 10; i += 2) {
//     console.log(i);
//   }

//while do while

// Напишите цикл, который предлагает ввести число большее 100 через prompt. 
// Если посетитель ввёл другое число - попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена в промпт.

let number = 0;

// while (number !== null && number <= 100) {
//     number = prompt('Enter number');
//     console.log("number", number)
// }

// do {
//     number = prompt('Enter number');
//     console.log("number", number);
// } while (number !== null && number <= 100);

// while (number !== null && number <= 100) {
//     number = prompt('Enter number');
//     console.log('number',number)
// }

// let number;
    
// do {
//     number = prompt('Enter number');
//     console.log('number',number)
// } while (number !== null && number <= 100);

// infinite loop
// Напиши скрипт который просит посетителя ввести число в prompt до тех пор, пока посетитель на нажмет Cancel,
// и каждый раз добавляет введенное значение к общей сумме.

// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод добавляется к значению переменной total.
// Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt.
// После того как пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'.

// let number = 0;
// let total = 0;


// while (number !== null) {
//     number = prompt('Enter number')
//     total += Number(number);
// }

// console.log("total", total);


// Написать програму которая конвертирует минуты в формат HH:MM

// 70 покажет 01:10
// 450 покажет 07:30
// 1441 покажет 24:1