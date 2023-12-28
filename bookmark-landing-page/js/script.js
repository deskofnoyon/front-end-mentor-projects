document.addEventListener("DOMContentLoaded", function () {
	const accordionItems = document.querySelectorAll(".accordion-item");

	accordionItems.forEach((item) => {
		const header = item.querySelector(".accordion-header");

		header.addEventListener("click", () => {
			const content = item.querySelector(".accordion-content");
			const isOpen = content.style.display === "block";

			// Close all accordions
			accordionItems.forEach((otherItem) => {
				const otherContent = otherItem.querySelector(".accordion-content");
				otherContent.style.display = "none";
			});

			// Toggle the clicked accordion
			content.style.display = isOpen ? "none" : "block";
			item.style.border = isOpen ? "1px solid #ddd" : "1px solid #5368df";
		});
	});
});
