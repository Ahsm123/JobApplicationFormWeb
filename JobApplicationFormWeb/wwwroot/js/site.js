// Get form and elements
const form = document.getElementById("jobApplicationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("emailAddress");
const passwordInput = document.getElementById("userPassword");
const applicationText = document.getElementById("applicationText");

// Example: Validate name input (you can customize this as needed)
form.addEventListener("submit", function (event) {
    // Prevent default form submission
    event.preventDefault();

    // Simple validation for name
    if (nameInput.value.trim() === "") {
        alert("Name cannot be empty");
        return;
    }

    // Add additional validation or handling as needed
    if (passwordInput.value.length < 8) {
        alert("Password must be at least 8 characters long");
        return;
    }

    // Submit the form if all checks pass
    form.submit();
});