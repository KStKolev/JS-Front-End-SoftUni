function editElement(element, originalText, replacedText) {
    let elementText = element.textContent;
    elementText = elementText.split(originalText).join(replacedText);
    element.textContent = elementText;
}