firstname = prompt("Ten ban la gi?")
lastname = prompt("Ban ho gi?")
age = prompt("Ban bao nhieu tuoi?")
height = prompt("ban cao bao nhieu?")
pet = prompt("pet cua ban ten gi?")
alert("Bạn có phải thật là An hôi nách ko?")


nameCond = null
ageCond = null
heightCond = null
petCond = null

if (firstname[0] === "a" && lastname[0] === "d") {
  nameCond = true
}else {
  nameCond = false
}

if (age >= 20 && age <= 30) {
  ageCond = true
}else {
  ageCond = false
}

if (height >= 150) {
  heightCond = true
}else {
  heightCond = false
}

if (pet[pet.length-1] === "m") {
  petCond = true
}else {
  petCond = false
}

if (nameCond && ageCond && heightCond && petCond) {
  console.log(" Hello An");
}else {
  console.log(" Cút hộ bố mày cái !!!!");
}
