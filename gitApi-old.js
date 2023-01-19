function getApiGitHub() {
  fetch("https://api.github.com/users/antonio-ramon/repos")
    .then((response) => response.json())
    .then((data) => {
      const projects = document.querySelector("div.projects-grid-card");

      // Laço que percorrerá todos os repositórios públicos do usuário
      for (const item of data) {
        div.appendChild(header);
        header.appendChild(strong);

        strong.textContent = getRepoInfo(item).title;

        const link = document.createElement("a");
        link.setAttribute("href", `${url}`);
        link.setAttribute("title", `Abrir repositório de ${title}`);
        link.setAttribute("target", "_blank");

        const div = document.createElement("div");

        const header = document.createElement("header");
        const svgFolder = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        const folderIconSvg = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );
        const strong = document.createElement("strong");
        const p = document.createElement("p");

        const footer = document.createElement("footer");

        const divFooterInfo = document.createElement("div");
        const divStar = document.createElement("div");
        const divFooterLang = document.createElement("div");
        const divLang = document.createElement("div");
        const langSpan = document.createElement("span");

        //criação dos SVGs
        const svgStar = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        const starIconSvg = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );
        const starSpan = document.createElement("span");
        const divBranch = document.createElement("div");
        const svgBranch = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        const branchIcon1 = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );
        const branchIcon2 = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );
        const branchIcon3 = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );
        const branchIcon4 = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );
        const branchSpan = document.createElement("span");

        svgFolder.setAttribute("width", "20");
        svgFolder.setAttribute("height", "18");
        svgFolder.setAttribute("viewbox", "0 0 20 18");
        svgFolder.setAttribute("fill", "none");
        svgFolder.setAttribute("xmlns", "http://www.w3.org/2000/svg");

        folderIconSvg.setAttribute(
          "d",
          "M18.3333 14.8333C18.3333 15.2754 18.1577 15.6993 17.8452 16.0118C17.5326 16.3244 17.1087 16.5 16.6667 16.5H3.33334C2.89131 16.5 2.46739 16.3244 2.15483 16.0118C1.84227 15.6993 1.66667 15.2754 1.66667 14.8333V3.16667C1.66667 2.72464 1.84227 2.30072 2.15483 1.98816C2.46739 1.67559 2.89131 1.5 3.33334 1.5H7.50001L9.16667 4H16.6667C17.1087 4 17.5326 4.17559 17.8452 4.48816C18.1577 4.80072 18.3333 5.22464 18.3333 5.66667V14.8333Z"
        );
        folderIconSvg.setAttribute("stroke-width", "2");
        folderIconSvg.setAttribute("stroke-linecap", "round");
        folderIconSvg.setAttribute("stroke-linejoin", "2");

        svgStar.setAttribute("width", "20");
        svgStar.setAttribute("height", "20");
        svgStar.setAttribute("viewbox", "0 0 20 20");
        svgStar.setAttribute("fill", "none");
        svgStar.setAttribute("xmlns", "http://www.w3.org/2000/svg");

        starIconSvg.setAttribute(
          "d",
          "M10 1.66667L12.575 6.88334L18.3333 7.725L14.1667 11.7833L15.15 17.5167L10 14.8083L4.85001 17.5167L5.83334 11.7833L1.66667 7.725L7.42501 6.88334L10 1.66667Z"
        );
        starIconSvg.setAttribute("stroke-width", "2");
        starIconSvg.setAttribute("stroke-linecap", "round");
        starIconSvg.setAttribute("stroke-linejoin", "2");

        svgBranch.setAttribute("width", "20");
        svgBranch.setAttribute("height", "20");
        svgBranch.setAttribute("viewbox", "0 0 20 20");
        svgBranch.setAttribute("fill", "none");
        svgBranch.setAttribute("xmlns", "http://www.w3.org/2000/svg");

        branchIcon1.setAttribute("d", "M5 2.5V12.5");
        branchIcon1.setAttribute("stroke-width", "2");
        branchIcon1.setAttribute("stroke-linecap", "round");
        branchIcon1.setAttribute("stroke-linejoin", "round");

        branchIcon2.setAttribute(
          "d",
          "M15 7.5C16.3807 7.5 17.5 6.38071 17.5 5C17.5 3.61929 16.3807 2.5 15 2.5C13.6193 2.5 12.5 3.61929 12.5 5C12.5 6.38071 13.6193 7.5 15 7.5Z"
        );
        branchIcon2.setAttribute("stroke-width", "2");
        branchIcon2.setAttribute("stroke-linecap", "round");
        branchIcon2.setAttribute("stroke-linejoin", "round");

        branchIcon3.setAttribute(
          "d",
          "M5 17.5C6.38071 17.5 7.5 16.3807 7.5 15C7.5 13.6193 6.38071 12.5 5 12.5C3.61929 12.5 2.5 13.6193 2.5 15C2.5 16.3807 3.61929 17.5 5 17.5Z"
        );
        branchIcon3.setAttribute("stroke-width", "2");
        branchIcon3.setAttribute("stroke-linecap", "round");
        branchIcon3.setAttribute("stroke-linejoin", "round");

        branchIcon4.setAttribute(
          "d",
          "M15 7.5C15 9.48912 14.2098 11.3968 12.8033 12.8033C11.3968 14.2098 9.48912 15 7.5 15"
        );
        branchIcon4.setAttribute("stroke-width", "2");
        branchIcon4.setAttribute("stroke-linecap", "round");
        branchIcon4.setAttribute("stroke-linejoin", "round");

        strong.textContent = title;
        p.textContent = description;
        starSpan.textContent = starCount;
        branchSpan.textContent = forkCount;
        langSpan.textContent = lang;

        header.appendChild(svgFolder);
        header.appendChild(strong);
        link.appendChild(div);

        divFooterInfo.setAttribute("class", "info");
        divFooterLang.setAttribute("class", "lang");
        divLang.setAttribute("class", `dot ${lang.toLowerCase()}`);

        svgFolder.appendChild(folderIconSvg);
        svgStar.appendChild(starIconSvg);
        svgBranch.appendChild(branchIcon1);
        svgBranch.appendChild(branchIcon2);
        svgBranch.appendChild(branchIcon3);
        svgBranch.appendChild(branchIcon4);

        div.appendChild(header);
        div.appendChild(p);
        div.appendChild(footer);

        footer.appendChild(divFooterInfo);
        divFooterInfo.appendChild(divStar);
        divFooterInfo.appendChild(divBranch);
        divStar.appendChild(svgStar);
        divStar.appendChild(starSpan);
        divBranch.appendChild(svgBranch);
        divBranch.appendChild(branchSpan);

        footer.appendChild(divFooterLang);
        divFooterLang.appendChild(divLang);
        divFooterLang.appendChild(langSpan);

        projects.appendChild(link);
      }
    });
}

getApiGitHub();
