// function loadRepos() {
//    const container = document.getElementById("res");
//    return fetch("https://api.github.com/users/testnakov/repos")
//    .then(response => {
//       return response.text();
//    })
//    .then(text => {
//       container.textContent = text;
//    })
//    .catch(error => {
//       console.log(error);
//    })

// }


async function loadRepos() {
   const container = document.getElementById("res");
   try {
      const result = (await fetch("https://api.github.com/users/testnakov/repos")).text();
      result.then(text => {
         container.textContent = text;
      });
   } catch (error) {
      console.log(error);
   }
}