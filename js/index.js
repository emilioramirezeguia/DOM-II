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
