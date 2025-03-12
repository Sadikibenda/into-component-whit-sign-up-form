// Declare variables first
const form = document.querySelector("#signupForm");
const FirstnameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const inputs = [FirstnameInput,lastNameInput , emailInput, passwordInput];

// Function to validate input with custom error messages
function validateInput(input) {
    const errorMessage = input.nextElementSibling;
    const value = input.value.trim();

    if (!value) {
        if (input === FirstnameInput) {
            errorMessage.textContent = `${input.id} cannot be empty.`;
        } else if (input === lastNameInput) {
            errorMessage.textContent = "Last name cannot be empty.";}
        
        else if (input === emailInput) {
            errorMessage.textContent = "Email is required.";
        } else if (input === passwordInput) {
            errorMessage.textContent = "Password must not be blank.";
        }
        input.classList.add("invalid");
        errorMessage.style.visibility = "visible";
        return false;
    }

    if (input === emailInput && !value.includes("@")) {
        errorMessage.textContent = "Please enter a valid email address.";
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
