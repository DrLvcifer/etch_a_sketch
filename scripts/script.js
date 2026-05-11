// Div Creation

const container = document.getElementById("flex-container");

for (let i = 0; i < 256; i++) {
   const pixel = document.createElement("div");
   pixel.classList.add("pixel");
   container.appendChild(pixel);
}

container.addEventListener("mouseover", (e) => {
   if (e.target.classList.contains("pixel")) {
      e.target.classList.add("is-active");
   }
});
