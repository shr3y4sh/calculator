let buttons = document.querySelectorAll(".button");

// BUTTON PRESS ANIMATION AND SOUND >>>>>>>>>>>>>

buttons.forEach((button) =>
  button.addEventListener("click", function () {
    this.classList.add("pressed");
    let audio = new Audio((src = "assets/sounds/ui-click.mp3"));
    audio.play();
    setTimeout(() => {
      this.classList.remove("pressed");
    }, 200);
  })
);

// DISPLAY NUMBER ON SCREEN >>>>>>>>>>>>>>>>>>>>>

var displayArea = document.querySelector("#display");

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// OBJECT OF BUTTONS

var ListOfButtons = {
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

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// CREATING INPUT DISPLAY FUNCTION

function makeNewDiv(displayValue) {
  let input = document.createElement("div");
  input.innerText = displayValue;
  input.classList.add("in-screen");
  displayArea.appendChild(input);

  return input;
}

function logging(...args) {
  args.forEach((arg) => {
    console.log(arg);
  });
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let history = [];
let numbers = [];
let evaluatedValue = 0;
let lastOperation;
let justDoneOperation = false;
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// START
buttons.forEach((button) =>
  button.addEventListener("click", function () {
    let clicked = button.getAttribute("id");
    // logging(clicked);
    let value = ListOfButtons[clicked];
    // logging(justDoneOperation);

    try {
      logging(value.display);
    } catch {
      logging("NO LAST OPERATION");
    }
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    // IF CLEAR OR BACKSPACE

    if (value === "clear") {
      try {
        history = [];
        numbers = [];
        evaluatedValue = 0;
        lastOperation = undefined;
        displayArea.innerHTML = "";
        return;
      } catch {
        console.log("Clear failed");
      }
    }

    if (value === "backspace") {
      try {
        let getDeletion = history.pop();
        displayArea.lastChild.remove();
        return;
      } catch {
        console.log("Backspace failed");
      }
    }

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    //JUST DONE OPERATION

    if (justDoneOperation) {
      displayArea.innerHTML = "";
      String(evaluatedValue)
        .split("")
        .forEach((val) => {
          makeNewDiv(val);
        });
      history = [];
      numbers = [];
      numbers.push(evaluatedValue);
      justDoneOperation = false;

      logging(history, numbers, justDoneOperation, evaluatedValue);
      if (typeof value === "number" || value === ".") {
        justDoneOperation = true;
        logging(history, numbers, justDoneOperation, evaluatedValue);
        return;
      }
    }

    ////////////////////////////////////////////////////////////

    // IF DECIMAL POINT

    if (value === ".") {
      history.push(value);
      let input = makeNewDiv(value);
      return;
    }

    //>>>>>>>>>>>>>>.>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    // IF NUMBERSSSSSS
    console.log(history.length);
    if (history.length > 16) {
      displayArea.innerHTML = "";
      let overflow = "Overflow".split("");
      overflow.forEach((letter) => {
        makeNewDiv(letter);
      });
      return;
    }

    if (typeof value === "number") {
      history.push(value);
      let input = makeNewDiv(value);
      // logging(history, numbers);

      // ELSE OPERATIONS INCLUDING EQUALTO
    } else {
      // >>>>>>>>>>>>>>>>>>>>

      // FAILSAFE FOR TWO OPERATIONS TOGETHER

      if (typeof history[history.length - 1] !== "number") {
        return;
      }

      ////////////////////

      numbers.push(Number(history.join("")));
      history = [];

      //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

      //LAST OPERATION

      if (numbers.length === 2) {
        try {
          // logging(history, numbers, evaluatedValue, lastOperation);
          evaluatedValue = numbers.reduce(lastOperation);
          justDoneOperation = true;
          if (evaluatedValue > 1000000000) {
            evaluatedValue = String(evaluatedValue / 100000000 + "E8");
          }

          displayArea.innerHTML = "";

          let newArray = String(evaluatedValue).split("");

          newArray.forEach((element) => {
            history.push(element);
            makeNewDiv(element);

            if (history.length > 9) {
              return;
            }
          });

          numbers = [];
          numbers.push(evaluatedValue);
        } catch {
          console.log("Operation failed");
          displayArea.innerHTML = "";
          history = [];
          numbers = [];
          evaluatedValue = 0;
        }
      }

      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      // EQUAL TO IS BUILD DIFFERENT

      if (value === "=") {
        // yoooo
        justDoneOperation = false;
        return;
      }

      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

      let input = makeNewDiv(value.display);

      lastOperation = value.operation;

      // logging(history, numbers, evaluatedValue, lastOperation);
    }

    ///>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  })
);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
