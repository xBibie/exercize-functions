
const number = 110

function bigNumber(number) {
    if (number >= 100) {
      return true;
    } else {
      return false;
    }
  };
  
console.log(bigNumber(66));
console.log(bigNumber(345));
console.log(bigNumber(3));
console.log(bigNumber(111));

//a function that produce something

//Brenda the Bouncer Bot
const brendaBouncer = function (maxAmount, totalAmount, agePerson){
if (agePerson < 18); {
    console.log ('This is a club for adults');
if (totalAmount >= maxAmount){
    console.log ('its too busy now, come back later');
} else {
    console.log ('come in');
};

console.log(brendaBouncer(150, 56, 17)); //this is a club for adults
console.log(brendaBouncer(150, 155, 30)); // its too busy now, come back later
console.log(brendaBouncer(150, 40, 23)); // come in
console.log(brendaBouncer(150, 111, 7)); // this is a club for adults

// a functions that produce something

const calculateAverage = function (number1, number2, number3, number4, number, 5){
  const total = number1 + number2 + number3 + number4 + number5;
  const average = total / 5;
  const averageRounded = Math.round(average);
  return averageRounded;
}; 

console.log(calculateAverage(5, 7, 23, 45, 2)); // 16,4
console.log(calculateAverage(33, 5, 22, 56, 56)); // 34,4
    // a function that produce and does something
    
