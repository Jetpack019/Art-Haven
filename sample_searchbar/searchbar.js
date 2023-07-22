var items = [
    { name: "Apple", description: "A fruit with a crisp texture and a sweet flavor.", link: "https://example.com/apple" },
    { name: "Banana", description: "A curved yellow fruit with a soft flesh.", link: "https://example.com/banana" },
    { name: "Orange", description: "A round citrus fruit with a juicy pulp.", link: "https://example.com/orange" },
    { name: "Strawberry", description: "A small red fruit with a sweet and tangy taste.", link: "https://example.com/strawberry" }
];

function searchItem() {
    var query = document.getElementById("searchInput").value;
    var searchResultsContainer = document.getElementById("searchResults");
    searchResultsContainer.innerHTML = ""; // Clear previous search results

    if (query) {
        var matchingItems = searchWithinPage(query);

        if (matchingItems.length > 0) {
            // Display the matching items on the page
            for (var i = 0; i < matchingItems.length; i++) {
                var searchResultItem = document.createElement("div");
                searchResultItem.className = "search-result-item";
                searchResultItem.innerHTML = "<h3>" + matchingItems[i].name + "</h3>" +
                                            "<p>" + matchingItems[i].description + "</p>";
                // Attach a click event listener to the container
                searchResultItem.addEventListener("click", function() {
                    window.location.href = matchingItems[i].link; // Navigate to the specified link
                });
                searchResultsContainer.appendChild(searchResultItem);
            }
        } else {
            var searchResultItem = document.createElement("div");
            searchResultItem.className = "search-result-item";
            searchResultItem.textContent = "No matching items found!";
            searchResultsContainer.appendChild(searchResultItem);
        }
    }
}

function searchWithinPage(query) {
    // Logic to search for the item within the page
    // Modify this function based on your specific requirements and page structure

    var matchingItems = [];

    // Perform the search by iterating over the items and checking if the query matches the name or description
    for (var i = 0; i < items.length; i++) {
        if (items[i].name.toLowerCase().includes(query.toLowerCase()) || items[i].description.toLowerCase().includes(query.toLowerCase())) {
            matchingItems.push(items[i]);
        }
    }

    return matchingItems; // Return matching items
}