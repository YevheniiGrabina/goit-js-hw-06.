const fontSizeControlRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

fontSizeControlRef.valueAsNumber = textRef.offsetHeight;

fontSizeControlRef.addEventListener("input", onChangeInput);

function onChangeInput() {
textRef.style.fontSize = `${fontSizeControlRef.valueAsNumber}px`;
}