var checkbox = document.querySelector('input[name=mode]');

checkbox.addEventListener('change', function () {
    if (this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'darktheme')
        saveCheckboxState()
        saveThemeState()
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'lighttheme')
        saveCheckboxState()
        saveThemeState()
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 1000)
}

// Função para salvar o estado caso o botão tenha sido pressionado ou não.
function saveCheckboxState() {
    var checkbox = document.getElementById('switch');
    localStorage.setItem('checkboxState', checkbox.checked);
}

// Função para salvar o thema selecionao pelo usuário.
function saveThemeState() {
    var theme = document.documentElement.getAttribute('data-theme')
    localStorage.setItem('themeState', theme)
}

// Carregar os dados salvos no localStorage do navegador.
window.onload = function() {
    var checkbox = document.getElementById('switch');
    var checkboxState = localStorage.getItem('checkboxState');
    checkbox.checked = checkboxState === 'true';

    var themeState = localStorage.getItem('themeState');
    document.documentElement.setAttribute('data-theme', themeState);
}
