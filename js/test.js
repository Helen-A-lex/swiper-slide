17; // function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered > available) {
//     message = "Not enough goods in stock!";
//   } else {
//     message = "Order is processed, our manager will contact you.";
//   }
//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 130));

18; // function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = "Insufficient funds!";
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${
//       customerCredits - totalPrice
//     } credits left`;
//   }
//   // Change code above this line
//   return message;
// }
// console.log(makeTransaction(3000, 5, 23000));

19;
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;

//   if (password === null) {
//     // Change this line
//     message = "Canceled by user!";
//   } else if (password === ADMIN_PASSWORD) {
//     // Change this line
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }

//   return message;
// }
// console.log(checkPassword("polyhax"));

20;
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered === 0) {
//     message = "There are no products in the order!";
//   } else if (ordered > available) {
//     message = "Your order is too large, there are not enough items in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }
//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(70, 0));

21;
// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // Change this line

//   return isInRange;
// }
// console.log(isNumberInRange(10, 30, 5));

22;
// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === "pro" || subType === "vip"; // Change this line

//   return canAccessContent;
// }
// console.log(checkIfCanAccessContent("pro"));

23;
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
// }
// console.log(isNumberNotInRange(10, 30, 5));

24; //  задача про дисконти
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent < 5000) {
//     console.log(`знижка 0 базовий партнер`);
//     discount = BASE_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//     console.log(`знижка 2% бронзовий партнер`);
//     discount = BRONZE_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     console.log(`знижка 5% срібний партнер`);
//     discount = SILVER_DISCOUNT;
//   } else {
//     console.log(`знижка 10% золотий партнер`);
//     discount = GOLD_DISCOUNT;
//   }
//   // Change code above this line
//   return discount;
// }
// console.log(getDiscount(20000));

25; //  тернарний оператор
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   message =
//     ordered > available
//       ? "Not enough goods in stock!"
//       : "The order is accepted, our manager will contact you";
//   if (ordered > available) {
//     message = "Not enough goods in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }

//   // Change code above this line
//   return message;
// }

26; // function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//   message =
//     password === ADMIN_PASSWORD
//       ? "Access is allowed"
//       : "Access denied, wrong password!";
//   // Change code above this line
//   return message;
// }
// console.log(checkPassword("BNBJJNKJKHKJ"));

27; //  СВІТЧ// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//   switch (
//     type // Change this line
//   ) {
//     case `starter`: // Change this line
//       price = 0; // Change this line
//       break;

//     case `professional`: // Change this line
//       price = 20; // Change this line
//       break;

//     case `organization`: // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }
// console.log(getSubscriptionPrice("professional"));

28; // світч з дефолтом// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//   switch (password) {
//     case `null`:
//       message = "Canceled by user!";
//       break;

//     case `ADMIN_PASSWORD`:
//       message = "Welcome!";
//       break;

//     default:
//       message = "Access denied, wrong password!";
//   }
//   if (password === null) {
//     message = "Canceled by user!";
//   } else if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }

//   // Change code above this line
//   return message;
// }

29; //  світч із цінами// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   switch (country) {
//     case `China`:
//       message = `Shipping to ${country} will cost ${100} credits`;
//       break;

//     case `Jamaica`:
//       message = `Shipping to ${country} will cost ${120} credits`;
//       break;

//     case `Australia`:
//       message = `Shipping to ${country} will cost ${170} credits`;
//       break;

//     case `Chile`:
//       message = `Shipping to ${country} will cost ${250} credits`;
//       break;

//     default:
//       message = `Sorry, there is no delivery to your country`;
//   }
//   // Change code above this line
//   return message;
// }
// console.log(getShippingCost("Germany"));

30; //  довжина рядка// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }
// console.log(getNameLength(`illinois`));

31; //  визначення довжини рядка (індекс останнього елемента рядка на 1 менший за його довжину// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// // Change code above this line

32; // вираз створення підрядка довжиною length символів (від початку) з рядка string
// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// }
// console.log(getSubstring("Hello world", 3));

33; //  обрізається рядок макслендс і додається три крапки
// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (message.length <= maxLength) {
//     result = message;
//   } else {
//     result = message.slice(0, maxLength) + "...";
//   }
//   /// Change code above this line
//   return result;
// }

34; //  приведення тексту месенджа до нижнього регістра, а потім перевірка на наявність слів спам і сейл
// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   const normalizedMessage = message.toLowerCase();
//   result =
//     normalizedMessage.includes("spam") || normalizedMessage.includes("sale");

//   // Change code above this line
//   return result;
// }
// console.log(checkForSpam("Get best sale offers now!"));

// 2 модуль
// патерн раннє повернення
1; // function checkAge(age) {
//   if (age >= 18) {
//     // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }
// console.log(checkAge("20"));

2; //  function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }

//   return "Access denied, wrong password!";
//   // Change code above this line
// }

// патерн раннє повернення
3; // function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (available > ordered) {
//     return "Your order is too large, not enough goods in stock!";
//   }

//   return "The order is accepted, our manager will contact you";

//   // Change code above this line
// }
// console.log(checkStorage("70, 0"));

// Масив, що повертає перший і останній елемент масиву

9; // function getExtremeElements(array) {
//   return [array[0], array[array.length - 1]];
// }
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));

// Розбиття повідомлення по деліметру
10; // function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimiter);
//   // Change code above this line
//   return words;
// }
// console.log(splitMessage("Mango", ""));

11;
// function calculateEngravingPrice(message, pricePerWord) {
//   return message.split(" ").length * pricePerWord;
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

12;
// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line
//   string = array.join(delimiter);

//   // Change code above this line
//   return string;
// }
// console.log(
//   makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ")
// );

13; // Привести рядок до масиву, розділити по пробілу, потім повернути до рядка з розділенням тире, а потім до нижнього регістру//
// function slugify(title) {
//   return title.split(" ").join("-").toLowerCase();
// }
// console.log(slugify("Arrays for begginers"));

14; // const fruits = ["apple", "plum", "pear", "orange", "banana"];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);
// console.log(nonExtremeEls);

// Конкат масивів(додавання)
15; // const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];

// const allClients = oldClients.concat(newClients);
// console.log(allClients);

// (0, maxLength) - це  масив довжиною maxLength елементів, а slice робить копію;
16; // function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   const NewArray = firstArray.concat(secondArray);
//   if (NewArray.length > maxLength) {
//     return NewArray.slice(0, maxLength);
//   }
//   return NewArray;
//   // Change code above this line
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// function calculateTotal(number) {
//   // Change code below this line
//   let total = 0;
//   for (let i = 1; i < number; i += 1) {
//     total += i;
//   }
//   return total;

//   // Change code above this line
// }
// console.log(calculateTotal(24));

18; //  сума чисел від 1 до намбер 2=1+1
// function calculateTotal(number) {
//   let total = 0;
//   for (let i = 1; i <= number; i += 1) {
//     total += i;
//   }
//   return total;
// }
// console.log(calculateTotal(28));

// Перебрати масив поелементно
19; // const fruits = ["apple", "plum", "pear", "orange"];

// for (let i = 0; i < fruits.length; i += 1) {
//   // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// Рахувати суму чисел у масиві
20; // function calculateTotalPrice(order) {
//   let total = 0;

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }

//   return total;
// }
// console.log(calculateTotalPrice([1, 0, 9, 4]));

// Прийом рядка, розділеного по пробілу.Визначення
// найдовшого слова в рядку(якщо довжина елемента рядка більша
//     за довжину найдовшого слова, то найдовше слово і є той елемент)
21; // function findLongestWord(string) {
//   const stringArr = string.split(" ");
//   let longestWord = stringArr[0];

//   for (let i = 0; i < stringArr.length; i += 1) {
//     if (stringArr[i].length > longestWord.length) {
//       longestWord = stringArr[i];
//     }
//   }

//   return longestWord;
// }
// console.log(findLongestWord("Google do a roll"));

22; //  Потрібно повернути масив чисел від мін до макс
// function createArrayOfNumbers(min, max) {
//   const numbers = [];- оголошуємо пустий масив
//   // Change code below this
//   for (let i = min; i <= max; i += 1) {      якщо елемент менший макс, то пушим цей елемент в масив
//     numbers.push(i);
//   }

//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(29, 34));

23; // Фільтрування масиву
// function filterArray(numbers, value) {
//   const newArray = [];   створюємо новий масив
//   for (let i = 0; numbers.length > i; i += 1) {
//     if (numbers[i] > value) {   якщо  елемент масиву намбер більший за значення, то в новий масив додається цей елемент
//       newArray.push(numbers[i]);
//     }
//   }
//   return newArray;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// перевірка на знаходження елемента в масиві
24; // function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit);
// }
// console.log(checkFruit("grapes"));

25; //Функція, що повертає новий масив, який складається з однакових елементів двох попередніх масивів
// function getCommonElements(array1, array2) {
//   const array3 = [];

//   for (let i = 0; i < array1.length; i += 1) {          перебираємо перший масив
//     if (array2.includes(array1[i])) {                   якщо масив2 включає елементи масиву 1, то в новий масив
//                                                         пушаться ці елементи з масиву1 (перебрані)

//       array3.push(array1[i]);
//     }
//   }

//   return array3;
// }
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// Цикл фор (коротенький)
26; // function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (const item of order) {
//     total += item;
//   }
//   // for (let i = 0; i < order.length; i += 1) {
//   //   total += order[i];
//   // }

//   return total;
// }
// console.log(calculateTotalPrice([164, 48, 291]));

27; // Рефакторинг задачі 23 про фільтрацію масиву
//  function filterArray(numbers, value) {
//     // Change code below this line
//     const filteredNumbers = [];
//     for (number of numbers) {

//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     }
// }
//   return filteredNumbers;

28; // Операція за модулем % (поділити)
// const a = 3 % 1; а=0  остачі від ділення
// const b = 4 % 3; в=1
// const c = 11 % 4; с=3
// const d = 12 % 7; d=5
// const e = 8 % 3;  e=2

29; //  Функція повертає масив, усіх парних чисел від start до end.
// function getEvenNumbers(start, end) {
//   const array = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       array.push(i);
//     }
//   }

//   return array;
// }
// console.log(getEvenNumbers(4, 15));

30; //Запис першого числа від старт до енд, що ділиться на 5
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);

31; // Використання ретурн, що перериває виконання і циклу і функції , а брейк тільки перериває цикл
// function findNumber(start, end, divisor) {
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }

//   return number;
// }
// console.log(findNumber(8, 10, 2));

32; // function includes(array, value) {
//   // Change code below this line
//   for (let number of array) {
//     if (number === value) {
//       return true;
//     }
//   }

//   return false;
// }
// console.log(
//   includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
// );

// **************************3 модуль Об'єкти

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";
// console.log(apartment);

// Синтаксис коротких властивостей
8; // const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   name,
//   price,
//   image,
//   tags,
// };
// console.log(product);

// Синтаксис обчислювальних властивостей
9; // const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
// };
// console.log(credentials);

10; //  Повернення масиву ключів та масиву властивостей
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// перевірка на власні властивості

11; // const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
// }

// У змінній  propCount зберігається кількість властивостей об'єкта
12;
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   // Change code above this line
//   return propCount;
// }
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

13;
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];

// const keys = Object.keys(apartment);
// for (key of keys) {
//   values.push(apartment[key]);
// }
// console.log(values);
// console.log(keys);

14; //  Рефакторинг задачі 12
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object);
//   for (const key of keys) {
//     propCount += 1;
//   }

//   // Change code above this line
//   return propCount;
// }

15; //  Функція додає значення зарплат усіх робітників
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const values = Object.values(salaries);
//   for (const value of values) {
//     totalSalary += value;
//   }
//   // Change code above this line
//   return totalSalary;
// }
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

16; // Перебір масиву об'єктів. Значення властивостей кожного об'єкта можна отримати,
//     використовуючи синтаксис «через крапку», оскільки в кожному об'єкті
// набір властивостей та їх імена будуть однакові, відрізняються тільки значення color.hex
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// Функція шукає об'єкт продукту з таким ім'ям(властивість name)
// в масиві products і повертає його ціну(властивість price). Якщо немає такого імені повертає нул.
18; // const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product of products) {
//     if (product.name === productName) return product.price;
//   }
//   return null;
// }
// console.log(getProductPrice("Engine"));

19; // Функція повертає масив з усіма властивостями ключів в об'єкті. кщо немає такої властивості у ключа, то
// повернеться пустий масив.
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const productValues = [];
//   for (const product of products) {             перебираємо продукти в продактс
//     for (const key in product) {                а тепер перебираємо ключі кожного продукту (так як це обєкт то фор ін цикл)
//       if (key === propName) {                   якщо ключ властивості дорівнює ключу властивості, то в новий масив пушиться значення ключа
//         productValues.push(product[key]);
//       }
//     }
//   }

//   return productValues;

//   // Change code above this line
// }
// console.log(getAllPropValues("quantity"));

20; //  Функція повертає загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let totalPrice = 0;
// for(product of products){
//   if(product.name === productName){
//     totalPrice = product.price * product.quantity;
//   }
// }
// return totalPrice;

// }

21; // Деструктуризація обєкту highTemperatures
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const { yesterday, today, tomorrow } = highTemperatures;
// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;

// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

22;
// задання необовязкової властивості ісon, що містить значення за замовчуванням(дефолтне)
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;
// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// // const icon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

23; // Зміна ім'я змінної, в яку передаватиметься значення під час деструктуризації
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;
// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

24; // Деструктуризація у циклі фор оф (в місці оголошення змінної color). Перероблене 16 завдання
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

25; //  Деструктуризація обєкту forecast(заміна змінних, звертання до вкладених
// властивостей та дефолтні значення icon: tomorrowIcon)
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

26; //  Деструктуризація в функції
// function calculateMeanTemperature(forecast) {
//   // const todayLow = forecast.today.low;
//   // const todayHigh = forecast.today.high;
//   // const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high;

//   // Change code above this line
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log(
//   calculateMeanTemperature({
//     today: { low: 28, high: 32 },
//     tomorrow: { low: 25, high: 29 },
//   })
// );

27; //  Використання ...spread(розподілення, розпаковка обєктів)
// і методів Math.max() та Math.min()
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// console.log(...scores);

// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// console.log(bestScore);
// console.log(worstScore);

28; //  ...spread склеїли масиви в один
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);    визначаємо найбільший бал
// const worstScore = Math.min(...allScores);   визначаємо найменший бал
// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);
