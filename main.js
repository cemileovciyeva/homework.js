//---Task1---
function customerRegistration() {
    const lastName = prompt("Please enter your last name");
    const firstName = prompt("Please enter your first name");
    const email = prompt("Please enter your email");
    const response = "${email} - ${lastName} ${firstName}";
    return response;
}
console. log(customerRegistration());


//---Task2---
 function serviceDelivery() {
    const distance = prompt("How many km from your location?");
    const tip = 5 + (0.25 * Number(distance));
    return "${tip} AZN";
}
console.log(serviceDelivery())


//---Task3---
 function calculateReceiptAmount(name, unitPrice, quantity, promotion){
    let amount = unitPrice * quantity
    if(quantity >=5) {
        amount *= 0.9
    }
    if(promotion){
        amount *= 0.85;
    }
    return amount;
}
console.log(calculateReceiptAmount("table", 120, 15, true ))


//---Task4---
 function suggestTable(count) {
    if (count <= 2) {
      return "Small table";
    } else if (count <= 4) {
      return "Medium table";
    } else if (count <= 8) {
      return "Large table";
    } else {
      return "no table";
    }
}
const guestCount = prompt("How many people are you?");
console.log(suggestTable(guestCount));


//---Task5---
function temperatures() {
    const temperature1 = prompt("first temperature");
    const temperature2 = prompt("second temperature");
    const temperature3 = prompt("third temperature");
    const temperatureSort = [temperature1, temperature2, temperature3];
    temperatureSort.sort(function(a, b) {return b - a});
    console.log("${temperatureSort}");
}
temperatures();


//---Task6---
function customerInformation( name, age, count, totalAmount){
    if((age >= 60) || (count >=4 && totalAmount >=100)) {
        return true;
    }
    else {
        return false;
    }
}
console.log(customerInformation("Jamila", 20, 5, 200));


//---Task7---
function aboutShipment(length, width, height, weight, distance) {
    if (
      Number(length) + Number(width) + Number(height) <= 150 &&
      weight <= 10 &&
      distance >= 3 &&
      distance <= 10 &&
      length &&
      width &&
      height <= 100
    ) {
      return true;
    } else {
      return false;
    }
}
console.log(aboutShipment(45, 30, 20, 9, 7));


//---Task8---
function numberToText(number) {
    let ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let specialCases = {
      10: "ten",
      11: "eleven",
      12: "twelve",
      13: "thirteen",
      14: "fourteen",
      15: "fifteen",
      16: "sixteen",
      17: "seventeen",
      18: "eighteen",
      19: "nineteen"
    }; 
    let tensDigit = Math.floor(number / 10);
    let onesDigit = number % 10;
    if (number in specialCases) {
      return specialCases[number];
    } else {
      return "${tens[tensDigit]} ${ones[onesDigit]}";  
    }
}
let number = 10;
let text = numberToText(number);
console.log(text);


//---Task9---
function divisibleNumbers (number){
    for (let i = 1; i <=1000; i++){
        if (i % number === 0)
        console.log(i) 
    }
}
divisibleNumbers(50);


//---Task10---
function bankDeposit (initialAmount, duration, percentage){
    for (let i=0; i <duration; i++ ){
        initialAmount += initialAmount * (percentage / 100);
    }
    return initialAmount;
}
console.log(bankDeposit(1000, 3, 14))


//---Task11---



//---Task12---



//---Task13---


