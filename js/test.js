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

// Значення ключів перезапишеться і буде : theme: "light", public: false, withPassword: true,
//     minNumberOfQuestions: 10, timePerQuestion: 30,
29; // const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };

30; // Все, що зліва від спредуу має низький авторитет, тобто category, priority у object
// за замовчуванням, спред data перезапише їх, коли в неї прийдуть такі самі властивості,
//     і completed  справа зі змінної.
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   const object = { category, priority, ...data, completed };
//   // Change code above this line
//   return object;
// }

31; //  ...args прийом будь-якої кількості аргументів у функцію, і виводимо суму всіх її аргументів
// function add(...args) {
//   // Change code above this line
//   let total = 0;
//   for (const number of args) {
//     total += number;
//   }
//   return total;
// }

32; //                       15         всі інші аргументи
// function addOverNum(firstNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > firstNumber) {
//       total += arg;
//     }
//   }

//   return total;
//   // Change code above this line
// }
// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));Функція рахує суму тих аргументів,
// що більші за перше стояче число, тобто перше число 15, а більше за нього 32+19=51

33; // У новий масив потрапляють ті числа з array, які є в ...args(а це завжди масив)
// function findMatches(array, ...args) {
//   const matches = [];

//   // Change code above this line
//   for (const arg of args) {
//     if (array.includes(arg)) {
//       matches.push(arg);
//     }
//     return matches;
//   }
// }
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));

35; //  this то bookShelf, this.books - звертання до властивості books
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const bookIndex = this.books.indexOf(oldName);   шукаємо індекс старої назви книжки
//       this.books.splice(bookIndex, 1, newName);        заміняємо стару назву на нову,
//                                                        підставляємо індекс старої назви,видалємо 1 елемент, заміняємо назву

//     // Change code above this line
//   },
// }

36;
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//   getPotions() {                   метод повертає значення властивості potions
//     return this.potions;
//   },
//   // Change code above this line
// };
// console.log(atTheOldToad.getPotions()); звертання до методу

37;
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//     this.potions.push(potionName);       додали до масиву potions один елемент potionName в кінець

//     // Change code above this line
//   },
// }

39;
// Видалення potionName з переліку масиву рotions
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const potionIndex = this.potions.indexOf(potionName); спочатку знайшли індекс

//     this.potions.splice(potionIndex, 1);                  потім удалили 1, починаючи з індексу рotionName

//     // Change code above this line
//   },
// };

40;
// Заміна оldName на пewName
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const potionIndex = this.potions.indexOf(oldName); як у завданні 35 однаково

//     this.potions.splice(potionIndex, 1, newName);

//     // Change code above this line
//   },
// };

41; //  Дуже важке завдання!
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {                 перебираємо всі обєкти масиву potions
//       if (potion.name === newPotion.name) {              якщо імя  нового зілля збігається з тими назвами, що вже є, то видається помилка.
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);                        а якщо збігів немає то назва нового зілля пушиться в масив potions
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i++) {    перебираємо всі обєкти у масиві, поки не закінчиться їх кількіть
//       if (potionName === this.potions[i].name) {       якщо назва елементу обєкта збігається з назвою зілля яке треба видалити,то
//         return this.potions.splice(i, 1);              у масиві potions вирізається цей елемент з індексом і
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i++) {          перебираємо елементи в масиві, поки є довжина масиву
//       if (oldName === this.potions[i].name) {                якщо у масиві об'єктів potions є елемент з властивістю name,який дорівнює oldName
//         return (this.potions[i].name = newName);             то цей елемент змінює стару назву на нову
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };

// ************************4 модуль*************************
1;
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();             результат виконання функції

// const pointer = (makePizza);             посилання на функцію
// console.log(result);
// console.log(pointer);

2;
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {              колбек параметром функції стає
//   return callback(pizzaName);                            повернення виклику функції callback і аргументу імя готової піци.
// }
// console.log(makeMessage("Ultracheese", deliverPizza));

3;
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {     передача інлайново другим аргументом колбек функції function eatPizza(pizzaName)
//   console.log(`Eating pizza ${pizzaName}.`);
// });

4;
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {     приймає у параметрах два колбеки
//     if (this.pizzas.includes(pizzaName)) {   якщо pizzas містить назву піцци, що замовляють
//       return onSuccess(pizzaName);            то повертається колбек onSuccess(pizzaName)
//     }

//     return onError(                           якщо назва відсутня, то повертається колбек onError і аргумент у нього рядок
//       `There is no pizza with a name ${pizzaName} in the assortment.`
//     );
//   },
// };

// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

5;
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   //   for (let i = 0; i < orderedItems.length; i += 1) {
//   //     totalPrice += orderedItems[i];
//   //   }

//   // Change code above this line
//   orderedItems.forEach(function (item) {
//     totalPrice += item;                            метод фор іч, рахує суму елементів.
//   });
//   return totalPrice;
// }
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

6;
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }

//   // Change code above this line
//   numbers.forEach(function (number, idx) {
//     if (number > value) {                     якщо число більше за значення вел ю, то у новий масив пушаться такі елементи
//       filteredNumbers.push(numbers[idx]);- звертання до елементу в масиві, можна і просто filteredNumbers.push(number)
//     }
//   });
//   return filteredNumbers;
// }

7;
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   for (let i = 0; i < firstArray.length; i += 1) {
//     if (secondArray.includes(firstArray[i])) {
//       commonElements.push(firstArray[i]);
//     }
//   }

//   return commonElements;
//   // Change code above this line
//   firstArray.forEach(function (item, idx) {               перебираємо елементи першого масиву
//     if (secondArray.includes(firstArray[idx])) {      якщо другий масив включає елемент першого масиву
//       commonElements.push(firstArray[idx]);           то в новий масив пушимо цей елемент
//     }
//   });
// }

8;
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// // function calculateTotalPrice(quantity, pricePerItem) {

// //   return quantity * pricePerItem;
// // }
// переписана звичайна функція на стрілочну

10;
// const calculateTotalPrice = orderedItems =>         стало. Переписала звичайну функцію і метод форіч на стрілочну функцію
//   {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => totalPrice += item);

//   return totalPrice;
// }
// // function calculateTotalPrice(orderedItems) {        було
// //   let totalPrice = 0;

// //   orderedItems.forEach(function (item) {
// //     totalPrice += item;
// //   });

// //   return totalPrice;
// // }

13;
// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {               якщо елемент масиву парний, то в новий
//       newArray.push(numbers[i] + value);      масив пушиться цей елементдоданий до числа
//       continue;                               цикл продовжується
//     }
//     newArray.push(numbers[i]);                і в новий масив пушаться всі інші цифри, навіть не парні
//   }
//   return newArray;
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));

14;
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map((planet) => planet.length); planet.length масив довжин назв планет
// console.log(planetsLengths);

15;
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map((book) => book.title); повернення масиву нового з назвами всіх книжок
// console.log(titles);

16;
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap((book) => book.genres); book.genres буде масив масивів із жанрами книг, бо
//                                                      метод flatMap працює з масивом масивів, розгладжуючи в глибину на 1 вкладеність

20;
!!!(
  // Пошук унікального предмету без повторень (жанру книги) за допомогою indexOf
  // const books = [
  //   {
  //     title: "The Last Kingdom",
  //     author: "Bernard Cornwell",
  //     genres: ["adventure", "history"],
  //   },
  //   {
  //     title: "Beside Still Waters",
  //     author: "Robert Sheckley",
  //     genres: ["fiction", "mysticism"],
  //   },
  //   {
  //     title: "Redder Than Blood",
  //     author: "Tanith Lee",
  //     genres: ["horror", "mysticism", "adventure"],
  //   },
  // ];
  // // Change code below this line
  // const allGenres = books.flatMap((book) => book.genres);  масив жанрів всіх книг
  // console.log(allGenres);
  // const uniqueGenres = allGenres.filter(            масив жанрів фільтруємо і визначаємо індекс унікального значення.

  //   (genre, index, array) => array.indexOf(genre) === index
  // );
  // console.log(uniqueGenres);
  // Використовуючи array.indexOf(genre), виконуємо пошук першого збігу поточного елемента genre і отримуємо його індекс в оригінальному масиві усіх жанрів. В параметрі index зберігається індекс поточного елемента genre, перебираючи масив методом filter.

  // Якщо результат indexOf() і значення index рівні - це унікальний елемент, тому що таке значення зустрічається в масиві вперше, і на поточній ітерації фільтр обробляє саме його.

  21
);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING); масив з рейтингом книг, що більші за 8
// console.log(topRatedBooks);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);  масив книг даного автора
// console.log(booksByAuthor);

22;
// const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color)
// console.log(getUsersWithEyeColor)    масив користувачів, у яких значення кольру очей збігається з колор

23;
// const getUsersWithAge = (users, minAge, maxAge) =>
//   users.filter((user) => user.age >= minAge && user.age <= maxAge);
// повертає масив користувачів, у яких вік знаходиться між мінейдж до макс ейдж

24;
// const getUsersWithFriend = (users, friendName) =>
//   users.filter((user) => user.friends.includes(friendName));
// повертає масив імен користувачів, в якого є той самий друг.

25; //  це краз приклад, там де я думала як в одній функції писати два метода
// const getFriends = (users) =>
//   users
//     .flatMap((user) => user.friends)          спочатку повертає масив друзів всіх користувачів
//     .filter((friend, idx, array) => array.indexOf(friend) === idx);  потім шукає друга з унікальними іменами, щоб не повторювались
//

26;
// const getActiveUsers = (users) =>
//   users.filter((user) => user.isActive === true);
//   повернення масиву користувачів, в яких ключ isActive дорівнює тру

27;
// const getInactiveUsers = (users) =>
//   users.filter((user) => user.isActive !== true);
//  повернення масиву користувачів, в яких ключ isActive дорівнює фолс

28;
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";
// // Change code below this line

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);  утвориться обєкт книги, назва якої відповідає бук тайтл
// console.log(bookWithTitle);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);      утвориться обєкт книги,автор якої відповідає змінній автор

34;
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((acc, number) => {    загальний ігровий час з масиву playtimes
//   return acc + number;
// }, 0);
// console.log(totalPlayTime);
// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

35;
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//   return acc + player.playtime / player.gamesPlayed;
// }, 0);
// Рахуємо середній час, проведений в одній грі для кожного гравця і отримання загальної суми цих значень

36;
// const calculateTotalBalance = (users) =>
//   users.reduce((acc, user) => {
//     return acc + user.balance;       сума балансів всіх користувачів масиву users
//   }, 0);

37;
// const getTotalFriendCount = (users) =>
//   users.reduce((acc, user) => {
//     return acc + user.friends.length;  рахується і повертається сума всіх друзів масиву users, а friends -
//     }, 0);                              це теж масив і щоб додати всю кількість елементів масиву і пишемо .length

38;
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();  створенн копії вихідного масиву, сортування за зростанням (за замовчуванням)
// console.log(ascendingReleaseDates);
// const alphabeticalAuthors = [...authors].sort();         створення копії вихідного масиву, сортування за алфавітом
// console.log(alphabeticalAuthors);

39;
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);  копія вихідного масиву і сорт за зростанням

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);  копія вихіднго масиву і сорт за спаданням

40;
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));  алфавітний порядок

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));  зворотній алфавітний порядок

41;
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((a, b) =>      відсортований масив за іменами авторів в
//   a.author.localeCompare(b.author)                        алфавітному порядку
// );
// console.log(sortedByAuthorName);

// const sortedByReversedAuthorName = [...books].sort((a, b) =>  відсортований масив за іменами авторів у
//   b.author.localeCompare(a.author)                            зворотному алфавітному порядку
// );
// console.log(sortedByReversedAuthorName);

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);    відсорт.масив рейтингів у порядку зростання
// console.log(sortedByAscendingRating);
// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);   масив рейтингів у порядку спадання
// console.log(sortedByDescentingRating);

42;
// const sortByDescendingFriendCount = (users) =>
//   [...users].sort((a, b) => b.friends.length - a.friends.length);
// повернення масиву користувачів,відсортованого за спаданням КІЛЬКОСТІ (length) їх друзів

44;
// const sortByName = (users) =>
//   [...users].sort((a, b) => a.name.localeCompare(b.name));
// повернення масиву користувачів, відсортованого за їхніми іменами в алфавітному порядку.

45;
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books
//   .filter((book) => book.rating > MIN_BOOK_RATING)       фільтруємо масив за рейтингом книг, що більші за змінну(8)
//   .map((book) => book.author)                            створюємо масив імен авторів, чиї книги мають відповідний рейтинг
//   .sort((a, b) => a.localeCompare(b));                   і виставляємо ці імена в алфавітному порядку.
// console.log(names);

46;
// const getNamesSortedByFriendCount = users => [...users].sort((a, b) => a.friends.length - b.friends.length).map(user => user.name);
// спочатку розпиляється новий масив для сортування, потім сортується масив за зростанням кількості друзів(a - b), потім повертає масив імен
// користувачів (відсортований за зростанням кількості друзів).
47;
// const getSortedFriends = (users) =>
//   users
//     .flatMap((user) => user.friends)                               робимо з масиву масивів один масив друзів
//     .filter((friend, idx, array) => array.indexOf(friend) === idx) фільтруємо друзів поелементно і повертаємо масив унікальних імен друзів, що не повторюються
//     .sort((a, b) => a.localeCompare(b));                           розташовуємо друзів у алфавітному порядку
48;
// const getTotalBalanceByGender = (users, gender) =>
//   users
//     .filter((user) => user.gender === gender)       відфільтрували масив user по гендерній властивості
//     .reduce((acc, user) => {                        і повернули загальну суму балансів користувачів, у яких стать збігається з значенням змінної gender
//       return acc + user.balance;
//     }, 0);

// **************************************5 модуль*************************************************

5;
// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };
// // Change code below this line

// const parent = Object.create(ancestor);    ланцюжок прототипів.об'єкт ancestor- прототип для parent, а
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);       parent для child.
// child.name = "Jason";
// child.age = 27;

7;
// class Car {
//   // Change code below this line

//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   // Change code above this line
// }
// const audi = new Car("Audi", "Q3", 36000);   клас Car створює нові обєкти з однойменними властивостями brand, model і price,
//                                              значеннями яких будуть передані аргументи під час виклику з оператором new.

// console.log(audi);
// const bmw = new Car("BMW", "X5", 58900);
// console.log(bmw);

8;
// class Car {                                   клас приймає один параметр - об'єкт з властивостями brand, model і price,
//                                               який деструктуризуємо в конструкторі (патерн обєкт параметрів)
//   // Change code below this line
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }
// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));

9;
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code below this line
//   getPrice() {
//                                                    метод класу, що повертає значення властивості price з
//   return this.price;                                обєкту, що буде його викликати
//   }

//   changePrice(newPrice) {                           метод класу, оновлює значення властивості price на
//     return (this.price = newPrice);                   newPrice в обєкті, що буде його викликати

//   }}

10;
// class Storage {                             у класа властивість items це масив
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {             метод класу, що повертає масив поточних товарів у властивості items об'єкта,
//                           який викликає цей метод.
//     return this.items;
//   }
//   addItem(newItem) {                приймає новий товар newItem і додає його в масив товарів у властивості
//                                     items об'єкта, який викликає цей метод.
//     return this.items.push(newItem);
//   }

//   removeItem(itemToRemove) {                                       видаляє з масиву товарів
//     return this.items.splice(this.items.indexOf(itemToRemove), 1);  знайшли індекс видаляємого товару
//   }
// }
// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

11;
// class StringBuilder {
//   constructor(value) {
//     this.value = value;
//   }
//   getValue() {                                      повертає поточне значення властивості value
//     return this.value;
//   }
//   padEnd(str) {                                    отримує параметр str (рядок) і додає його в кінець значення властивості value об'єкта, який викликає цей метод.
//     this.value += str;
//   }
//   padStart(str) {                                 отримує параметр str (рядок) і додає його на початок значення властивості value об'єкта, який викликає цей метод.
//     this.value = str + this.value;
//   }
//   padBoth(str) {
//     this.value = str + this.value + str;         отримує параметр str (рядок) і додає його на початок і в кінець значення властивості value об'єкта, який викликає цей метод.
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

12;
// class Car {
//   // Change code below this line

//   #brand;                                        приватна властивість оголошється перед конструктором
//   constructor({ brand, model, price }) {
//     this.#brand = brand;                     приватна властивість бренд.# ставити перед  this
//     this.model = model;
//     this.price = price;
//   }

//   // Change code above this line
//   getBrand() {                               повертає значення властивості бренд
//     return this.#brand;
//   }
//   changeBrand(newBrand) {                    міняє значення властивості бренд на іншу
//     this.#brand = newBrand;
//   }
// }

13;
// class StringBuilder {
//   // Change code below this line
// #value                                      як завдання 11, тільки тепер властивість value стає приватною

//   constructor(initialValue) {
//     this.#value = initialValue;
//   }

//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value += str;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

15;
// class Car {
//   // Change code below this line
//   #brand;
//   #model;
//   #price;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {                           гетери і сетери це методи. Оголошуються в парі. Можуть мати однакове
//     return this.#brand;                   імя з властивостями, якшо вони приватні, якщо не приватні, то потрібно називати по іншому.
//   }                                       Пишуться для кожної властивості і гетер і сетер.

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
//   // Change code above this line
// }

16;
// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;                    оголошена публічна статична властивість класу
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//   if( newPrice > Car.MAX_PRICE){                  якщо нова ціна більше за максимальну ціну(звертатись до статичних властивостей треба через назву класу
//     return                                         Car.MAX_PRICE) то сетер не робить нічого
//   }
//       this.#price = newPrice;                      якщо ціна менше чи дорівнює( елс не пишемо), то заміняється  ціна
//     }

//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000
17;

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//   static checkPrice(price) {                          статичний публічний метод, що приймає ціну автомобіля
//     if (price > Car.#MAX_PRICE) {                     якщо ціна автомобіля більша за максимальну, повертається помилка
//       return "Error! Price exceeds the maximum";
//     }
//     return "Success! Price is within acceptable limits";   якщо ні, то успіх
//   }

//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

18;
// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Change code below this line
// class Admin extends User {           створили клас Admin, що наслідує від класу User
//   static AccessLevel = {              У ньому створили статичну публічну властивість АccessLevel, що
//                                       приймає обєкт{BASIC: "basic",
//                                                     SUPERUSER: "superuser"}
// BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
// }
19;
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
//   #accessLevel                              Оголошуємо в класі Admin приватну властивість #accessLevel, значення якої буде передватися під час виклику конструктора.
// constructor({email, accessLevel}){          створюємо конструктор, що приймає обєкт, з двома параметрами:
//   super(email);                              email, accessLevel
//   this.accessLevel = accessLevel;            У конструкторі пишемо функцію  super із передачею значення конструктора батьківського елемента
// }                                            і присвоюємо властивість через this (this.accessLevel = accessLevel)
//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"
20;

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = [];                  властивості у клас додаються у конструкторі. Додали властивість blacklistedEmails, її значення за замовчуванням пустий масив.
//   }

//   // Change code above this line

//   blacklist(email) {                               метод класу, додає значення параметру email в масив blacklistedEmails.
//     return this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email) {                            метод, для перевірки пошти у чорному списку, перевіряємо чи містить масив такий елемент, повертємо тру чи фолс.
//     return this.blacklistedEmails.includes(email) ? true : false;
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

// Самостійне опрацювання
// Напишіть клас Toggle який приймає об'єкт налаштувань {isOpen: boolean} і оголошує одну властивість on - стан вкл/викл (true/false). За замовчуванням значення властивості on повинно бути false.
// class Toggle {
//   constructor({ isOpen = false }) {
//     this.on = isOpen;
//   }
//   toggle() {
//     this.on = !this.on;
//   }
// }

// const firstToggle = new Toggle({ isOpen: true });
// console.group("firstToggle");
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd("firstToggle");

// const secondToggle = new Toggle();
// console.group("secondToggle");
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd("secondToggle");

// ******************************************************
// Тренування
// class Client {
//   #login;
//   #email;
//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }
//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     return (this.#login = newLogin);
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     return (this.#email = newEmail);
//   }
// }
// const newClient = new Client(`mango`, `mango@gmail.com`);
// console.log(newClient.login);
// console.log((newClient.login = `poly`));
// console.log(newClient.email);
// console.log((newClient.email = `poly@gmail.com`));
//
// // ************************************************************
// class Notes {
//   static Priority() {                      статичний метод Priority, що повертає обєкт
//     return {
//       HIGH: "high",
//       LOW: "low",
//     };
//   }

//   constructor() {                                      новий масив
//     this.items = [];
//   }

//   addNote(note) {                                     у новий масив додаємо нотатку(а це обєкт)
//     this.items.push(note);
//   }
//   remoweNote(text) {
//     this.items = this.items.filter((item) => this.items.text !== text);    шукаємо нотатку з відповідним текстом
//   }
//   updatePriority(text, newPriority) {
//     const idx = this.items.findIndex((item) => this.items.text === text); шукаємо індекс нотатки з потрібним текстом, звертаємось до властивості обєкту пріоріті і заміняємо на нову
//     this.items[idx].priority = newPriority;
//   }
// }
// const newNotes = new Notes();
// newNotes.addNote({ text: "Note 1", priority: Notes.Priority().HIGH });
// newNotes.addNote({ text: "Note 2", priority: Notes.Priority().HIGH });
// console.log(newNotes);
// newNotes.removeNote("Note 1");

// !!!!!!!!!!Створення колекції розмітки!!!!!!!!!!
//
// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];
// 1 спосіб не правильний, але зразок як взагалі робити
// const listFirstEl = document.createElement(`li`);
// listFirstEl.classList.add(`item`);
// listFirstEl.textContent = "Potatoes";
// console.log(listFirstEl);

// const listSecondEl = document.createElement(`li`);
// listSecondEl.classList.add(`item`);
// listSecondEl.textContent = "Mushrooms";
// console.log(listSecondEl);

// const listThirdEl = document.createElement(`li`);
// listThirdEl.classList.add(`item`);
// listThirdEl.textContent = "Garlic";
// console.log(listThirdEl);

// const listFourthEl = document.createElement(`li`);
// listFourthEl.classList.add(`item`);
// listFourthEl.textContent = "Tomatos";
// console.log(listFourthEl);

// const listFifthEl = document.createElement(`li`);
// listFifthEl.classList.add(`item`);
// listFifthEl.textContent = "Herbs";
// console.log(listFifthEl);

// const listSixthEl = document.createElement(`li`);
// listSixthEl.classList.add(`item`);
// listSixthEl.textContent = "Condiments";
// console.log(listSixthEl);

// const listIngredients = document.querySelector(`#ingredients`);
// listIngredients.append(
//   listFirstEl,
//   listSecondEl,
//   listThirdEl,
//   listFourthEl,
//   listFifthEl,
//   listSixthEl
// );

// 2 спосіб з використанням шаблонного рядку на тому самому масиві правильний
// const listEl = document.querySelector("#ingredients");
// const listItem = ingredients
//   .map((item) => `<li class="item">${item}</li>`)
//   .join("");
// console.log(listItem);

// listEl.insertAdjacentHTML("beforeend", listItem);
// console.log(listEl);
// 3 спосіб дуже правильний, з використанням меп і апенд
// const listEl = document.querySelector("#ingredients");
// const listItem = ingredients.map((ingredient) => {
//   const listItemEl = document.createElement("li");
//   listItemEl.textContent = ingredient;
//   return listItemEl;
// });

// listEl.append(...listItem);
// console.log(listEl);
