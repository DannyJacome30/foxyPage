import { registerImage } from "../src/lazy";

const minium = 1;
const maxium = 122;
const baseUrl = "https://randomfox.ca/images/";

const random = () => Math.floor(Math.random() * (maxium - minium)) + minium;

const createImageNode = () => {
  const container = document.createElement("div");
  container.className = "p-4";

  const imagen = document.createElement("img");
  imagen.className = "mx-auto";
  imagen.width = "320";
  imagen.dataset.src = `${baseUrl}${random()}.jpg`;

  container.appendChild(imagen);

  return imagen;
};

const mounNode = document.getElementById("images");

const addButton = document.getElementById("add");
const addImage = () => {
  const newImage = createImageNode();
  mounNode.append(newImage);
  registerImage(newImage);
};

const removeButton = document.getElementById("clean");
const removeImage = () => {
  while (mounNode.firstChild) {
    mounNode.removeChild(mounNode.firstChild);
  }
};

addButton.addEventListener("click", addImage);
removeButton.addEventListener("click", removeImage);
