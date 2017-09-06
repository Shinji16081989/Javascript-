var roster = []

function add() {
  var name = prompt("What name would you like to add?")
  roster.push(name)
}

function remove(){
  var remove_name = prompt("what name would you like to remove?")
  var index = roster.indexOf(remove_name)
  roster.splice(index, 1)
}

function display() {
  console.log(roster);
}

var start = prompt("Would you like to start the roster web app? y/n")
var action = null

if (start === "y") {
  while (action !== "quit") {
    action = prompt("Please seclect an action: add. remove, display, or quit.")
    if (action === "add") {
      add()
    }else if (action === "remove") {
      remove()
    }else if (action === "display") {
      display()
    }else if (action ==="quit") {
      alert("Alright, will quit")
    }
  }
}
alert("Thanks for using the Web App! Please refesh the page to start over.")
