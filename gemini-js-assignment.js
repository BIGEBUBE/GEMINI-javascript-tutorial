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
