function addItem() {

    const textInput = document.querySelector("#newItemText");
    const valueInput = document.querySelector("#newItemValue");

    const createdOption = document.createElement("option");
    createdOption.textContent = textInput.value;
    createdOption.value = valueInput.value;

    const select = document.querySelector("#menu");
    select.appendChild(createdOption);
    
    textInput.value = "";
    valueInput.value = "";
}