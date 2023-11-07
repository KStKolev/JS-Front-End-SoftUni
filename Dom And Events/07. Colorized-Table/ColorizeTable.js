function colorize() {
    const tableRows = Array.from(document.querySelectorAll("tr:nth-child(even)"));
    tableRows.forEach(tr => {
        tr.style.background = "teal";
    });
}