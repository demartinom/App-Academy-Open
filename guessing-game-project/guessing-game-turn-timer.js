const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

let numAttemps = 5;

const askRange = () => {
  rl.question("Enter a min number: ", (minNumber) => {
    let minRange = Number(minNumber);
    rl.question("Enter a max number: ", (maxNumber) => {
      let maxRange = Number(maxNumber);
      console.log(
        `I'm thinking of a number between ${minNumber} and ${maxNumber}`
      );
      secretNumber = randomInRange(maxRange, minRange);
      return askGuess();
    });
  });
};

const checkGuess = (number) => {
  if (number > secretNumber) {
    console.log("Too high");
    return false;
  } else if (number < secretNumber) {
    console.log("Too low");
    return false;
  } else if (number === secretNumber) {
    console.log("Correct!");
    return true;
  }
};

const askGuess = () => {
  rl.question("Enter a guess ", (answer) => {
    if (checkGuess(Number(answer)) === true) {
      console.log("You win!");
      rl.close();
    } else if (checkGuess(Number(answer)) === false) {
      numAttemps--;
      if (numAttemps === 0) {
        console.log("You lose");
        rl.close();
      } else {
        askGuess();
      }
    }
  });
};

return askRange();
