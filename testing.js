const ListOfButtons = {
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
  divide: {
    display: "/",
    operation: (a, b) => {
      dividend = a / b;
      dividend = Math.round(dividend * 10) / 10;
      return dividend;
    },
  },
  multiply: {
    display: "*",
    operation: (a, b) => {
      return Math.round(a * b * 10) / 10;
    },
  },
  subtract: {
    display: "-",
    operation: (a, b) => {
      return a - b;
    },
  },
  add: {
    display: "+",
    operation: (a, b) => {
      return a + b;
    },
  },
  power: {
    display: "^",
    operation: (a, b) => {
      return Math.round(Math.pow(a, b) * 10) / 10;
    },
  },

  clear: "clear",
  backspace: "backspace",
};

function makeNewDiv(...displayValue) {
  displayValue.forEach((Value) => {
    let input = document.createElement("div");
    input.innerText = Value;
    input.classList.add("in-screen");
    displayArea.appendChild(input);
  });
  return input;
}

function logging(...args) {
  args.forEach((arg) => {
    console.log(arg);
  });
}

const numbers = {
  alpha: 0,
  beta: 0,
  answer: 0,
};

const buttons = document.querySelectorAll(".button");

const displayArea = document.querySelector("#display");

let history = [];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // PLAY TIME
    animationAndSound(button);
    let clicked = button.getAttribute("id");
    let value = ListOfButtons[clicked];
  });
});

function clearAll() {
  // CLEAR BUTTON CLICKED
}

function backSpace() {
  // BACKSPACE BUTTON
}

function equalTo() {
  //EQUAL BUTTON
}

function numbersClicked() {
  // ANY NUMBER PLUS DECIMAL
}

function operationButton() {
  // LETS DO SOME OPERATION
}

function animationAndSound(button) {
  // ANIMATION AND SOUND.. DUH!!
  button.classList.add("pressed");
  let audio = new Audio((src = "assets/sounds/ui-click.mp3"));
  audio.play();
  setTimeout(() => {
    button.classList.remove("pressed");
  }, 200);
}
