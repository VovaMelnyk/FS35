// function Person({ firstName, lastName, age, gender, interest }) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.gender = gender;
//   this.interest = interest;
// }

// Person.prototype.greeting = function () {
//   console.log(`Привет я ${this.firstName} ${this.lastName}`);
// };

// Person.prototype.bio = function () {
//   console.log(
//     `Привет ${this.firstName} мне ${this.age} лет. Мне нравиться ${this.interest}`
//   );
// };

// const user = new Person({
//   firstName: "Роман",
//   lastName: "Savosko",
//   age: 37,
//   gender: "men",
//   interest: "Fish",
// });

// console.log(user);

// function Teacher({ firstName, lastName, age, gender, interest, subject }) {
//   Person.apply(this, [{ firstName, lastName, age, gender, interest }]);
//   this.subject = subject;
// }

// Teacher.prototype = Object.create(Person.prototype);
// Teacher.prototype.constructor = Teacher;

// Teacher.prototype.greeting = function () {
//   console.log("I am teacher method");
// };

// const teacher1 = new Teacher({
//   firstName: "Bob",
//   lastName: "Sav",
//   age: 32,
//   gender: "men",
//   interest: "Rok",
//   subject: "Math",
// });

// console.log(teacher1);

// function Student({ firstName, lastName, age, gender, interest }) {
//   Person.call(this, firstName, lastName, age, gender, interest);
// }
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// Student.prototype.greeting = function () {
//   console.log("Hello, I am student");
// };

// const student1 = new Student({
//   firstName: "Jon",
//   lastName: "Don",
//   age: 15,
//   gender: "men",
//   interest: "footbal",
// });

// console.log(student1);

// constructor({ email, posts }) {
//     super(email);
//     this.posts = posts;

// class Blog {
//   constructor(email) {
//     this.email = email;
//   }
// }

// class Post extends Blog {
//   constructor(email, post) {
//     super(email);
//     this.post = post;
//   }
// }

// const blog = new Blog("google.@gmail.com");
// console.log(`blog`, blog);

// const post = new Post("test@gmail.com", "Best post ever");
// console.log(`post`, post);

// post.getInfo();

// class Phone {
//     color;
//     price;
//     #brand;

//     constructor({ brand, color, price }) {
//       this.#brand = brand;
//       this.color = color;
//       this.price = price;
//     }

//     getBrand() {
//       return this.#brand;
//     }

//     changeBrand(newBrand) {
//       this.#brand = newBrand;
//     }

//     getColor() {
//       return this.color;
//     }

//     updateColor(newColor) {
//       this.color = newColor;
//     }

//     getPrice() {
//       return this.price;
//     }

//     setPrice(newPrice) {
//       this.price = newPrice;
//     }
//   }

// 1) Напиши класс User для создания пользователя со следующим свойствами:
// username - имя, строка
// age - возраст, число
// numberOfPosts - кол-во постов, число
// Класс ожидает 1 параметр - объект настроек с одноимёнными свойствами.

// Добавь метод getInfo(), который, возвращает строку:
// User ${ имя } is ${ возраст } years old and has ${ кол - во постов } posts.

// const mango = new User({
//     name: 'Mango',
//     age: 24,
//     numberOfPosts: 20,
//   });

//   console.log(mango.getInfo()); // User Mango is 24 years old and has 20 posts

//   const poly = new User({
//     name: 'Poly',
//     age: 19,
//     numberOfPosts: 17,
//   });

//   console.log(poly.getInfo()); // User Poly is 19 years old and has 17 posts

// 3) Напиши класс Storage который создаёт объекты для управления складом товаров.
// При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив товаров.
// addItem(item) - получает новый товар и добавляет его к текущим.
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих.

// const storage = new Storage([
//     'Яблоки',
//     'Бананы',
//     'Кокосы',
//     'Киви',
//   ]);

//   const items = storage.getItems();
//   console.table(items);

//   storage.addItem('Манго');

//   storage.removeItem('Киви');

// 4) Напиши класс Client который создаёт объект со свойствами login и email.
// Объяви приватные свойства #login и #email, доступ к которым сделай через геттер и сеттер login и email.
// const mango = new Client({
//     login: 'Mango',
//     email: 'mango@dog.woof',
//   });

//   console.log(mango.login); // Mango
//   mango.login = 'Mangodoge';
//   console.log(mango.login); // Mangodoge

//   const poly = new Client({
//     login: 'Poly',
//     email: 'poly@mail.com',
//   });

//   console.log(poly.login); // Poly
//   poly.login = 'Polycutie';
//   console.log(poly.login); // Polycutie

// 5)  Напиши клас Notes который управляет коллекцией заметок в свойстве items.
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

// class Guest {
//   // Собственные свойства класса размещаем в конструкторе
//   #name;
//   constructor(name, roomNumber) {
//     this.#name = name;
//     this.roomNumber = roomNumber;
//   }

//   // Используем геттеры и сеттеры для описания интерфейса доступа к свойствам
//   get name() {
//     return this.#name;
//   }

//   set name(value) {
//     this.#name = value;
//   }
// }

// const mango = new Guest("Mango", 26);
// console.log(`mango`, mango);

// // обращение к get и set не требует вызова - т.е. без ()
// console.log(mango.name); // Mango

// mango.name = "Mango the Fluffy";
// console.log(mango.name); // Mango the Fluffy
