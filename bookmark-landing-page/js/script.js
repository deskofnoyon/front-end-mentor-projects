// mobile menu
const menuOpenButton = document.getElementById("menu-open");
const menuCloseButton = document.getElementById("menu-close");
const mobileMenu = document.getElementById("mobile-menu");

menuOpenButton.addEventListener("click", () => {
	mobileMenu.style.display = "flex";
});

menuCloseButton.addEventListener("click", () => {
	mobileMenu.style.display = "none";
});

// features section
document.addEventListener("DOMContentLoaded", function () {
	const featureTabs = document.querySelectorAll(".feature-tabs a");
	const featureContents = document.querySelectorAll(".feature-content-parent");

	featureTabs[0].classList.add("active");

	featureContents.forEach((content, index) => {
		if (index !== 0) {
			content.style.display = "none";
		}
	});

	featureTabs.forEach((tab, index) => {
		tab.addEventListener("click", function (event) {
			event.preventDefault();

			featureTabs.forEach((t) => {
				t.classList.remove("active");
				t.style.borderBottom = "none";
			});

			tab.classList.add("active");
			tab.style.borderBottom = "2px solid #fa5757";

			featureContents.forEach((content) => {
				content.style.display = "none";
			});

			featureContents[index].style.display = "flex";
		});
	});
});

// feaquent ask question section
document.addEventListener("DOMContentLoaded", function () {
	const accordionItems = document.querySelectorAll(".accordion-item");

	accordionItems.forEach((item, index) => {
		const header = item.querySelector(".accordion-header");
		const chevronIcon = header.querySelector("i");

		header.addEventListener("click", () => {
			const content = item.querySelector(".accordion-content");
			const isOpen = content.style.display === "block";

			// Close all accordions
			accordionItems.forEach((otherItem) => {
				const otherContent = otherItem.querySelector(".accordion-content");
				otherContent.style.display = "none";
				const otherIcon = otherItem.querySelector(".accordion-header i");
				otherIcon.classList.remove("bx-chevron-up");
				otherIcon.classList.add("bx-chevron-down");
			});

			// Toggle the clicked accordion
			content.style.display = isOpen ? "none" : "block";
			item.style.border = isOpen ? "1px solid #ddd" : "1px solid #5368df";

			// Toggle the chevron icon
			if (isOpen) {
				chevronIcon.classList.remove("bx-chevron-up");
				chevronIcon.classList.add("bx-chevron-down");
			} else {
				chevronIcon.classList.remove("bx-chevron-down");
				chevronIcon.classList.add("bx-chevron-up");
			}
		});

		// Simulate a click on the first item to open it by default
		if (index === 0) {
			header.click();
		}
	});
});

// contact section email validation
document.addEventListener("DOMContentLoaded", function () {
	const emailForm = document.getElementById("emailForm");
	const emailInput = document.getElementById("email");
	const emailError = document.getElementById("emailError");
	const emailSuccess = document.getElementById("emailSuccess");
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	emailError.style.display = "none";
	emailSuccess.style.display = "none";

	emailForm.addEventListener("submit", (event) => {
		event.preventDefault();
		const emailValue = emailInput.value.trim();

		if (!emailValue) {
			displayError("Please provide an email address");
		} else if (!emailRegex.test(emailValue)) {
			displayError("Please provide a valid email address");
		} else {
			clearError();
			displaySuccess("Form submitted successfully!");
			console.log("Form submitted with a valid email address:", {
				email: emailValue,
			});
			emailInput.value = "";
		}
	});

	function displayError(message) {
		emailError.style.display = "block";
		emailInput.style.border = "1px solid #fa5757";
		emailError.innerText = message;
	}

	function displaySuccess(message) {
		emailSuccess.style.display = "block";
		emailSuccess.innerText = message;

		// Hide success message after 3 seconds (adjust the time as needed)
		setTimeout(() => {
			clearSuccess();
		}, 2000);
	}

	function clearSuccess() {
		emailSuccess.style.display = "none";
		emailSuccess.innerText = "";
	}

	function clearError() {
		emailError.style.display = "none";
		emailInput.style.border = ""; // Reset border to default
		emailError.innerText = "";
	}
});
