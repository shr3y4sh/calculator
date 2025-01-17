let buttons = document.querySelectorAll(".button");

// BUTTON PRESS ANIMATION AND SOUND >>>>>>>>>>>>>

buttons.forEach((button) =>
  button.addEventListener("click", function () {
    // console.log("Blinking stopped");
    this.classList.add("pressed");
    // console.log(this);
    let audio = new Audio((src = "assets/sounds/ui-click.mp3"));
    audio.play();
    setTimeout(() => {
      this.classList.remove("pressed");
    }, 200);
  })
);

// DISPLAY NUMBER ON SCREEN >>>>>>>>>>>>>>>>>>>>>

var displayArea = document.querySelector("#display");

// console.log(displayArea.getAttribute("id"));

// console.log(typeof document.querySelector("#seven").getAttribute("class"));

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
  decimal: {
    display: ".",
  },
  equalto: {
    display: "=",
  },
  divide: {
    display: "/",
    operation: (a, b) => {
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
      return Math.pow(a, b);
    },
  },

  clear: {},
  backspace: {},
};

let history = [];

buttons.forEach((button) =>
  button.addEventListener("click", function () {
    // console.log(displayArea.hasChildNodes());
    let clicked = button.getAttribute("id");
    console.log(clicked);
    console.log(displayArea);
    let value = ListOfButtons[clicked];
    // console.log(value);
    // console.log(typeof value);
    if (value === ListOfButtons.clear) {
      try {
        displayArea.innerHTML = "";
      } catch {
        console.log("NO child node yet");
      }
    }

    if (value === ListOfButtons.backspace) {
      try {
        console.log(displayArea.lastChild);
        displayArea.lastChild.remove();
        return;
        // displayArea.lastChild.remove();
        // console.log(displayArea.lastChild);
      } catch {
        console.log("NO element yet");
      }
    }

    if (typeof value === "number") {
      history.push(value);
      let input = document.createElement("div");
      // console.log("here");
      input.innerHTML = value;
      input.classList.add("in-screen");
      // console.log(input);
      displayArea.appendChild(input);
    } else {
      if (displayArea.hasChildNodes() === false) {
        return;
      }
      let input = document.createElement("div");
      // console.log("here");
      input.innerHTML = value.display;
      input.classList.add("in-screen");
      // console.log(input);
      displayArea.appendChild(input);
    }
  })
);
