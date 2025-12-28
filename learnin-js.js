//declare a variable score and assign it the value 0
let score = 0;
console.log("score:", score);
// updating the score value
score = 19;
console.log("Score has been updated to:", score);
//declaring a constant
const myName = "Nwokolo victor OLuebubechukwu";
console.log("My name is:", myName);
//data types in javascript
/*What goes inside the variables? There are 5 main "Primitive" types you must know.
String: Text. Must be inside quotes ("", '', or backticks ` `).
Number: Integers (10) or decimals (10.5). JS treats them the same.
Boolean: True or False. Used for logic.
Undefined: A variable that has been created but not given a value yet.
Null: A value that represents "nothing" or "empty" intentionally.
*/
let myString = "Hello, World!";
let myNumber = 42;
let myBoolean = true;
let myUndefined;
let myNull = null;
console.log("String:", myString);
console.log("Number:", myNumber);
console.log("Boolean:", myBoolean);
console.log("Undefined:", myUndefined);
console.log("Null:", myNull);

const firstName = "Victor";
const age = 20;
const isBillionaire = true;
let carModel;
const bankBalance = null;
console.log("firstname:", firstName);
console.log("Age:", age);
console.log("Is Billionaire:", isBillionaire);
console.log("Car Model::", carModel);
console.log("Bank Balance:", bankBalance);
// we can use the typeof operator to check d kind of datatype
console.log("Type of Datatypes:", typeof firstName);
console.log("Type of Datatypes:", typeof age);
console.log("Type of Datatypes:", typeof isBillionaire);
console.log("Type of Datatypes:", typeof carModel);
console.log("Type of Datatypes:", typeof bankBalance);
//operators in javascript {The maths part}
let a = 10;
let b = 5;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);
//string concatenation
const greeting = "Hello";
const name = "Victor";
console.log(greeting + " " + name);
let wellcmeMessage = "Hello " + name + ", welcome to your year of financial freedom!";
console.log(wellcmeMessage);
//comparison operators(the logic part)
let x = 10;
let y = 5;
console.log("Is x equal to y?", x == y);
console.log("Is x not equal to y?", x != y);
console.log("Is x greater than y?", x > y);
console.log("Is x less than y?", x < y);

// conditionals in javascript
let ageOfUser = 10;
if (ageOfUser >= 18) {
    console.log("wELCOME TO YOUR YEAR OF FINANCIAL FREEDOM!");
} else { console.log("you are too young to access this content."); }

//else if statement
let gradescore = 75;
if (gradescore >= 90) {
    console.log("Grade A");
} else if (gradescore >= 80) {
    console.log("Grade B");
} else if (gradescore >= 70) {
    console.log("Grade C");
} else {
    console.log("Grade F");
}
//tenary operator of if else statement
let height = 123.5;
let istall = height >= 120 ? "eligible" : "not eligible";
console.log("your height is", istall, " amd you are eligible to ride the roller coaster. ");

// Loops in Javascript
for (let num = 0; num <= 11; num++) {
    console.log("Number: ", num);
}
//switch statement
let number = 7;
switch (number % 2) {
    case 0:
        console.log(number + " is an even number.");
        break;
    case 1:
        console.log(number + " is an odd number.");
        break;
    default:
        console.log("Invalid input. Please enter a valid number.");
}

let gradee="A";
switch(gradee){
    case "A":
        console.log("Excellent work");
        break;
    case "B": 
        console.log("awesome job");
        break;
    case "C":
        console.log("keep it up");
        break;
    case "D":
        console.log("you can do better");
        break;
    case "E":
        console.log("study harder");
        break;
    case "F":
        console.log("failed, try again");
    default:
        console.log("invalid grade");
        break;
}
    



