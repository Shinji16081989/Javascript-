var restart = document.querySelector('#b');

var squares = document.querySelectorAll("td");

function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
}

restart.addEventListener('click',clearBoard);

// Check the square marker
function squareMarker() {
  if (this.textContent === " ") {
    this.textContent = "A";
  }else if (this.textContent === "A") {
    this.textContent = "B";
  }else if (this.textContent === "B") {
    this.textContent = "C";
  }else {
    this.textContent = " ";
  }
}

//For lopp to add event listener too all the squares
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', squareMarker)
}
