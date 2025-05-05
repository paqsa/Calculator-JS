const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "reset") {
            mainInput.value = "";
        } else if (value === "=") {
            try {
                mainInput.value = eval(mainInput.value);
            } catch {
                mainInput.value = "Error";
            }
        } else {
            mainInput.value += value;
        }
    });
});