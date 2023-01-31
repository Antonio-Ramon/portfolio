// Pequeno atraso no loading da página para evitar a animação do Switch
// document.documentElement.removeAttribute ="hidden";
setTimeout(function () {
  document.documentElement.removeAttribute("hidden");
}, 150);

document.addEventListener("DOMContentLoaded", function () {
  // Carregar os dados salvos no localStorage do navegador.
  var checkbox = document.getElementById("switch");
  var checkboxState = localStorage.getItem("checkboxState");
  checkbox.checked = checkboxState === "true";

  var themeState = localStorage.getItem("class");
  document.documentElement.setAttribute("class", themeState);
});

// Função para mudar o tema
function toggleMode() {
  // documentElement refere-se a tag <html> no index.html
  const html = document.documentElement;
  html.classList.toggle("dark");
  saveCheckboxState();
  saveThemeState();
}

// Função para salvar o estado caso o botão tenha sido pressionado ou não.
function saveCheckboxState() {
  var checkbox = document.getElementById("switch");
  localStorage.setItem("checkboxState", checkbox.checked);
}

// Função para salvar o thema selecionao pelo usuário.
function saveThemeState() {
  var theme = document.documentElement.getAttribute("class");
  localStorage.setItem("class", theme);
}

// setTimeout(function () {
//   let html = document.getElementsByClassName("image-container");
//   html.removeClass = "image-container";
// }, 1000);

// Atraso no carregamento da página
