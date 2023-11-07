function lockedProfile() {
    const buttonsInfo = Array.from(document.querySelectorAll("button"));

    buttonsInfo.forEach(button => {

       button.addEventListener("click", (e) => {
        const isLocked = e.currentTarget.parentElement.querySelector("input[type=radio]");
        if (!isLocked.checked) {
            const hiddenInfo = e.currentTarget.parentElement.querySelector("div");
            
            hiddenInfo.style.display = e.currentTarget.textContent === "Show more" ? 
            hiddenInfo.style.display = "block" : hiddenInfo.style.display = "none";

            e.currentTarget.textContent = e.currentTarget.textContent === "Show more" 
            ? "Hide it" : "Show more";
        }
       });

    });
    
}