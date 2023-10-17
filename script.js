const sketchBox = document.querySelector(".sketchContainer");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let width, height;
    width = button.id == "28" ? "28px" : button.id == "50" ? "50px" : "70px";
    height = button.id == "28" ? "28px" : button.id == "50" ? "50px" : "70px";
    changeSketchBox(button.id, width, height);
  });
});

sketchBox.addEventListener("mouseover", (div) => {
  if (div.target.classList.contains("childBox")) {
    div.target.style.backgroundColor = "#000";
  }
});

function changeSketchBox(chosenBox, width, height) {
  const childDivs = sketchBox.querySelectorAll("div");
  childDivs.forEach(function (childDiv) {
    sketchBox.removeChild(childDiv);
  });

  for (i = 0; i < (700 * 700) / (chosenBox * chosenBox); i++) {
    const newBox = document.createElement("div");
    newBox.classList.add("childBox");
    newBox.style.width = width;
    newBox.style.height = height;
    sketchBox.appendChild(newBox);
  }
}

changeSketchBox(28, "28px", "28px");
