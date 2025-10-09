// 1. use document.getElementById to select the searchTerm Button
var searchTerm = document.getElementById("searchTerm");

// 2. use document.getElementById to select the searchButton Button
var searchButton = document.getElementById("searchButton");

// 3. add an event listener to the searchButton that calls the search function when clicked
searchButton.addEventListener("click", onClickSearhButton);

function onClickSearhButton() {
    // 4. use the value property of the searchInput to get the search term
    var searchTermValue = searchTerm.value; // Get the value from the input field
    
    if (searchTermValue.trim() === "") {
        return; 
        // Don't proceed if the search term is empty
    }

    // 5. select the searches div using document.getElementById
    var searchesList = document.getElementById("searches");

    // 6. create a new li element using document.createElement
    var newSearchItem = document.createElement("li");

    // 7. set the innerHTML of the new li element to the search term
    newSearchItem.innerHTML = searchTermValue; 
    // Assign the search term as the content

    // 8. append the new li element to the searches div (actually to the <ul> element)
    searchesList.appendChild(newSearchItem);

    // Optionally, clear the input field after adding the search term
    searchTerm.value = ""; 
    // Clear the input field
}