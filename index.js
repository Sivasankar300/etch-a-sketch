//First step is to make 16x16 divs through for loop
const container = document.querySelector("#container");
for (i = 0; i < 255; i++) {
  const divs = document.createElement("div");
  divs.classList.add(`divs${i}`, "divs");
  container.appendChild(divs);
}

const divList = document.querySelectorAll(".divs");
const button = document.querySelector('#btn');

divList.forEach((divs) => {
 
divs.addEventListener("mouseenter", () => {
  console.log("yay");
  divs.classList.add("black");
}); });

const divs = document.querySelector('divs');


button.addEventListener('click', () => {
    while(container.hasChildNodes()) {
     const deletedDivs = container.removeChild(container.firstChild);
    }
});
