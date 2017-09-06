var firstname = prompt("Hello and Welcome. Please enter your first name:")
var lastname = prompt("Please Enter you last name")
var age = prompt("How old are you?")
var tall = prompt("How tall are you in centimeters")
var pet = prompt("What is your pet name?")
alert("Thank you so much for the information!")

var nameCond = null;
var ageCond = null;
var heightCond = null;
var petCond = null;

if (firstname[0] === lastname[0]) {
  nameCond = true;
} else {
  nameCond = false;
}

if (age > 20 && age < 30) {
  ageCond = true;
} else {
  ageCond = false;
}

if (tall >= 170) {
  heightCond = true;
} else {
  heightCond = false;
}

if (pet[pet.length-1] === "y") {
  petCond = true;
} else {
  petCond = false;
}

if (nameCond && ageCond && heightCond && petCond) {
  console.log("Welcome spy!");
} else {
  console.log("nothing to see here");
}
