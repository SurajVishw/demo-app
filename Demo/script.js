// Function Declarartion & Expression

function describeCountry(country, population, capitalcity) {
  return `${country} has a ${population} million people and its capital city is ${capitalcity}`;
}

console.log(describeCountry("India", 6, "Delhi"));

// Function Declarartion vs Expression

function percentageOfWorld1(population) {
  let percentage = (population / 7900) * 100;
  return percentage;
}

console.log(percentageOfWorld1(1441));
console.log(percentageOfWorld1(1837));
console.log(percentageOfWorld1(5000));

let percentageOfWorld = function (population1) {
  let percentage1 = (population1 / 7900) * 100;
  return percentage1;
};

console.log(percentageOfWorld1(1441));
console.log(percentageOfWorld1(1837));
console.log(percentageOfWorld1(5000));

let percentageOfWorld2 = (population) => {
  let percentage2 = (population / 7900) * 100;
  return percentage2;
};

console.log(percentageOfWorld2(1441));

// function calling another function

let percentageOfWorlds = (populations) => {
  return (populations / 7900) * 100;
};

let describePopulation = (country, populations) => {
  const percentageofPopulations = percentageOfWorlds(populations);

  const populationString = `${country} has ${populations} million people, which is about ${percentageofPopulations}% of world`;
  return populationString;
};

console.log(describePopulation("India", 1441));

// Coding Challange 1

let calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

let dolphinsAvg = calcAverage(44, 23, 71);
let koalasAvg = calcAverage(65, 54, 49);

console.log(dolphinsAvg, koalasAvg);

let checkWinner = (dolphinsAvg, koalasAvg) => {
  if (dolphinsAvg >= 2 * koalasAvg) {
    console.log(`Dolphins Win(${dolphinsAvg} vs. ${koalasAvg})`);
  } else if (koalasAvg >= 2 * dolphinsAvg) {
    console.log(`Koalas Win(${koalasAvg} vs. ${dolphinsAvg} )`);
  } else if (dolphinsAvg == koalasAvg) {
    console.log(`Draw(${dolphinsAvg} vs. ${koalasAvg})`);
  } else {
    console.log(`no one wins`);
  }
};

dolphinsAvg = calcAverage(85, 54, 41);
koalasAvg = calcAverage(23, 34, 27);

console.log(dolphinsAvg, koalasAvg);

checkWinner(dolphinsAvg, koalasAvg);

// Arrays

const friends = ["Michelle", "Jonas", "Tom"];
console.log(friends);

console.log(friends[0]);
console.log(friends[friends.length - 1]);
console.log(friends.length);

friends[3] = "Jarry";
console.log(friends);

const newPopulation = ["India", "Japan", "Korea", "Russia"];
console.log(newPopulation);

// array methods

// add elements

const birds = ["Eagle", "Peacock", "Pigeon", "Hen"];
console.log(birds);

birds.push("Hawk");
console.log(birds);

birds.unshift("Sparrow");
console.log(birds);

// remove elements

const popped = birds.pop();
console.log(birds);
console.log(popped);

birds.shift();
console.log(birds);

// indexOf Elements

console.log(birds.indexOf("Pigeon"));
console.log(birds);

// include

console.log(birds.includes("Peacock"));

if (birds.includes("jay")) {
  console.log("You have a bird name Peacock");
}

// Coding Challange 1

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, total);

const suraj = {
  firstName: "Suraj",
  lastName: "Vishwakarma",
  job: "Developer",
  age: 2023 - 1999,
  friend: ["Tom", "Billy", "Frank"],
};

// console.log(suraj);

// const country = {
//     country: 'India',
//     capital: 'Delhi',
//     language: ['Hindi', 'English', 'Marathi'],
//     populatio: 8000000,
//     neighbours: ['Nepal', 'Bangaladesh']
// };

// console.log(`${country.country} has ${country.populatio} million ${country.language} speaking people, ${country.neighbours.length} neighbouring countries and a capital called ${country.capital}.`);

// country['populatio'] = 30000;
// console.log(country);

// country.populatio = 200000;
// console.log(country);

// // Object dot and bracket notation

// console.log(suraj.firstName);
// console.log(suraj['firstName']);

// const nameKey = 'Name';

// console.log(suraj['first' + nameKey]);
// console.log(suraj['last' + nameKey]);

// // const interstedIn = prompt(`What do you want to know about Suraj? firstname,lastname, job, birthyear or friend`);

// // console.log(interstedIn);

// if (suraj[interstedIn]) {
//     console.log(suraj[interstedIn]);
// } else {
//     console.log('Wrong input value');
// }

// object method

("use strict");
const country = {
  country: "India",
  capital: "Delhi",
  language: ["Hindi", "English", "Marathi"],
  populatio: 8000000,
  neighbours: ["Nepal", "Bangaladesh"],
  calcAge: function (birthyears) {
    return 2023 - birthyears;
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
    return this.isIsland;
  },
  describeCountry: function () {
    return `${this.country} has ${this.populatio} million ${this.language} speaking people, ${this.language.length} neighbouring countries and a capital called ${this.capital}.`;
  },
};
country.checkIsland();
console.log(country.checkIsland());

console.log(country.describeCountry());

console.log(country.calcAge(1999));
console.log(country["calcAge"](1999));

// coding challange

let mark = {
  name: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.markBMI = this.mass / this.height ** 2;
    return this.markBMI;
  },
};

mark.calcBMI();
console.log(mark.calcBMI());

let john = {
  name: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.johnBMI = this.mass / (this.height * this.height);
    return this.johnBMI;
  },
};

john.calcBMI();
console.log(john.calcBMI());

if (john.calcBMI() > mark.calcBMI()) {
  console.log(
    `${john.name}'s BMI ${john.calcBMI()} is higher than ${
      mark.name
    }'s ${mark.calcBMI()}`
  );
} else {
  console.log(
    `${mark.name}'s BMI ${mark.calcBMI()} is higher than ${
      john.name
    }'s ${john.calcBMI()}`
  );
}

// for loop

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weight repitation ${rep}`);
}

for (let voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting`);
}

// for loop with array

const tom = [
  "suraj",
  "vishwakarma",
  2023 - 1999,
  "Developer",
  ["Michelle", "Peter", "Tom"],
  true,
];

const tomTypes = [];

for (let i = 0; i < tom.length; i++) {
  console.log(tom[i], typeof tom[i]);

  // tomTypes[i] = typeof tom[i];
  tomTypes.push(typeof tom[i]);
}

console.log(tomTypes);

const birthyear = [1999, 2000, 2001, 2002];
const age = [];

for (i = 0; i < birthyear.length; i++) {
  if (typeof tom[i] !== "string") continue;
  age.push(2023 - birthyear[i]);
}

console.log(age);

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n - i; j++) {
    string += "";
  }
}

console.log(string);

const numberEqual100 = (a, b) => a === 100 || b === 100 || a + b === 100;

console.log(numberEqual100(50, 40));
console.log(numberEqual100(50, 50));
console.log(numberEqual100(100, 50));
