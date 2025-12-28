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