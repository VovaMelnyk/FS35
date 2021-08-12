// Template

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
