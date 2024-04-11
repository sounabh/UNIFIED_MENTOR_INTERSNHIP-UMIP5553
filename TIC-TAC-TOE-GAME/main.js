const gameCells = document.querySelectorAll(".cells");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const restartButton = document.querySelector(".restart");
const alertBox = document.querySelector(".alertBox")

//declaring variables
let currPlayer = "x";
let nxtPlayer = "o";
let playerTurn = currPlayer;

player1.textContent = `player 1 : ${currPlayer}`
player2.textContent = `player 2 : ${nxtPlayer}`

//function to start the game
const startGame = () => {
  gameCells.forEach((cell) => {
    cell.addEventListener("click", handleClick);
  });
  //restartButton.addEventListener("click", restartGame)
};

const handleClick = (e) => {
  if (e.target.textContent === "") {
    e.target.textContent = playerTurn;
    if (checkWin()) {
        showAlert(`${playerTurn} is winner`)
      
      disableCells();
    } else if (checkTie()) {
        showAlert("its a tie")
     // console.log("tie");
      disableCells();
    } else {
        changePlayerTurn();
        showAlert(`turn for player ${playerTurn}`)
      
    }
  }

  // console.log(e.target);
};

//function to change player turn
const changePlayerTurn = () => {
  if (playerTurn === currPlayer) {
    playerTurn = nxtPlayer;
  } else {
    playerTurn = currPlayer;
  }
};

//check win function
const checkWin = () => {
  const winningcondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningcondition.length; i++) {
    const [pos1, pos2, pos3] = winningcondition[i]; // array destructuring
    if (
      gameCells[pos1].textContent === gameCells[pos2].textContent &&
      gameCells[pos2].textContent === gameCells[pos3].textContent &&
      gameCells[pos1].textContent !== ""
    ) {
      return true;
    }
  }
  return false;
};

// check tie
const checkTie = () => {
  let emptycells = 0;
  gameCells.forEach((cell) => {
    if (cell.textContent === "") {
      emptycells++;
    }
  });
  return emptycells === 0 && !checkWin();
};

//function to disable cells
const disableCells = () => {
  gameCells.forEach((cell) => {
    cell.removeEventListener("click", handleClick);
    cell.classList.add("disabled");
  });
};

const restartGame = () =>{
    gameCells.forEach(cell => {
        cell.textContent = ""
        cell.classList.remove('disabled')
    })
    startGame()
}

const showAlert = (msg) => {
alertBox.style.display = "block"
alertBox.textContent = msg
setTimeout(()=>{
    alertBox.style.display = "none"
},5000)
}

//adding event to restart button

restartButton.addEventListener("click",restartGame)

//calling start game     function
startGame();
