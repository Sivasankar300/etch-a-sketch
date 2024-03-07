// Creating 16x16 squares of div when first entering the site
const container = document.querySelector("#container");
for (let i = 0; i < 255; i++) {
  const divs = document.createElement("div");
  divs.classList.add(`divs${i}`, "divs");
  container.appendChild(divs);
}

const button = document.querySelector("#btn");

// Adding the "black" class to a div when being hovered by a mouse

function hoverEffect() {
  const divList = document.querySelectorAll(".divs");
  divList.forEach((divs) => {
    divs.addEventListener("mouseenter", () => {
      divs.classList.add("black");
    });
  });
}

// Button that prompts the user for number of squares of per side for the new grid and replace the old one in the same amount of space

button.addEventListener("click", () => {
  let userInput = prompt("How many divs per side?");

  // Making sure that the user can't input above 100 per side to avoid the browser from crashing or lagging hard

  if (userInput)
    if (userInput <= 100) {
      while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
      }

      userInput *= userInput;

      for (i = 0; i < userInput; i++) {
        const divs = document.createElement("div");
        divs.classList.add(`divs${i}`, "divs");

        container.appendChild(divs);
      }

      const divList = document.querySelectorAll(".divs");
      hoverEffect();
    } else {
      alert("Too many, Refresh and keep it under 100");
    }
});
hoverEffect();
