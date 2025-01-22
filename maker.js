let historyArea = document.querySelector("#history");

let mainScreen = document.querySelector("#main-screen");

// LETS WRITE SOME CODE
// ONCE AGAIN

/*

we are going to use history and main screen this time. 

how do I start?

objects!  

*/

const AllButtonsDisplay = {
  /*
THIS OBJECT IS FOR DISPLAYING 
THE THINGS ON THE CALCULATOR 
PLAY NICE
*/

  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  zero: 0,
  decimal: ".",
  equalto: "=",
  divide: "/",
  multiply: "*",
  subtract: "-",
  add: "+",
  power: "^",
  clear: "clear",
  backspace: "backspace",
};

const ListOfFlags = {
  /* 
    NOW THIS IS FOR EVERY IF-ELSE STATEMENTS
    USE THIS TO MAKE SURE WE REMEMBER THE 
    LAST THING THAT HAPPENED
    */

  newDay: true,
  onScreen: false,
  history: false,
  button: {
    number: false,
    operation: false,
    decimal: false,
    deletion: false,
    equal: false,
    negative: false,
  },
};

let historyplay = {
  /* 
    EVERYTHING HAPPENIN IN HISTORY SCREEN
    */
  show: 0,
  stash: [],
};

let mainPlay = {
  /* 
        MAIN PLAYER, THINGS ON MAIN SCREEN
    */
  onScreenNumber: [],
  fillNumber: [],
  Operation: "",
};

let buttonHistory = [];

const buttonList = document.querySelectorAll(".button");

function animationAndSound(button) {
  // ANIMATION AND SOUND.. DUH!!
  button.classList.add("pressed");
  let audio = new Audio((src = "assets/sounds/ui-click.mp3"));
  audio.play();
  setTimeout(() => {
    button.classList.remove("pressed");
  }, 150);
}

buttonList.forEach((button) =>
  button.addEventListener("click", (e) => {
    animationAndSound(button);

    let newtarget = e.target.parentNode;

    let newtargetId = newtarget.getAttribute("id");

    if (newtargetId === "button-area") {
      newtarget = e.target;
    }

    Calculator(newtarget);

    console.log(buttonHistory);
  })
);

function Calculator(target) {
  /* 
        HERE THE MAIN PLAY HAPPEN
    */
  let excalibur = target.getAttribute("id");

  player = AllButtonsDisplay[excalibur];

  printOnScreen(player);

  workingOperation(player);
}

function makeNewDiv(display) {
  /* 
        OUT TRUSTY DIV MAKER
    */
  let input = document.createElement("div");
  input.innerHTML = display;
  return input;
}

function printOnScreen(input) {
  if (input === "clear" || input === "backspace" || input === "=") {
    return;
  }

  buttonHistory.push(input);
  let entry = makeNewDiv(input);
  entry.classList.add("in-screen");
  mainScreen.appendChild(entry);
  ListOfFlags.onScreen = true;
}

function workingOperation(input) {
  switch (input) {
    case "clear":
      clearAll();
      break;

    case "backspace":
      backspace();
      break;

    case "=":
      evaluate();
      break;

    case "^":
      //exponent();
      break;

    case "+":
      //sum();
      break;

    case "-":
      //negative();
      break;

    case "*":
      //product();
      break;

    case "/":
      //quotient();
      break;

    case ".":
      //decimal();
      break;

    default:
      inputNumbers(input);
      break;
  }
}

function backspace() {
  mainScreen.lastChild.remove();

  let deletedItem = buttonHistory.pop();

  console.log(deletedItem);

  if (typeof deletedItem === "number") {
    mainPlay.onScreenNumber.pop();
  }
  // console.log(mainPlay.onScreenNumber);
  if (mainScreen.childElementCount == 0) {
    // console.log("Does it work?");
    ListOfFlags.onScreen = false;
  }

  // console.log(ListOfFlags.onScreen);
}

function clearAll() {
  mainScreen.innerHTML = "";
  ListOfFlags.onScreen = false;
  mainPlay.onScreenNumber = [];
  // console.log(ListOfFlags.onScreen);
}

function inputNumbers(input) {
  mainPlay.onScreenNumber.push(input);
  console.log(mainPlay.onScreenNumber);
  return;
}
