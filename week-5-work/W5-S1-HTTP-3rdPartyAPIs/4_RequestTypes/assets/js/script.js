// Function to update the response display area
function updateResponseDisplay(content) {
    const responseOutput = document.getElementById('response-output');
    responseOutput.textContent = content; // Display formatted content
}

// Fetch request using the Fetch API
function sendFetchRequest() {
    const username = document.getElementById("username").value;
    
    if (username) {
        const url = `https://api.github.com/users/${username}/repos`;

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("GitHub user not found or has no public repositories");
                }
                return response.json();
            })
            .then((data) => {
                renderRepos(data);
            })
            .catch((error) => {
                console.error("Error:", error.message);
                updateResponseDisplay("Error: " + error.message);
            });
    } else {
        updateResponseDisplay("Please enter a GitHub username.");
    }
}

// Axios request to fetch repositories
function sendAxiosRequest() {
    const username = document.getElementById("username").value;

    if (username) {
        const url = `https://api.github.com/users/${username}/repos`;

        // Using axios to get data
        axios.get(url)
            .then((response) => {
                renderRepos(response.data);
            })
            .catch((error) => {
                console.error("Axios error:", error.message);
                updateResponseDisplay("Error: " + error.message);
            });
    } else {
        updateResponseDisplay("Please enter a GitHub username.");
    }
}

// jQuery AJAX request to fetch repositories
function sendAjaXRequest() {
    const username = document.getElementById("username").value;

    if (username) {
        const url = `https://api.github.com/users/${username}/repos`;

        // jQuery AJAX request
        $.ajax({
            url: url,
            method: "GET",
            success: function (data) {
                renderRepos(data);
            },
            error: function (error) {
                console.error("AJAX error:", error);
                updateResponseDisplay("Error: " + error.statusText);
            }
        });
    } else {
        updateResponseDisplay("Please enter a GitHub username.");
    }
}

// XMLHttpRequest to fetch repositories
function sendXHRRequest() {
    const username = document.getElementById("username").value;

    if (username) {
        const url = `https://api.github.com/users/${username}/repos`;

        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                renderRepos(data);
            } else {
                console.error("XHR error:", xhr.status);
                updateResponseDisplay("Error: " + xhr.statusText);
            }
        };
        xhr.send();
    } else {
        updateResponseDisplay("Please enter a GitHub username.");
    }
}

// Render relevant repo information (4 parameters of interest)
const renderRepos = (repos) => {
    const responseOutput = document.getElementById('response-output');
    responseOutput.textContent = ''; // Clear any previous results

    if (repos.length === 0) {
        updateResponseDisplay("No repositories found for this user.");
        return;
    }

    repos.forEach((repo) => {
        // Prepare relevant data (4 parameters of interest)
        const repoData = `
            Repository: ${repo.full_name}
            Visibility: ${repo.private ? 'Private' : 'Public'}
            Owner: ${repo.owner.login}
            Avatar URL: ${repo.owner.avatar_url}
        `;
        responseOutput.textContent += repoData + "\n\n"; // Add each repo's info with line breaks
    });
};

// Attach event listeners to buttons
document.getElementById("fetch").addEventListener("click", sendFetchRequest);
document.getElementById("axios").addEventListener("click", sendAxiosRequest);
document.getElementById("xhr").addEventListener("click", sendXHRRequest);
document.getElementById("ajax").addEventListener("click", sendAjaXRequest);