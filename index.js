//First step is to make 16x16 divs through for loop
const container = document.querySelector("#container");
for (i = 0; i < 255; i++) {
  const divs = document.createElement("div");
  divs.classList.add(`divs${i}`, "divs");
  container.appendChild(divs);
}

const divList = document.querySelectorAll(".divs");

divList.forEach((divs) => {
 
divs.addEventListener("mouseenter", () => {
  console.log("yay");
  divs.classList.add("black");
}); });
