function solve() {
  const textArea = document.querySelector("#input");
  const sentences = textArea.value.split(".");
  const divContainer = document.querySelector("#output");
  const sentenceArray = [];

  function createDivChild(sentenceArray) {
    const paragraph = document.createElement("p");
    paragraph.textContent = `${sentenceArray.join(".")}.`;
    divContainer.appendChild(paragraph);
    console.log(paragraph);
  }

  while (sentences.length > 0) {

     let sentence = sentences.shift().trim();
     if (sentence.length !== 0) {
        sentenceArray.push(sentence);
     }

     if (sentenceArray.length === 3) {
        createDivChild(sentenceArray);
        sentenceArray.splice(0, sentenceArray.length);
     }

  }

  if (sentenceArray.length > 0) {
      createDivChild(sentenceArray);
  }

}