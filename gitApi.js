function getApiGitHub() {
  fetch("https://api.github.com/users/antonio-ramon/repos")
    .then((response) => response.json())
    .then((data) => {
      const projects = document.querySelector("div.projects-grid-card");

      //Pegando as informações da API, que serão úteis pro projeto
      const getRepoInfo = (item) => {
        return {
          title: item.name,
          description: item.description,
          starCount: item.stargazers_count,
          forkCount: item.forks_count,
          lang: item.language,
          url: item.html_url,
        };
      };

      // Função para criação de links
      const createLink = (url, title) => {
        const link = document.createElement("a");
        link.setAttribute("href", `${url.html_url}`);
        link.setAttribute("title", `Abrir repositório de ${title}`);
        link.setAttribute("target", "_blank");
        return link;
      };

      // Laço que percorrerá todos os repositórios públicos do usuário
      for (const item of data) {
        const link = createLink(
          item,
          `${getRepoInfo(item).url}`,
          `${getRepoInfo(item).title}`
        );

        if(getRepoInfo(item).lang != null) {
          // Cards/links dos projetos
          link.innerHTML = `
            <div>
              <header>
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.3333 14.8333C18.3333 15.2754 18.1577 15.6993 17.8452 16.0118C17.5326 16.3244 17.1087 16.5 16.6667 16.5H3.33334C2.89131 16.5 2.46739 16.3244 2.15483 16.0118C1.84227 15.6993 1.66667 15.2754 1.66667 14.8333V3.16667C1.66667 2.72464 1.84227 2.30072 2.15483 1.98816C2.46739 1.67559 2.89131 1.5 3.33334 1.5H7.50001L9.16667 4H16.6667C17.1087 4 17.5326 4.17559 17.8452 4.48816C18.1577 4.80072 18.3333 5.22464 18.3333 5.66667V14.8333Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
      
                <strong>${getRepoInfo(item).title}</strong>
              </header>
            
              <p>${getRepoInfo(item).description}</p>
      
              <footer>
                <div class="info">
                  <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 1.66667L12.575 6.88334L18.3333 7.725L14.1667 11.7833L15.15 17.5167L10 14.8083L4.85001 17.5167L5.83334 11.7833L1.66667 7.725L7.42501 6.88334L10 1.66667Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
      
                    <span>${getRepoInfo(item).starCount}</span>
                  </div>
      
                  <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 2.5V12.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M15 7.5C16.3807 7.5 17.5 6.38071 17.5 5C17.5 3.61929 16.3807 2.5 15 2.5C13.6193 2.5 12.5 3.61929 12.5 5C12.5 6.38071 13.6193 7.5 15 7.5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M5 17.5C6.38071 17.5 7.5 16.3807 7.5 15C7.5 13.6193 6.38071 12.5 5 12.5C3.61929 12.5 2.5 13.6193 2.5 15C2.5 16.3807 3.61929 17.5 5 17.5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M15 7.5C15 9.48912 14.2098 11.3968 12.8033 12.8033C11.3968 14.2098 9.48912 15 7.5 15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
      
                    <span>${getRepoInfo(item).forkCount}</span>
                  </div>
                </div>
      
                <div class="lang">
                  <div class="dot ${getRepoInfo(item).lang ? getRepoInfo(item).lang.toLowerCase() : ""}"></div>
                  <span>${getRepoInfo(item).lang}</span>
                </div>
              </footer>
            </div>`;
  
          projects.appendChild(link);
        } else {
          
        }
      }
    });
}

getApiGitHub();
