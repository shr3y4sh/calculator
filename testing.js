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

///////////////////////////////////////////////////////

function makeNewDiv(...displayValue) {
  displayValue.forEach((Value) => {
    let input = document.createElement("div");
    input.innerText = Value;
    input.classList.add("in-screen");
    displayArea.appendChild(input);
    return input;
  });
}

/////////////////////////////////////////////////////////

function logging(...args) {
  args.forEach((arg) => {
    console.log(arg);
  });
}

///////////////////////////////////////////////////////

function Numbers(
  inputs = [],
  operation = () => {
    equalTo();
  }
) {
  this.inputs = inputs;
  this.operation = () => {
    operation();
  };
}

////////////////////////////////////////////////////////////////

const buttons = document.querySelectorAll(".button");

const displayArea = document.querySelector("#display");

let history = [];
let stateOfDocument = [];

let player = new Numbers();

//////////////////////////////////////////////////////////////////

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // PLAY TIME

    animationAndSound(button);
    let clicked = button.getAttribute("id");
    let value = ListOfButtons[clicked];

    playWithValue(value);

    logging("State", stateOfDocument);

    logging("history", history);

    logging("player", player);
  });
});

////////////////////////////////////////////////////

function playWithValue(value) {
  stateOfDocument.push(value);

  switch (value) {
    case "clear":
      clearAll();
      break;
    case "backspace":
      backSpace();
      break;
    case "=":
      equalTo();
      break;
    case ".":
      decimalButton();
      break;

    default:
      if (typeof value === "number") {
        numbersClicked(value);
      } else {
        operationButton(value);
      }
      break;
  }
}

////////////////////////////////////////////////////////////

function logState() {
  try {
    let pop = stateOfDocument.pop();
    logging(pop);
    stateOfDocument.push(pop);
  } catch {
    logging("State of document empty");
  }
}

/////////////////////////////////////////////////////////////

function clearAll() {
  displayArea.innerHTML = "";
  history = [];
  player = new Numbers();
  // CLEAR BUTTON CLICKED
}

///////////////////////////////////////////////////////////

function backSpace() {
  history.pop();
  displayArea.lastChild.remove();
  player.numbersFilled = false;
  // BACKSPACE BUTTON
}

///////////////////////////////////////////////////////////

function equalTo() {
  //EQUAL BUTTON
  //   numbers.numbersFilled = true;

  player.inputs.push(Number(history.join("")));
  history = [];
}

/////////////////////////////////////////////////////////////

function decimalButton(value) {
  // DECIMAL BUTTON
}

///////////////////////////////////////////////////////////

function numbersClicked(value) {
  // ANY NUMBER

  history.push(value);
  player.ready = false;
  makeNewDiv(value);
}

//////////////////////////////////////////////////////////

function operationButton(operation) {
  // LETS DO SOME OPERATION
  //   numbers.numbersFilled = true;
  stateOfDocument.push(operation.display);
  player.inputs.push(Number(history.join("")));
  history = [];

  makeNewDiv(operation.display);
}

//////////////////////////////////////////////////////////

function animationAndSound(button) {
  // ANIMATION AND SOUND.. DUH!!
  button.classList.add("pressed");
  let audio = new Audio((src = "assets/sounds/ui-click.mp3"));
  audio.play();
  setTimeout(() => {
    button.classList.remove("pressed");
  }, 200);
}
