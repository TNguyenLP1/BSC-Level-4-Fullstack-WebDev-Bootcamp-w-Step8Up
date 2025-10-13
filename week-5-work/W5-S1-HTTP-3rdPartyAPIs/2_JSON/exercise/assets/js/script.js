document.getElementById("fetchRepos").addEventListener("click", onfetchRepos);

function onfetchRepos() {
  const username = document.getElementById("username").value;

  if (username) {
    // GitHub API endpoint for fetching user repositories
    const url = `https://api.github.com/users/${username}/repos`;

    // Make a GET request to the GitHub API
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("GitHub user not found");
        }
        return response.json();
      })
      .then((data) => {
        renderRepos(data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  } else {
    console.log("Please enter a GitHub username.");
  }
}

const renderRepos = (repos) => {
  repos.forEach((repo) => {
      
    // Log the full name of the repository
    console.log(`Repository: ${repo.full_name}`);

    // Log whether the repository is private or public
    const visibility = repo.private ? 'Private' : 'Public';
    console.log(`Visibility: ${visibility}`);

    // Log the Avatar URL and login of the owner
    const owner = repo.owner;
    console.log(`Owner Login: ${owner.login}`);
    console.log(`Owner Avatar URL: ${owner.avatar_url}`);
    
  });

};
