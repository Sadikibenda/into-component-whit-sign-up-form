function validateInput(input) {
    const errorMessage = input.nextElementSibling;
    
    if (input.value !== input.value.toLowerCase()) {
        input.classList.add("invalid");
        errorMessage.style.visibility = "visible";
    } else {
        input.classList.remove("invalid");
        errorMessage.style.visibility = "hidden";
    }
}

document.getElementById("signupForm").addEventListener("submit", function(event) {
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");

    if (firstName.classList.contains("invalid") || lastName.classList.contains("invalid")) {
        event.preventDefault(); // Prevent form submission if invalid
        alert("Please enter names in lowercase only.");
    }
});
