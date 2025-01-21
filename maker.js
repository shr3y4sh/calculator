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

let historyplay = {
  show: 0,
  stash: [],
};

let mainPlay = {
  onScreenNumber: [],
  fillNumber: [],
  Operation: "",
};

let buttonsObject = {
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
    // e.bubbles = false;
    animationAndSound(button);

    let newtarget = e.target.parentNode;

    let newtargetId = newtarget.getAttribute("id");

    // console.log(newtargetId);

    if (newtargetId === "button-area") {
      newtarget = e.target;
    }

    console.log(newtarget);
  })
);
