fetch("repos.json")
  .then((res) => res.json())
  .then((data) => {
    let output = "";
    data.forEach(function (repo) {
      output += `
        <div class="repo-card">
          <div class="card-content">
            <img src="${repo.banner}" alt="Project Image" class="blog-img" loading="lazy">
          </div>
          <div class="card-text">
            <h4 class="card-title">${repo.name}</h4>
            <p class="card-description">${repo.description}</p>
          </div>
        </div>
      `;
    });
    document.getElementById("repo-card").innerHTML = output;
  });
