function timeFive(numInput) {
  // Local scope to the function!
  var result = numInput * 5
  return result
}

//Global Sccope
var v = "GLOBAL V"
var stuff = "GLOBAL STUFF"
function fun(stuff) {
  console.log(v);
  stuff = "Reassign stuff in side func"
  console.log(stuff);
}

fun()

console.log(stuff);
