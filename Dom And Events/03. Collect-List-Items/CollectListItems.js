function extractText() {
    const lists = document.querySelectorAll("li");
    const textArea = document.getElementById("result");
    for (const li of lists) {
        textArea.value += li.textContent + "\n";
    }
}