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
console.log("Testing the Terminal");
    // arrays in javascript
    // we have string arrays and number arrays
    let nameee=["ade", "victor", "oluebube","nwokolo"];//strong array
    let agee=[4,5,1,2,1,2,3,8,9];//numbers array
    // arrays can also be mixed
    let mixed=["hello",12,"car",true];
    // so we access the items in the array
    console.log(nameee);
    console.log(agee);
    // we can modify ites in the array
    nameee[2]="ebuka";
    console.log(nameee[2]);
    // arrray modifiers
    nameee.push("qwertyui");// add a value to the end
    console.log(nameee[nameee.length-1]);// you should notice how i accesed the last value without manually putting a number
    nameee.pop();// remmoves the last value
    nameee.unshift("yemi");// adds a value to the begining
    console.log(nameee[0]);
    nameee.shift();// this removes the first element
    console.log(nameee[0]);
    console.log(nameee);
    // splice array modifier
    nameee.splice(1,0,"james");// Starts at index one removes zero items at James at index one while shifting other values
    console.log(nameee);
    nameee.splice(3,1,"yuo","pot");// Starts as index 3 Remove one item while adding two items
    // removing items using splice
    nameee.splice(2,5);//
    console.log(nameee);
    nameee.reverse();// reverses the array
    console.log(nameee);
    nameee.splice(3,1,"yuo","pot");
    console.log(nameee);
    // Using the sort modifier
    nameee.sort();// sorts in ascending order alphabetically
    console.log(nameee);
    //so to use d sort modifier 
    //for number it different because it sorts numbers as strings
    //so we use a compare function
    console.log(agee);
    agee.sort((a,b)=>a-b);// sorts in ascending order
    // For the sending order just revers a in place of B and B in place of A
    console.log(agee);
    agee.sort((a,b)=>b-a);
    console.log(agee);

    //objects in javascript
    let player={
        name: "nwokolo victor oluebubechukwu",
        lives: 3,
        hasSuperPower: true,

        //you can store arrrays in objects
        imvemtory: ["sword", "shield", "potion"],
    };
    // accessing object properties
    console.log("Player Object:", player);
    console.log("Player Name:", player.name);
    console.log("Player Lives:", player.lives);
    console.log("Player Has Super Power:", player.hasSuperPower);
    console.log("Player Inventory:", player.imvemtory);
    // we can also modify object properties
    player.lives=5;
    console.log("Updated Player Lives:", player.lives);
    // we can a;so add new properties to an object
    player.level=10;
    console.log("Player Level:", player.level);

    function findStudent(students, name) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].name === name) {
      return { student: students[i], index: i };
    }
  }
  return null;
}
const students = [
  { name: "Alice", grade: 95 },
  { name: "Bob", grade: 87 },
  { name: "Charlie", grade: 92 }
];

console.log(findStudent(students, "Bob"));
    
//ES6+
// arrow functions
// using the old way
function add(a, b) {
    return a + b;
}
// when using arrow
const addd=(a,b)=> a+b;
// template literals
let namme ="nwokolo victor oluebubechukwu";
console.log(`hello ${namme}.how are you doing`);

//destructuring
// the old way 
let user = { id: 1, namne: "Alice", email: "alice@gmail.com",
    id: 2, namne: "Ace", email: "ace@gmail.com"
 };
//let namne = user.namne;
//let email = user.email;
//console.log(name, email);
 // using the modern way (destructuring)
const {namne,email}=user;
console.log(namne,email);
// so the above code is a bad syntax you noticed how there are two ids in the object 
// and how the output returned only one namne and email 
//this because javascript object does not allow for re using the same keywords like id and email 
//so it either we use an array of objects or we use an an object of arrays
// i will rewrite the above code to print both of the included users
const usser=[
    {id:1, nammee:"akice", aggee:12},
    {id:2, nammee:"ace", aggee:2}
];
console.log(usser);
//i also notced that here was array destructuring
// Old way
const numbers = [1, 2, 3];
const firrst = numbers[0];
const seccond = numbers[1];
//ES^ way
const [first,second,third]=[1,2,3];
console.log(first);
console.log(second);
console.log(third);
//skippin elements
const[k, ,l]=[1,2,3];
console.log( );// i trued printing the vasl 2 even though iskipped it 
// rest operator
const[head, ...tail]=[1,3,4,5,6]
console.log(head);
console.log(tail);
//default values 
const[j=3,u=4]=[484849];
console.log(j);// u will notice that the output of j is 484849
console.log(u);// if i did  [484489,484] output of u will be 484

//asynchronous javascript
// we are going to mark the function as async
const getuserdata=async()=>{
console.log("starting download");

// now we have to await the fetch request this is what get us d data
const response=await fetch("https://jsonplaceholder.typicode.com/users/1");
 
// now we convert the response into a json(a readable format)
const data=await response.json();
console.log("download finished");
console.log(data.name);
}
// to prove that the data runs in the background while continueing the res of the code
// we are going to get the data and also run a program
getuserdata();
console.log("now you see that i printed before the data arrived ");