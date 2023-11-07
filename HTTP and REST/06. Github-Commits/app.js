async function loadCommits() {
    const usernameRepo = document.querySelector("#username").value;
    const repositories = document.querySelector("#repo").value;
    const commitsList = document.querySelector("#commits");

    try {
        const response = await fetch(`https://api.github.com/repos/${usernameRepo}/${repositories}/commits`);

        if (response.ok === false) {
            throw new Error(`${response.status} ${response.statusText}`);
        }

        const JSON_Data = await response.json();

        for (const {commit} of JSON_Data) {
            commitsList.innerHTML += `<li>${commit.author.name}: ${commit.message}</li>`;   
        }

    } catch (error) {
        commitsList.innerHTML += `<li>
        Error: ${error.message} (Not Found)
        </li>`
    }
}