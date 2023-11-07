function addItem() {
    const text = document.querySelector("#newItemText").value;
    const li = document.createElement("li");
    li.textContent = text;
    const anchor = document.createElement("a");
    anchor.href = "#";
    anchor.textContent = "[Delete]";
    li.appendChild(anchor);
    document.querySelector("ul").appendChild(li);
    document.querySelector("#newItemText").value = '';
    
    anchor.addEventListener("click", (e) => {
        li.remove();
    });
}