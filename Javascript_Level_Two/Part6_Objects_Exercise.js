var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  nameLength: function() {
    console.log(this.name.length);
  }
}

var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  John: function() {
    alert("Name is " + this.name + " Job is " + this.job + " Age is " + this.age)
  }
}

var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  lastname: function() {
    console.log(this.name.split(" ")[1]);
  }
}
