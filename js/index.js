// Your code goes here

// Mouseover: when the cursor hovers over that element, it's background color will turn black and the text color white
const logo = document.querySelector("h1");
logo.addEventListener("mouseover", function (event) {
  logo.style.backgroundColor = "black";
  logo.style.color = "white";
});

// Keydown: when hitting enter, momentarily clear the body, paint it dark blue, and add an h1 that says "where did everything go"
document.body.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    document.body.innerHTML = "";
    document.body.style.backgroundColor = "blue";
    const h1 = document.createElement("h1");
    h1.innerHTML = "Where did everybody go? 😔";
    h1.style.color = "white";
    h1.style.fontSize = "6rem";
    h1.style.textAlign = "center";
    document.body.appendChild(h1);
  }
});

// Wheel: zoom in and zoom out the header image
const busImage = document.querySelector(".intro img");
function zoom(event) {
  event.preventDefault();
  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(0.125, scale), 4);

  // Apply scale transform
  busImage.style.transform = `scale(${scale})`;
}
let scale = 1;
busImage.addEventListener("wheel", zoom);

// Drag & Drop: grab any one of the content section and change the order of them.
let dragged;

/* events fired on the draggable element */
document.addEventListener("drag", function (event) {});

document.addEventListener("dragstart", function (event) {
  /* store a reference on the dragged element */
  dragged = event.target;
  /* make it half transparent */
  event.target.style.opacity = 0.5;
});

document.addEventListener("dragend", function (event) {
  event.target.style.opacity = "";
});

/* events fired on the drop targets */
document.addEventListener("dragover", function (event) {
  /* prevent default to allow drop */
  event.preventDefault();
});

document.addEventListener("dragenter", function (event) {
  /* highlight potential drop target when the draggable element enters it */
  if (event.target.className === "content-section") {
    event.target.style.backgroundColor = "purple";
  }
});

document.addEventListener("dragleave", function (event) {
  /* reset background of potential drop target when the draggable element leaves it */
  if (event.target.className === "content-section") {
    event.target.style.backgroundColor = "";
  }
});

document.addEventListener("drop", function (event) {
  /*prevent default action (open as link for some elements) */
  event.preventDefault();
  /* move dragged element to the selected drop target */
  if (event.target.className === "content-section") {
    event.target.style.backgroundColor = "";
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
  }
});

// Load: change the font of every heading when it's finished loading.
const h1 = document.querySelector("h1");
const h2 = document.querySelectorAll("h2");
const h4 = document.querySelectorAll("h4");
window.addEventListener("load", function (event) {
  h1.style.fontFamily = "Roboto";
  for (let i = 0; i < h2.length; i++) {
    h2[i].style.fontFamily = "Roboto";
  }
  for (let i = 0; i < h4.length; i++) {
    h4[i].style.fontFamily = "Roboto";
  }
});

// Focus: change the background color again when clicking the button.
const middleParagraph = document.querySelector(".destination:nth-of-type(2) p");
middleParagraph.addEventListener("focus", function (event) {
  event.target.style.backgroundColor = "red";
  event.target.style.color = "white";
});
middleParagraph.addEventListener("blur", function (event) {
  event.target.style.backgroundColor = "";
  event.target.style.color = "";
});

// Resize: display the height and width of the window when you manually resize it.
window.addEventListener("resize", function (event) {
  console.log("Height: ", window.innerHeight);
  console.log("Width: ", window.innerWidth);
});
