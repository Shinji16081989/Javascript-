//Restart Game Button
var restart = document.querySelector("#b");
// Grabs all the squares
var squares = document.querySelectorAll('td');

//Clear all the squares
function clearBoard(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
}

restart.addEventListener('click',clearBoard);

var cellone = document.querySelector('#one')

// Check the square marker
function changeMarker() {
  if (this.textContent === '') {
    this.textContent = 'X';
  }else if (this.textContent === 'X') {
    this.textContent = 'O';
  }else {
    this.textContent = '';
  }
}
//For lopp to add event listener too all the squares
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click',changeMarker)
}
