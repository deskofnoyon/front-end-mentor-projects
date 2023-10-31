const listParent = document.querySelector("#card-summary-list-parent");

const fetchData = async () => {
    const response = await fetch("./data.json");
    const data = await response.json();
    return data;
}

const createListItems = (data) => {
    data.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <div class='list-icon-category'>
                <img src="${item.icon}" alt="${item.category}" class="icon">
                <div class="category">${item.category}</div>
            </div>
            <div class="score">
                <span class='get-mark'>${item.score} / </span><span class="full-mark"> 100 </span>
            </div>
        `;
        // Apply different background classes in a cyclic manner
        const backgroundColorClasses = [
            "list-item-1",
            "list-item-2",
            "list-item-3",
            "list-item-4"
        ];
        const backgroundClass = backgroundColorClasses[index % backgroundColorClasses.length];
        listItem.classList.add(backgroundClass);
        listParent.appendChild(listItem);
    });
}

const loadDataAndCreateListItems = async () => {
    try {
        const data = await fetchData();
        createListItems(data);
    } catch (error) {
        console.error("Error loading data:", error);
    }
}

// Call the function to load the data and create list items
loadDataAndCreateListItems();
