function solve() {

  class Furniture {
    constructor(name, img, price, decFactor) {
      this.name = name,
      this.img = img,
      this.price = price,
      this.decFactor = decFactor
    }
  }

  const buttons = Array.from(document.getElementsByTagName("button"));
  const textAreas = Array.from(document.querySelectorAll("textarea"));
  const generateButton = buttons[0];
  const tableRowsArray = [];

  function createRow(el, propertyObj, tableRow) {
    const Cell = document.createElement("td");
    const element = document.createElement(el);
    if (el === "img") {
      element.src = propertyObj;
    }
    else if (el === "input") {
      element.type = "checkbox";
    }
    else {
      element.textContent = propertyObj;
    }
    Cell.appendChild(element);
    tableRow.appendChild(Cell);
  }

  generateButton.addEventListener("click", () => {
    let arrayCounter = 0;
    const furnituresArray = [];
    const inputValueArray = JSON.parse(textAreas[0].value);

    inputValueArray.forEach(object => {
      const inputValue = object;
      furnituresArray.push(new Furniture(inputValue["name"], inputValue["img"], 
      inputValue["price"], inputValue["decFactor"]));

      const tableRow = document.createElement("tr");

      createRow("img", furnituresArray[arrayCounter].img, tableRow);
      createRow("p", furnituresArray[arrayCounter].name, tableRow);
      createRow("p", furnituresArray[arrayCounter].price, tableRow);
      createRow("p", furnituresArray[arrayCounter].decFactor, tableRow);

      const checkCell = document.createElement("td");
      const checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      checkCell.appendChild(checkBox);
      tableRow.appendChild(checkCell);

      const tableBody = document.querySelector("tBody");
      tableBody.appendChild(tableRow);
      tableRowsArray.push(tableRow);
      arrayCounter++;

    });

  });

  const buyButton = buttons[1];
  
  buyButton.addEventListener("click", () => {
    const furnitureNames = [];
    const furniturePrices = [];
    const furnitureDecFactors = [];
    const resultTextArea = textAreas[1];
    resultTextArea.value = "";

    tableRowsArray.forEach(row => {
      const checkedInputs = row.lastChild.lastChild;
      if (checkedInputs.checked) {
        const tableCells = Array.from(row.children);
        furnitureNames.push(tableCells[1].firstChild.textContent);
        furniturePrices.push(tableCells[2].firstChild.textContent);
        furnitureDecFactors.push(tableCells[3].firstChild.textContent);
      } 
    });

    const totalPrice = furniturePrices.reduce((acc, curr) => {
      return acc + Number(curr);
    }, 0).toFixed(2);

    let averageDecorationFactor = 0;
    if (furnitureDecFactors.length > 0) {
      averageDecorationFactor = furnitureDecFactors.reduce((acc, curr) => 
      {
        return acc + Number(curr);
      }, 0) / furnitureDecFactors.length;
    }

    resultTextArea.value = `Bought furniture: ${furnitureNames.join(", ")}\nTotal price: ${totalPrice}\nAverage decoration factor: ${averageDecorationFactor}`;
  });
}