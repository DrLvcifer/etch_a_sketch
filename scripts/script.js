/*________________
*  SETTINGS EVENTS
----------------*/

const dialog = document.getElementById("pop-up");
const setBtn = document.getElementById("settings-btn");
const cancelBtn = document.getElementById("cancel-btn");
const confirmBtn = document.getElementById("confirm-btn");
const container = document.getElementById("flex-container");

setBtn.addEventListener("click", () => {
   dialog.showModal();
});

cancelBtn.addEventListener("click", () => {
   dialog.close("cancel");
});

/*________________________
*  SCREEN BRAIN & LOGIC
------------------------*/
function createSketchGrid(sketchResolution) {
   sketchSize = Math.sqrt(sketchResolution);
   pixelSize = 100 / sketchSize;

   for (let i = 0; i < sketchResolution; i++) {
      const pixel = document.createElement("div");
      pixel.classList.add("pixel");
      pixel.style.width = `${pixelSize}%`;
      pixel.style.height = `${pixelSize}%`;
      container.appendChild(pixel);
   }

   container.addEventListener("mouseover", (e) => {
      if (e.target.classList.contains("pixel")) {
         e.target.classList.add("is-active");
      }
   });
}

createSketchGrid(256);

confirmBtn.addEventListener("click", () => {
   const selectedResolution = document.querySelector(
      'input[name="resolution"]:checked'
   );

   if (selectedResolution) {
      container.innerHTML = "";
      const sketchResolution = parseInt(selectedResolution.value);
      createSketchGrid(sketchResolution);
   }
});
