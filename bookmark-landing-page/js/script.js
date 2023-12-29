document.addEventListener("DOMContentLoaded", function () {
	const accordionItems = document.querySelectorAll(".accordion-item");

	accordionItems.forEach((item) => {
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
	});
});
