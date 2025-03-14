// Declare variables first
const form = document.querySelector("#signupForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const inputs = [nameInput, emailInput, passwordInput];

// Function to validate input
function validateInput(input) {
    const errorMessage = input.nextElementSibling;
    const value = input.value.trim();

    if (!value) {
        errorMessage.textContent = "This field is required.";
        input.classList.add("invalid");
        errorMessage.style.visibility = "visible";
        return false;
    }

    input.classList.remove("invalid");
    errorMessage.style.visibility = "hidden";
    return true;
}

// Event listener for real-time validation
inputs.forEach(input => {
    input.addEventListener("input", () => validateInput(input));
});

// Form submission event
form.addEventListener("submit", (event) => {
    let isFormValid = true;

    inputs.forEach(input => {
        if (!validateInput(input)) {
            isFormValid = false;
        }
    });

    if (!isFormValid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

