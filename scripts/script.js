/*______________
*  SCREEN LOGIC
--------------*/
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

/*________________
*  SETTINGS EVENTS
----------------*/

const dialog = document.getElementById("pop-up");
const setBtn = document.getElementById("settings-btn");
const confirmBtn = document.getElementById("confirm-btn");
const cancelBtn = document.getElementById("cancel-btn");

setBtn.addEventListener("click", () => {
   dialog.showModal();
});

cancelBtn.addEventListener("click", () => {
   dialog.close("cancel");
});

confirmBtn.addEventListener("click", (e) => {});
