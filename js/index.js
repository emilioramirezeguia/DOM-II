// Your code goes here

// Grab the h1 element with the logo name
const logo = document.querySelector("h1");
// When the cursor hovers over that element, it's background color will turn black and the text color white
logo.addEventListener("mouseover", function (event) {
  logo.style.backgroundColor = "black";
  logo.style.color = "white";
});

// When hitting enter, momentarily clear the body, paint it dark blue, and add an h1 that says "where did everything go"
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

// Zoom in and zoom out the header image
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
