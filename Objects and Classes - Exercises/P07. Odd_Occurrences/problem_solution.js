function printOddOccurrencesOfElements(elementsText) {
    const elementsArray = []; 
    const elements = elementsText.toLowerCase().split(" ");
    
    class Element {
        constructor(name, occurrences) {
            this.name = name,
            this.occurrences = occurrences
        }
    }

    function findElement(elementName) {
        const findElement = elementsArray.find(el => el.name === elementName);
        return findElement;
    }

    for (let index = 0; index < elements.length; index++) {
        const foundElement = findElement(elements[index]);
        if (foundElement !== undefined) {
            foundElement.occurrences += 1;
        } else {
            elementsArray.push(new Element(elements[index], 1));
        }
    }

    let elementsToPrintArray = [];
    elementsArray.forEach(element => {
        if (element.occurrences % 2 !== 0) {
            elementsToPrintArray.push(element.name);
        }
    });
    console.log(elementsToPrintArray.join(' '));
}

printOddOccurrencesOfElements('Cake IS SWEET is Soft CAKE sweet Food');