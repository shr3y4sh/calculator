let buttons = document.querySelectorAll(".button");

// BUTTON PRESS ANIMATION AND SOUND >>>>>>>>>>>>>

buttons.forEach((button) =>
  button.addEventListener("click", function () {
    console.log("Blinking stopped");
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

buttons.forEach((button) =>
  button.addEventListener("click", function (event) {
    console.log(this);
    let screenNumber = document.createElement("div");
    screenNumber.setAttribute("id", "screen");
    screenNumber.classList.add("in-screen");
    screenNumber.innerText = "A";
    displayArea.appendChild(screenNumber);
  })
);
