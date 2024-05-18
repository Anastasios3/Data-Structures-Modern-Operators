'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Line 18 changed: Destructured the object parameter to individual parameters
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} & ${ing3}`);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
// The optional chaining operator (?.) (it is a short-circuiting operator) (it can use any data type) (it can return any data type) (it can short-circuit the evaluation of the expression) (it can use the ternary operator)
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// With optional chaining
console.log(restaurant.openingHours?.mon?.open); // undefined
console.log(restaurant.openingHours?.fri?.open); // 11

// Example
const weekdays1 = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of weekdays1) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open || 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); // ['Focaccia', 'Pizza']
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist'); // Method does not exist

// Arrays
const users = [{ name: 'Anastasios', email: 'anastasios.t@gmail.com' }];
console.log(users[0]?.name ?? 'User array empty'); // Anastasios

if (users.length > 0) console.log(users[0].name);
else console.log('User array empty');

if (restaurant.openingHours && restaurant.openingHours.fri)
  console.log(restaurant.openingHours.fri.open);

// With optional chaining
// console.log(restaurant.openingHours.mon); // undefined

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]; // ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']

// for (const item of menu) console.log(item); // Focaccia Bruschetta Garlic Bread Caprese Salad Pizza Pasta Risotto

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// console.log([menu.entries()]);

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Anastasios',
// };
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10; // rest1.numGuests = rest1.numGuests || 10; (it is a short-circuiting operator) (it can use any data type) (it can return any data type) (it can short-circuit the evaluation of the expression) (it can use the ternary operator)
// rest2.numGuests ||= 10; // rest2.numGuests = rest2.numGuests || 10;

// console.log(rest1);
// console.log(rest2);

// rest1.numGuests ??= 10; // rest1.numGuests = rest1.numGuests ?? 10; (it is a short-circuiting operator) (it can use any data type) (it can return any data type) (it can short-circuit the evaluation of the expression) (it can use the ternary operator)
// rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>'; // rest2.owner = rest2.owner || "<ANONYMOUS>"; (it is a short-circuiting operator) (it can use any data type) (it can return any data type) (it can short-circuit the evaluation of the expression) (it can use the ternary operator)

// console.log(rest1);
// console.log(rest2);
// // The nullish coalescing operator (??) (it is a short-circuiting operator) (it can use any data type) (it can return any data type) (it can short-circuit the evaluation of the expression) (it can use the ternary operator)
// rest1.owner ||= '<ANONYMOUS>'; // rest1.owner = rest1.owner || "<ANONYMOUS>"; (it is a short-circuiting operator) (it can use any data type) (it can return any data type) (it can short-circuit the evaluation of the expression) (it can use the ternary operator)
// rest2.owner ||= '<ANONYMOUS>';
// // rest1.owner = rest1.owner ?? "<ANONYMOUS>"; (it is a short-circuiting operator) (it can use any data type) (it can return any data type) (it can short-circuit the evaluation of the expression) (it can use the ternary operator)

// console.log(rest1);
// console.log(rest2);
// // Coalescing operator (??) (it is a short-circuiting operator) (it can use any data type) (it can return any data type) (it can short-circuit the evaluation of the expression) (it can use the ternary operator)
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// // Use any datatype, return any datatype, short-circuiting (&& and ||) and ternary operator (?:) are short-circuiting operators (they can use any data type, they can return any data type, they can short-circuit the evaluation of the expression, they can use the ternary operator) and they can use the ternary operator (they can use the ternary operator)
// console.log(3 || 'Anastasios'); // 3 (3 is a truthy value) (|| is a short-circuiting operator) (it short-circuited the evaluation of the expression) (it returned the first truthy value)
// console.log('' || 'Anastasios'); // Anastasios (Anastasios is a truthy value) (|| is a short-circuiting operator) (it short-circuited the evaluation of the expression) (it returned the first truthy value)
// console.log(true || 0); // true (true is a truthy value) (|| is a short-circuiting operator) (it short-circuited the evaluation of the expression) (it returned the first truthy value)
// console.log(undefined || null); // null (null is a falsy value) (|| is a short-circuiting operator) (it short-circuited the evaluation of the expression) (it returned the first truthy value)

// console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello (Hello is a truthy value) (|| is a short-circuiting operator) (it short-circuited the evaluation of the expression) (it returned the first truthy value)

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; // 10 (restaurant.numGuests is a falsy value) (the ternary operator is used) (the ternary operator is a short-circuiting operator) (it short-circuited the evaluation of the expression) (it returned the second value)
// console.log(guests1); // 10

// const guests2 = restaurant.numGuests || 10; // 10 (restaurant.numGuests is a falsy value) (|| is a short-circuiting operator) (it short-circuited the evaluation of the expression) (it returned the second value)
// console.log(guests2); // 10 (|| is a short-circuiting operator) (it short-circuited the evaluation of the expression) (it returned the second value)

// console.log('----AND----'); // ----AND---- (it is a separator) (it is a string)
// console.log('Hello' && 23 && null && 'Anastasios'); // null (null is a falsy value) (&& is a short-circuiting operator) (it short-circuited the evaluation of the expression) (it returned the first falsy value)

// // Practical example

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherFood);

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2) Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i]; // sum = sum + numbers[i] is the same as sum += numbers[i] (+= is an assignment operator) and it is the same as sum = sum + 1 (increment operator) and it is the same as sum++
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// // // Real world example
// // const ingredients = [
// //   prompt("Let's make pasta! Ingredient 1?"),
// //   prompt('Ingredient 2?'),
// //   prompt('Ingredient 3?'),
// // ];
// // console.log(ingredients);

// // restaurant.orderPasta(...ingredients);

// //Objects

// const newRestaurant = { ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);

// const arr = [7, 8, 9];
// const badNeewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNeewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // Join 2 arrays
// const menuOne = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menuOne);

// // Iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Anastasios';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);

// // Line 29 changed: The parameter passed is now an object
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
//   mainIndex: 0,
//   time: '20:00',
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);
// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 }; // we can't use const here because we are changing the values of a and b
// ({ a, b } = obj); // we need to wrap the whole thing in parentheses because otherwise, it would be a block of code and not an object literal
// console.log(a, b); // 23 7

// // // Nested objects
// // const {
// //   fri: { open: o, close: c },
// // } = openingHours; // we are destructuring the openingHours object and then destructuring the fri object
// // console.log(fri); // {open: 11, close: 23}

// // // Destructuring Objects
// // const arr = [2, 3, 4];
// // const a = arr[0];
// // const b = arr[3];
// // const c = arr[2];

// // const [x, y, z] = arr;
// // console.log(x, y, z);
// // console.log(arr);

// // let [main, secondary] = restaurant.categories;
// // console.log(main, secondary);

// // // const temp = main;
// // // main = secondary;
// // // secondary = temp;
// // // console.log(main, secondary);

// // [main, secondary] = [secondary, main];
// // console.log(main, secondary);

// // const [starter, mainCourse] = restaurant.order(2, 0);
// // console.log(starter, mainCourse);

// // //Nested destructuring
// // const nested = [2, 4, [5, 6]];
// // // const [i, , j] = nested;
// // // console.log(i, j);
// // const [i, , [j, k]] = nested;
// // console.log(i, j, k);

// // // Default values
// // const [p, q, r] = [8, 9];
// // console.log(p, q, r);

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Witsel',
//       'Brandt',
//       'Sancho',
//       'Reus',
//       'Hazard',
//       'Haaland',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // // 1.
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // // 2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // // 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// // // 5.
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // // 6.
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
// printGoals(...game.scored);

// // // 7.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');
