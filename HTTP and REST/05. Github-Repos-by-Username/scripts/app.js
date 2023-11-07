async function loadRepos() {
	const reposUsername = document.querySelector("#username").value;
	const listOfRepos = document.querySelector("#repos");
	try {
		const response = await fetch(`https://api.github.com/users/${reposUsername}/repos`);
		
		if (response.ok === false) {
			throw new Error(`${response.status} ${response.statusText}`);
		}
		
		const data = await response.json();

		listOfRepos.innerHTML = "";
		for (let repo of data) {
			listOfRepos.innerHTML += `<li>
			<a href="${repo.html_url}" target="_blank">${repo.full_name}</a>
			</li>`;
		}

	} catch (error) {
		listOfRepos.innerHTML = `${error.message}`;
	}

}