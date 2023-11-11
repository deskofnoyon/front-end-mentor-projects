const subscribeForm = document.getElementById("subscribe-form");
const emailInput = document.getElementById("email");
const card = document.querySelector("#card");
const cardSuccess = document.querySelector("#success-card");

// Initially hide the cardSuccess
cardSuccess.style.display = "none";

subscribeForm.addEventListener("submit", function (event) {

	event.preventDefault();
	// Validate the email address

	
	const emailValue = emailInput.value.trim();
	if (!isValidEmail(emailValue)) {
		alert("Please enter a valid email address");
		return;
	}

	card.style.display = "none";
	cardSuccess.style.display = "flex";
});


// Function to validate email address
function isValidEmail(email) {
	// Use a regular expression for basic email validation
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}