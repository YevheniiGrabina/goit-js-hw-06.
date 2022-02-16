function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesRef = document.querySelector("#boxes");
const controlsRef = document.querySelector("#controls");

controlsRef.addEventListener("click", onButtonClick);

function onButtonClick({target: {attributes, parentElement}}) {
  const actions = Array.from(attributes, ({name}) => name);
  if (actions.includes("data-create")) {
    const inputCount = getInput(parentElement);
    if (inputCount) {
      createBoxes(Number(inputCount.value));
    }
  } else if (actions.includes("data-destroy")) {
    destroyBoxes();
  }
}

function createBoxes(amount) {
  const divBox = [];
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const colorValue = getRandomHexColor();
    const div = `<div style="width: ${size}px; height: ${size}px; background-color: ${colorValue}"></div>`;
    divBox.push(div);
    size += 10;
  }
  boxesRef.innerHTML = divBox;
}
function getInput(parent) {
  return parent.querySelector("input");
}
function destroyBoxes() {
  boxesRef.innerHTML = "";
}