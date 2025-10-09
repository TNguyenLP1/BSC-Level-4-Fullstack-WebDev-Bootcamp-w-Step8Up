// TODO: Add 2 new items to the sidebar called "Register" and "Help".

var sideBarEl = document.querySelector(".sidebar ul");

// Create the Heading 2 and Paragraph elements
var newH2El = document.createElement("li");
newH2El.textContent = "Register";

    // var newH3El = document.createElement("li");
    // newH3El.textContent = "Help";

// append the new elements to the new div
sideBarEl.appendChild(newH2El);
    // sideBarEl.appendChild(newH3El);

// TODO: MEGA CHALLENGE: can you add the Help link between Reports and Settings?

var newH3El = document.createElement("li");
newH3El.textContent = "Help";

var reportsItem = sideBarEl.querySelector("li:nth-child(3)");
// Find item and where to insert

sideBarEl.insertBefore(newH3El, reportsItem.nextSibling);
// Insert