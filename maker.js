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

let buttonsObject = {
  /* 
        MADE A BUTTON HISTORY PLAYER JUST IN CASE
        WILL TURN IT INTO ARRAY ONLY
    */
  buttonHistory: [],
};

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
    buttonsObject.reload = false;
    animationAndSound(button);

    let newtarget = e.target.parentNode;

    let newtargetId = newtarget.getAttribute("id");

    if (newtargetId === "button-area") {
      newtarget = e.target;
    }

    Calculator(newtarget);
  })
);

function Calculator(target) {
  /* 
        HERE THE MAIN PLAY HAPPEN
    */
  let excalibur = target.getAttribute("id");

  player = AllButtonsDisplay[excalibur];

  if (typeof player === "number") {
    ListOfFlags.button.number = true;
    showNumber(player);
    return;
  }
}

function makeNewDiv(display) {
  /* 
        OUT TRUSTY DIV MAKER
    */
  let input = document.createElement("div");
  input.innerHTML = display;
  return input;
}

function showNumber(number) {
  /* 
        WHATEVER HAPPENS WHEN NUMBERS ARE PRESSED
    */
  let entry = makeNewDiv(number);
  entry.classList.add("in-screen");
  mainScreen.appendChild(entry);
}
