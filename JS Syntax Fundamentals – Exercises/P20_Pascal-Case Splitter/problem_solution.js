function pascalSplitter(text) {
    console.log(text.split(/(?=[A-Z])/).join(", "))
}