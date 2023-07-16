function enterPassword() {
    var password = prompt("Enter Password:");
    if (password === "your_password") {
        initiateProcess();
    } else {
        selfDestruct();
    }
}

function initiateProcess() {
    var confirmation = prompt("This process is irreversible. Do you want to continue? (Yes/No)");
    if (confirmation.toLowerCase() === "yes") {
        displayMessage("Process initiated...");
    } else {
        selfDestruct();
    }
}

function selfDestruct() {
    displayMessage("Self-destruct initiated...");
}

function displayMessage(message) {
    var terminal = document.querySelector(".terminal");
    var output = document.createElement("div");
    output.textContent = message;
    output.style.color = "green";
    terminal.appendChild(output);
}

enterPassword();
