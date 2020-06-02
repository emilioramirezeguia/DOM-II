// Your code goes here

// Grab the h1 element with the logo name
const logo = document.querySelector("h1");
// When the cursor hovers over that element, it's background color will turn black and the text color white
logo.addEventListener("mouseover", function (event) {
  logo.style.backgroundColor = "black";
  logo.style.color = "white";
});
