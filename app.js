let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const lizard_div = document.getElementById("l");
const spock_div = document.getElementById("z");

function getComputerChoice() {
  const choices = ['r', 'p', 's', 'l', 'z'];
  const randomNumber = Math.floor(Math.random() * 5);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissors";
  if (letter === "l") return "Lizard";
  if (letter === "z") return "Spock";
}

function win(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You Win!`;
  userChoice_div.classList.add('green-glow');
  setTimeout(() => userChoice_div.classList.remove('green-glow'), 500);
}

function lose(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You Lost!`;
  userChoice_div.classList.add('red-glow');
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 500);
}

function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a Draw!`;
  userChoice_div.classList.add('grey-glow');
  setTimeout(() => userChoice_div.classList.remove('grey-glow'), 500);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "rl":
    case "pr":
    case "pz":
    case "sp":
    case "sl":
    case "lp":
    case "lz":
    case "zs":
    case "zr":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "rz":
    case "ps":
    case "pl":
    case "sr":
    case "sz":
    case "lr":
    case "ls":
    case "zp":
    case "zl":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
    case "ll":
    case "zz":
      draw(userChoice, computerChoice);
      break;
    }
}

function main() {
  rock_div.addEventListener('click', function() {
  game("r");
  })

  paper_div.addEventListener('click', function() {
  game("p");
  })

  scissors_div.addEventListener('click', function() {
  game("s");
  })

  lizard_div.addEventListener('click', function() {
  game("l");
  })

  spock_div.addEventListener('click', function() {
  game("z");
  })
}

main();
