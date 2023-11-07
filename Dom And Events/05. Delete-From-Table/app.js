function deleteByEmail() {
    const email = Array.from(document.querySelectorAll("td:nth-child(2)"));
    const textEmail = document.querySelector("input[name=email]").value;
    const foundEmail = email.find(e => e.textContent === textEmail);
    if (foundEmail) {
        const deletedRow = foundEmail.parentNode;
        deletedRow.parentNode.removeChild(deletedRow);
        document.getElementById("result").textContent = "Deleted."
    } else {
        document.getElementById("result").textContent = "Not found.";
    }
}