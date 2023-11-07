function focused() {
    const inputItems = Array.from(document.querySelectorAll("input"));
    inputItems.forEach(input => 
        {
            input.addEventListener("focus", (e) => {
                e.target.parentElement.className = "focused";
            });

            input.addEventListener("blur", (e) => {
                e.target.parentElement.className = '';
            })
        });
}