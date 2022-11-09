const projects = document.querySelector('body > main > section > div.projects-grid-card')

function getApiGitHub() {
  fetch('https://api.github.com/users/antonio-ramon/repos')
    .then(async res => {

      if(!res.ok) {
        throw new Error(res.status)
      }
      
      let names = [];
      let description = [];
      let lang = [];
      var data = await res.json()

      data.forEach(item => {
        names.push(item.name)
        description.push(item.description)

        let title = document.querySelector('a:nth-child(1) > div > header > strong')
        let descr = document.querySelector('a:nth-child(1) > div > p')
        
        title.innerHTML = names[0]
        descr.innerHTML = description[0]

      })
      console.log(names)
      console.log(description)

    }).catch(e => console.log(e))
}

getApiGitHub()