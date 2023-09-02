const colorButton = document.getElementById("colorButton");
const h1 = document.getElementById("pageTitle");
const button = document.getElementById("colorButton");
const body = document.body;
const colors = ["#01000D", "#FFFFFF"];

colorButton.addEventListener("click", () => {
  const storageColor = localStorage.getItem("color");
  let currentColorIndex = storageColor ? colors.indexOf(storageColor) : 0;
  if (currentColorIndex === -1) {
    currentColorIndex = 0;
  }

  console.log({ currentColorIndex });
  const newColor = colors[currentColorIndex];
  const complementaryColor = getComplementaryColor(newColor);

  body.style.backgroundColor = newColor;
  h1.style.color = newColor;
  h1.style.backgroundImage = getBackgroundImage(newColor);
  h1.style.color = "transparent";

  button.style.backgroundColor = complementaryColor;
  button.style.color = newColor;

  console.log(newColor);
  localStorage.setItem("color", colors[currentColorIndex === 0 ? 1 : 0]);
});

function getComplementaryColor(color) {
  const hexColor = color.substring(1);
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

  const complementaryR = 255 - r;
  const complementaryG = 255 - g;
  const complementaryB = 255 - b;

  return `#${componentToHex(complementaryR)}${componentToHex(
    complementaryG
  )}${componentToHex(complementaryB)}`;
}

function componentToHex(c) {
  const hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function getBackgroundImage(color) {
  if (color === "#FFFFFF") {
    return "linear-gradient(to right, rgb(14, 124, 197), rgb(35, 179, 236), rgb(8, 219, 191), rgb(49, 238, 128))";
  } else if (color === "#01000D") {
    return "linear-gradient(to right, rgb(243, 195, 62), rgb(224, 143, 20), rgb(238, 105, 52), rgb(238, 49, 96))";
  }
}
