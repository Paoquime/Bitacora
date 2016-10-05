window.addEventListener("load", main);
  var post = document.getElementById("primeraOpcion");
  var cita = document.getElementById("segundaOpcion");
  var meme = document.getElementById("terceraOpcion");
  var pastilla = document.getElementById("cuartaOpcion");

function main() {
  post.addEventListener("click", despliegue);
  cita.addEventListener("click", despliegue);
  meme.addEventListener("click", despliegue);
  pastilla.addEventListener("click", despliegue);
}

function despliegue (){
  cita.style.display = "none";
  meme.style.display = "none";
  pastilla.style.display = "none";
}