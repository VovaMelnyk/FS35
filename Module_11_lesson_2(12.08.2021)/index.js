// Template

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     /*
//      * Если какое-то условие выполняется, то есть все хорошо,
//      * вызываем resolve и получает данные. Условие зависит от задачи.
//      */
//     resolve("Data passed into resolve function :)");

//     // Если что-то не так, вызываем reject и передаем ошибку
//     // reject("Error passed into reject function :(")
//   }, 2000);
// });

// // Выполнится мгновенно
// console.log("BEFORE promise.then");

// const onResolve = (data) => {
//   console.log("INSIDE promise.then - onResolve");
//   console.log(data); // "Data passed into resolve function :)"
// };

// const onReject = (error) => {
//   console.log("INSIDE promise.then - onReject");
//   console.log(error); // "Error passed into reject function :("
// };

// promise.then(
//   // будет вызвана через 2 секунды, если обещание выполнится успешно
//   onResolve,
//   // будет вызвана через 2 секунды, если обещание выполнится с ошибкой
//   onReject
// );

// // Выполнится мгновенно
// console.log("AFTER promise.then");

// function sum(a, b) {
//   return a + b;
// }

// setTimeout(sum, 2000, [5, 6]);

// const users = [
//   {
//     name: "John",
//     active: true,
//   },
//   {
//     name: "Bob",
//     active: true,
//   },
// ];

// const toggleUserState = (allUsers, userName) => {
//   return new Promise((resolve, reject) => {
//     const result = allUsers.map((user) => {
//       return user.name === userName ? { ...user, active: !user.active } : user;
//     });
//     resolve(result);
//   });
// };

// let newArr = []
// for (let user of users) {
//   if (user.name === usersName) {
//     let newUser = { ...user, active: !user.active }
//     newArr.push(newUser);
//   } else {
//     newArr.push(user)
//   }
// }

// toggleUserState(users, "Bob").then((result) => console.log(result));
function createAsyncArray(count) {
  return new Promise((resolve, reject) => {
    let arr = [];
    for (let i = 0; i < count; i++) {
      arr.push(i);
    }

    if (arr.length > 10) {
      resolve(arr.length);
    } else {
      reject("Error from promise");
    }
  });
}

// Promise.all([
//   createAsyncArray(1000),
//   createAsyncArray(5),
//   createAsyncArray(10000),
// ]).then((result) => console.log(result));
// Promise.race([createAsyncArray(1000), createAsyncArray(5)])
//   .then((result) => console.log(result))
//   .catch((err) => console.log("error", err));
Promise.allSettled([
  createAsyncArray(1000),
  createAsyncArray(5),
  createAsyncArray(10000),
]).then((result) => console.log(result));

// const promise = new Promise((resolve, reject) => {
//   let arr = [];
//   for (let i = 0; i < 20000000; i++) {
//     arr.push(i);
//   }

//   if (arr.length > 10) {
//     resolve({
//       data: arr,
//       size: arr.length,
//     });
//   } else {
//     reject("Error from promise");
//   }
// });
// console.log("1")
// promise
//   .then((promiseResult) => {
//     console.log("2", promiseResult.size);
//     // console.log("data", promiseResult.data);
//   });

// console.log("3")
// Promise.resolve(console.log(1));
// setTimeout(() => console.log(2), 0);

// .catch()
// .finally();

// const createArray = new Promise((resolve, reject) => {
//   const arr = [];

//   for (let i = 0; i < 5; i++) {
//     arr.push(i);
//   }

//   if (arr.length > 10) {
//     resolve(arr);
//   } else {
//     reject(2);
//   }
// });

// createArray
//   .then((result) => console.log(result))
//   .catch((number) => console.log(number));

// let loaderStatus = false;

// function createArrayWithPromise(arraySize) {
//   loaderStatus = true;
//   return new Promise((resolve, reject) => {
//     const arr = [];

//     for (let i = 0; i < arraySize; i++) {
//       arr.push(i);
//     }

//     if (arr.length > 10) {
//       resolve(arr);
//     } else {
//       reject("error");
//     }
//   });
// }

// let finalResult = null;

// function countTotalArray(array) {
//   return array.reduce((acc, number) => acc + number);
// }

// const mapArray = (arr) => arr.map((number) => number * 2);

// createArrayWithPromise(10000000)
//   .then((result) => result)
//   .then(mapArray)
//   //   .then((doubleArr) => doubleArr.reduce((acc, number) => acc + number))
//   .then(countTotalArray)
//   .then((reduceResult) => (finalResult = reduceResult))
//   .catch((err) => console.log(err));
// //   .finally(() => console.log("hello"));

// console.log(finalResult);

// createArrayWithPromise(5)
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
// //   .finally(() => console.log("hello"));

// Promise.all([
//   createArrayWithPromise(5),
//   createArrayWithPromise(20),
//   createArrayWithPromise(35),
// ])
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
// [promise1Result, promise2Result, promise3Result]
// Promise.race([
//   createArrayWithPromise(20),
//   createArrayWithPromise(35),
//   createArrayWithPromise(15),
// ])
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
// Promise.allSettled([
//   createArrayWithPromise(5),
//   createArrayWithPromise(20),
//   createArrayWithPromise(35),
// ])
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// promise
//   .then()

//   [(1, 2, 3)].map((number, ind, arr) => number * 2);
// [1, 2, 3].map((number) => number - 2);
// [1, 2, 3].map((number) => number + 2);

// const time = new Promise((ok, error) => {
//   setTimeout(() => ok("Homer"), 3000);
//   setTimeout(() => error("Marge"), 5000);
// });

// time.then((data) => console.log(data)).catch((err) => console.log(err));
//

// function userAsk(callback) {
//     const answer = prompt('How are you')

//     callback(answer)
// }

// const log = text => console.log(text);

// userAsk(log)

// function userAsk() {
//     const answer = prompt('How are you')

//    return Promise.resolve(answer)
// }

// userAsk().then(data => console.log(data))
