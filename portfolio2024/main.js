let menuVisible = false;
// Function to toggle the visibility of the menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  //hidden menu
  document.getElementById("nav").classList = "";
  menuVisible = false;
}
// Function to keyframes scrolling

function efectoHabilidades() {
  let skills = document.getElementById("skills");
  let distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("htmlcss");
    habilidades[2].classList.add("make");
    habilidades[3].classList.add("wordpress");
    habilidades[4].classList.add("drupal");
    habilidades[5].classList.add("comunicacion");
    habilidades[6].classList.add("trabajo");
    habilidades[7].classList.add("creatividad");
    habilidades[8].classList.add("dedicacion");
    habilidades[9].classList.add("asertividad");
  }
}

window.onscroll = function () {
  efectoHabilidades();
};
