const ball = document.querySelector(".ball");

const redInput = document.querySelector("#red");
const greenInput = document.querySelector("#green");
const blueInput = document.querySelector("#blue");

const redText = document.querySelector(".sliders .red span");
const greenText = document.querySelector(".sliders .green span");
const blueText = document.querySelector(".sliders .blue span");

const rgbText = document.querySelector(".values .rgb #rgb-value");

const state = {
  red: 255,
  green: 255,
  blue: 255,
  finalColor: `rgb(${red}, ${green}, ${blue})`,
  update() {
    state.red = redInput.value;
    state.green = greenInput.value;
    state.blue = blueInput.value;

    redText.innerHTML = redInput.value;
    greenText.innerHTML = greenInput.value;
    blueText.innerHTML = blueInput.value;

    state.finalColor = `rgb(${state.red}, ${state.green}, ${state.blue})`;

    rgbText.innerHTML = state.finalColor;

    ball.style.backgroundColor = state.finalColor;
  },
  init() {
    redInput.addEventListener("input", state.update);
    greenInput.addEventListener("input", state.update);
    blueInput.addEventListener("input", state.update);

    state.finalColor = `rgb(${state.red}, ${state.green}, ${state.blue})`;

    rgbText.innerHTML = state.finalColor;

    ball.style.backgroundColor = state.finalColor;
  },
};

state.init();
