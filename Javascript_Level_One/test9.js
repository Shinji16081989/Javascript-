var firstname = prompt("Ten ban la gi?")
var lastname = prompt("Ban ho gi?")
var age = prompt("Ban bao nhieu tuoi")
var tall = prompt("ban cao bao nhieu cm ?")
var pet = prompt("Pet cua ban ten gi?")
alert("Cam on ban vi da hoan thanh cau hoi")

nameCond = null
ageCond = null
heightCond = null
petCond = null

if (firstname[0] === lastname[0]) {
  nameCond = true
}else {
  nameCond = false
}

if (age > 20 && age < 30) {
  ageCond = true
}else {
  ageCond = false
}

if (tall >= 170) {
  heightCond = true
}else {
  heightCond = false
}

if (pet[pet.length-1] === "y" ) {
  petCond = true
}else {
  petCond = false
}

if (nameCond && ageCond && heightCond && petCond) {
  console.log("Chao ban Spy");
}else {
  console.log("ko co gi de xem o day dau");
}
