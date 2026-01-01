// Gemini's Javascript assignments
let taxRate=0.1;
function calculateTotal(price){
  let result =price+(price*taxRate);
    return result;
}
let finalPrice=calculateTotal(100);
console.log("Final Price after tax:",finalPrice);
// Geminis assignments on loops
for(let num=1;num<=20;num++){

if(num%2===0){
    console.log(num,"is an even number");
}
else{
    console.log(num,"is an odd number");
}}

// Geminis assignment on arrays 
// grade calculator
let grades = [80, 90, 70, 100, 60];
let total=0;

for(let i=0;i<grades.length;i++){
    total+=grades[i];
    i===grades.length-1 ?console.log("Your average grade is",total/grades.length):null;

}
/*📝 Your Final Beginner Assignment
This is a real-world task. You are going to build a simple User Profile system in code.
Instructions:
Create an Object called user with name, balance, and isActive (boolean).
Write a Function called buyItem that takes price as an input.
Inside the function:
IF the user isActive is false, print "Account locked."
ELSE IF the price is greater than user.balance, print "Insufficient funds."
ELSE, subtract the price from the balance and print "Purchase successful! New Balance: " + user.balance.*/

let user={
    name:"Nwokolo Victor Oluebubechukwu",
    balance:1000,
    isActive:true,
    buyItem(price){

        if(!user.isActive){
            console.log("Account locked.");
        }
        else if(price>user.balance){
            console.log("Insufficient funds.");
        }
        else{console.log("this is your balance:",user.balance-=price)};
    }
    
};
console.log(user.buyItem(500));

//assignment on ES6+ transform an old code to ES5+ style 
// below is d code
let product = {
    title: "iPhone 15",
    price: 999,
    color: "Black"
};
/* i will comment the old way so i can run d new code
function getProductInfo(item) {
    let title = item.title;
    let price = item.price;
    return "The " + title + " costs $" + price;
}
console.log(getProductInfo(product));*/
// below is the transormed code
const {title,price,color}=product;
console.log(product);