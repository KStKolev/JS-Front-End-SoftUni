function searchHashTagWords(text) {
    let textArray = text.split(" ");
    for (let index = 0; index < textArray.length; index++) {
        if (textArray[index].length > 1 && textArray[index].startsWith('#')) {
            if (/\d/.test(textArray[index])) {
                continue;
            }
            textArray[index] = textArray[index].substring(1, textArray[index].length);
            console.log(textArray[index]);
        }        
    }
}