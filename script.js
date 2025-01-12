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

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
