
        document.addEventListener("DOMContentLoaded", function () {
            const buttons = document.querySelectorAll(".confirm-btn");
    
            buttons.forEach(button => {
                button.addEventListener("click", function () {
                    if (button.textContent === "Pending") {
                        const confirmedText = document.createElement("span");
                        confirmedText.textContent = "Confirmed";
                        confirmedText.classList.add("confirmed-text"); // Apply the green text style
    
                        button.parentNode.replaceChild(confirmedText, button);
                    }
                });
            });
        });
