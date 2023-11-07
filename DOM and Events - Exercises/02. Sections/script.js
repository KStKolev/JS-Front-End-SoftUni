function create(words) {
   const contentContainer = document.querySelector("#content");
   words.forEach(word => {
      const divContainer = document.createElement("div");
      const paragraph = document.createElement("p");
      paragraph.textContent = word;
      paragraph.style.display = "none";
      divContainer.appendChild(paragraph);
      divContainer.addEventListener("click", () => {
         divContainer.firstChild.style.display = "block";
      });
      contentContainer.appendChild(divContainer);
   });
}