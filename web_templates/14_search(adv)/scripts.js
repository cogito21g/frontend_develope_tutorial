document.addEventListener("DOMContentLoaded", function() {
    const nameFilter = document.getElementById("nameFilter");
    const categoryFilter = document.getElementById("categoryFilter");
    const minPriceFilter = document.getElementById("minPriceFilter");
    const maxPriceFilter = document.getElementById("maxPriceFilter");
    const filterButton = document.getElementById("filterButton");
    const itemList = document.getElementById("itemList");
    const items = itemList.getElementsByTagName("li");

    filterButton.addEventListener("click", function() {
        const nameValue = nameFilter.value.toLowerCase();
        const categoryValue = categoryFilter.value.toLowerCase();
        const minPriceValue = parseFloat(minPriceFilter.value);
        const maxPriceValue = parseFloat(maxPriceFilter.value);

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const itemName = item.getAttribute("data-name").toLowerCase();
            const itemCategory = item.getAttribute("data-category").toLowerCase();
            const itemPrice = parseFloat(item.getAttribute("data-price"));

            let nameMatch = !nameValue || itemName.includes(nameValue);
            let categoryMatch = !categoryValue || itemCategory.includes(categoryValue);
            let minPriceMatch = isNaN(minPriceValue) || itemPrice >= minPriceValue;
            let maxPriceMatch = isNaN(maxPriceValue) || itemPrice <= maxPriceValue;

            if (nameMatch && categoryMatch && minPriceMatch && maxPriceMatch) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        }
    });
});
