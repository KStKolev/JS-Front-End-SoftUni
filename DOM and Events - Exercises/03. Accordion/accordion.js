function toggle() {
    const unfoldButton = document.querySelector(".button"); 
    const extraContainer = document.querySelector("#extra");
    if (unfoldButton.textContent === "More") {
        unfoldButton.textContent = "Less";
        extraContainer.style.display = "block";
    } 
    else if(unfoldButton.textContent === "Less") {
        unfoldButton.textContent = "More";
        extraContainer.style.display = "none";
    }
}