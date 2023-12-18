let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    ties: 0,
  };

  /*
  if (!score) {
    score = {
      wins: 0,
      losses: 0,
      ties: 0
    };
  }
  */

  let isautoplay = false;
  let intervalID;
  /* An important thing to be noted
  A button at rest or unclicked is always under a function 
  of null or assigned variable,
  if it is clicked it is considered under a value of true. Click again
  to make it presented back to the assigned value or false value*/
  function autoplay()
   {
    
    if (!isautoplay) {
     intervalID = setInterval(() => {
      const playermove2 = pickComputerMove();
      playGame(playermove2);
    }, 1000);
    isautoplay = true;

   }
     else {

     clearInterval(intervalID);
    isautoplay = false;
     }

  }
  
  function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = "";

    if (playerMove === "scissors") {
      if (computerMove === "stone") {
        result = "You lose.";
      } else if (computerMove === "paper") {
        result = "You win.";
      } else if (computerMove === "scissors") {
        result = "Tie.";
      }
    } else if (playerMove === "paper") {
      if (computerMove === "stone") {
        result = "You win.";
      } else if (computerMove === "paper") {
        result = "Tie.";
      } else if (computerMove === "scissors") {
        result = "You lose.";
      }
    } else if (playerMove === "stone") {
      if (computerMove === "stone") {
        result = "Tie.";
      } else if (computerMove === "paper") {
        result = "You lose.";
      } else if (computerMove === "scissors") {
        result = "You win.";
      }
    }

    if (result === "You win.") {
      score.wins += 1;
    } else if (result === "You lose.") {
      score.losses += 1;
    } else if (result === "Tie.") {
      score.ties += 1;
    }

    localStorage.setItem("score", JSON.stringify(score));

    javascriptscore();

    document.querySelector(".javaresult").innerHTML = result;

    document.querySelector(
      ".javamoves"
    ).innerHTML = `You <img src="Images/${playerMove}-emoji.png" class="moveicon" />
  <img src="Images/${computerMove}-emoji.png" class="moveicon" /> Computer`;
  }

  function javascriptscore() {
    document.querySelector(
      ".javascore"
    ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, 
  Ties: ${score.ties}`;
  }

  function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = "";

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = "stone";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = "paper";
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = "scissors";
    }

    return computerMove;
  }