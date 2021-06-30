// const fn = function () {
//   console.log("result");
// };
// const fnA = fn(); // undefined
// console.log(fnA);

// // Почему функция fn сама исполняется(в консоли написана лишь строка, где return console.log('result');
// // и нет места вызова fn), и почему console.log(fnA) - undefind

// 1) Написать ф - ю конструктор которая создает обект person с такими ключами
// const person = {
//   firstName,
//   lastName,
//   age,
//   gender,
//   interest,
//   bio() {
//     // виводить строку Привет {имя} мне {возраст} лет. Мне нравится {интерес}
//   },
//   greeting() {
//     // Привет, я {имя}
//   },
// };

// function Person(firstName, lastName, age, gender, interests) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.gender = gender;
//   this.interests = interests;
//   this.greeting = function () {
//     console.log(`Привет я ${this.firstName} ${this.lastName}`);
//   };
//   this.bio = function () {
//     console.log(
//       `Привет ${this.firstName} мне ${this.age} лет. Мне нравится ${this.interests}`
//     );
//   };
// }

// function Person(config) {}

// function Person({ firstName, lastName, age, gender, interests }) {
//   //   this = {}
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.gender = gender;
//   this.interests = interests;
//   this.greeting = function () {
//     console.log(`Привет я ${this.firstName} ${this.lastName}`);
//   };
//   this.bio = function () {
//     console.log(
//       `Привет ${this.firstName} мне ${this.age} лет. Мне нравится ${this.interests}`
//     );
//   };
//   // return this
// }

// function Person(obj) {
//   //   this = {}
//   const { firstName, lastName, age, gender, interests } = obj;
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.gender = gender;
//   this.interests = interests;
//   // return this
// }

// // console.log(`Person`, Person.prototype);

// Person.prototype.greeting = function () {
//   console.log(`Привет я ${this.firstName} ${this.lastName}`);
// };

// Person.prototype.bio = function () {
//   console.log(
//     `Привет ${this.firstName} мне ${this.age} лет. Мне нравится ${this.interests}`
//   );
// };

// const user = new Person({
//   firstName: "Bob",
//   lastName: "Dou",
//   age: 21,
//   gender: "male",
//   interests: "football",
// });
// console.log(Person.prototype);

// const user2 = new Person({
//   firstName: "Jack",
//   lastName: "Dou",
//   age: 35,
//   gender: "male",
//   interests: "basketball",
// });

// let arr = [];
// console.log(`arr`, arr);

// // const user = new Person("Bob", "Dou", 21, "male", "football");

// // const result = Person({
// //   firstName: "Bob",
// //   lastName: "Dou",
// //   age: 21,
// //   gender: "male",
// //   interests: "football",
// // });

// // console.log(`result`, result);

// // const user2 = {}
// // user2.firstName = 'Jack'
// // user2.lastName = 'Dou'
// // user2.age = 34

// // console.log(`user`, user);
// // user.bio();
// // user.greeting();

// // console.log(`user2`, user2);
// // user2.bio();

// function Teacher(obj) {
//   const { subject } = obj;
//   // this = {}
//   Person.call(this, obj);
//   this.subject = subject;
// }

// Teacher.prototype = Object.create(Person.prototype);
// Teacher.prototype.constructor = Teacher;

// Teacher.prototype.greeting = function () {
//   console.log("I am teacher method");
// };

// const teacher1 = new Teacher({
//   firstName: "Bob",
//   lastName: "Dou",
//   age: 45,
//   gender: "male",
//   interests: "football",
//   subject: "Math",
// });

// console.log(`teacher1`, teacher1);
// teacher1.greeting();

// 2) Вынести методы из обекта person в __proto__

// 3) Создать конструктор Teacher который наследует свойства Person и добавляет в обект поле subject
// и метод greeting

// 4) Создать конструктор Student который наследует свойства Person и изменяет метод greeting

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.hi = function () {
//   console.log("Hello");
// };

// const user = new Person("Bob", 25);

// console.log(`user`, user);
// user.hi();

// function Student(name, age) {
//   Person.call(this, name, age);
// }
// // Student.prototype = Object.create(Person.prototype);
// // Student.prototype.constructor = Student;

// const st = new Student("Jane", 23);

// console.log(`st`, st);
// st.hi();

// 5) Напиши конструктор Notes который управляет коллекцией заметок в свойстве items.
// Заметка это объект со свойствами text и priority.
// Добавь конструктору статическое свойство Priority, в котором будет храниться объект с приоритетами.
// {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high'
//   }

// const myNotes = new Notes([]);

// myNotes.addNote({  text: 'Моя первая заметка', priority: Notes.Priority.LOW })
// console.log(myNotes.items);

// myNotes.addNote({ text: 'Моя вторая заметка', priority: Notes.Priority.NORMAL })
// console.log(myNotes.items);

// myNotes.removeNote('Моя первая заметка');
// console.log(myNotes.items);

// myNotes.updateNote('Моя вторая заметка', Notes.Priority.HIGH);
// console.log(myNotes.items);
