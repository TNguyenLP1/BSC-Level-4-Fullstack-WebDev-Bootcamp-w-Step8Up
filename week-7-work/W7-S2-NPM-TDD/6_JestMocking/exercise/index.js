// index.js
// This script prompts the user for a GitHub username and then fetches
// their public repositories using the getUserRepos() function.

const readline = require("readline"); // Built-in Node module for reading user input from the terminal
const { getUserRepos } = require("./github"); // Import the function that fetches repos

//Create a readline interface for input/output
// - input: standard input (keyboard)
// - output: standard output (console)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Ask the user for their GitHub username
rl.question("Enter your GitHub username: ", async (username) => {
  try {
    //Basic validation: make sure user typed something
    if (!username.trim()) {
      console.log("Username cannot be empty.");
      rl.close(); // Always close the readline interface when done
      return;
    }

    //Inform the user we are fetching data
    console.log(`\nFetching repositories for "${username}"...\n`);

    //Call the async function that fetches repos from the GitHub API
    const repos = await getUserRepos(username);

    //Handle the case where the user has no repositories
    if (repos.length === 0) {
      console.log("No repositories found for this user.");
    } else {
      //Display the list of repositories
      console.log("Repositories found:");
      repos.forEach((repo, index) => {
        console.log(`${index + 1}. ${repo.name}`);
      });
    }
  } catch (error) {
    //Handle any errors (network issue, invalid username, etc.)
    console.error("Error:", error.message);
  } finally {
    //Always close the readline interface, even if an error occurs
    rl.close();
  }
});