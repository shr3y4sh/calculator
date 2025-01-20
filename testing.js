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
      if (b === 0) {
        logging("ERROR");
        player = new Numbers();
        history = [];
        displayArea.innerHTML = "";
        return 0;
      }

      return a / b;
    },
  },
  multiply: {
    display: "*",
    operation: (a, b) => {
      return a * b;
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
      return a ** b;
    },
  },

  clear: "clear",
  backspace: "backspace",
};

///////////////////////////////////////////////////////

function makeNewDiv(value) {
  let input = document.createElement("div");
  input.innerText = value;
  input.classList.add("in-screen");
  displayArea.appendChild(input);
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
  this.justOperated = false;
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

    logging(">>>>>>>>>>>>>>>>>>>>>> CLICKED >>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    animationAndSound(button);
    let clicked = button.getAttribute("id");
    let value = ListOfButtons[clicked];

    playWithValue(value);

    logging("State", stateOfDocument);

    logging("history", history);

    logging("player", player.inputs);

    logging("operation", player.operation);
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
      equalTo(player.operation);
      break;
    case ".":
      decimalButton(value);
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
  // BACKSPACE BUTTON
}

///////////////////////////////////////////////////////////

function equalTo(operation) {
  //EQUAL BUTTON
  if (player.justOperated || history.length < 1) {
    return;
  }

  player.inputs.push(Number(history.join("")));

  displayArea.innerHTML = "";

  history = [];

  if (player.inputs.length !== 2) {
    return;
  }

  let answer = player.inputs.reduce(operation);

  stateOfDocument.push("OPERATION");

  answer = Math.round(answer * 100) / 100;

  player.justOperated = true;

  let token;

  try {
    token = String(answer).split("");
  } catch {
    logging("Equal to mistake exception");
    return;
  }

  logging("TOKEN: ", token);

  token.forEach((token) => {
    makeNewDiv(token);
  });

  player.inputs = [];

  player.inputs.push(answer);
}

/////////////////////////////////////////////////////////////

function decimalButton(value) {
  // DECIMAL BUTTON

  if (history.length < 1) {
    return;
  }

  history.push(value);
  player.justOperated = false;
  makeNewDiv(value);
}

///////////////////////////////////////////////////////////

function numbersClicked(value) {
  // ANY NUMBER

  let check = stateOfDocument.slice(-2)[0];
  if (check === "OPERATION") {
    displayArea.innerHTML = "";
    player.inputs = [];
  }

  history.push(value);
  player.justOperated = false;
  makeNewDiv(value);
}

//////////////////////////////////////////////////////////

function operationButton(operation) {
  // LETS DO SOME OPERATION
  if (player.inputs.length === 2) {
    return;
  }

  let lastElement = stateOfDocument.slice(-2)[0];

  if (typeof lastElement !== "number" && typeof lastElement !== "string") {
    return;
  }

  player.operation = operation.operation;

  if (history.length > 0) {
    player.inputs.push(Number(history.join("")));
    history = [];
  }

  if (player.inputs.length === 2) {
    equalTo(player.operation);
  }

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
