function sumTable() {
    const productCost = Array.from(document.querySelectorAll("td:nth-child(2)"));
    const sum = productCost.reduce((acc, curr) => {
        return acc + Number(curr.innerHTML);
    }, 0);
    
    let rowSum = document.getElementById("sum");
    rowSum.innerHTML = sum;
}