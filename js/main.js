//asigno cada id del html a una variable
window.addEventListener("load", function(){
  var texto = document.getElementById("primeraOpcion");
  var cita = document.getElementById("segundaOpcion");
  var meme = document.getElementById("terceraOpcion");
  var pastilla = document.getElementById("cuartaOpcion");
  var body = document.getElementsByTagName("body")[0];

//cuando haga click en texto se ejecuta la función desplegar
texto.addEventListener("click", function() {
    desplegar();
  });

//creo los elementos que van a imprimirse en mi cajita-contenido
function desplegar() {
    var contenido = document.createElement("div");
    var title = document.createElement("input");
    var textArea = document.createElement("textarea");
    var publiBtn = document.createElement("button");
    var close = document.createElement("button");
//les asigno un clase para poder modificarlos en el css
    contenido.classList.add("contenido");
    title.classList.add("title");
    textArea.classList.add("textArea");
    publiBtn.classList.add("publiBtn");
    close.classList.add("close");
//agrego el texto a mis botones
    publiBtn.textContent = "Publicar";
    close.textContent = "Cerrar";
//les asigno la posición que van a tener
    body.insertBefore(contenido, body.children[2]);
    contenido.insertBefore(title, contenido.children[0]);
    contenido.insertBefore(textArea, contenido.children[1]);
    contenido.insertBefore(publiBtn, contenido.children[2]);
    contenido.insertBefore(close, contenido.children[3]);
//a mi boton close le asigno el evento addEventListener y le agrego el metodo
//remove para que desaparezca en caso el usuario cambie de opinión.
    close.addEventListener("click", function() {
      contenido.remove();
    });
//a mi boton publiBtn le asigno el evento addEventListener, 
//creo tres div que contendran el valor que ingrese en el titulo y textarea 
    publiBtn.addEventListener("click", function() {
      var imprimir = document.createElement("div");
      var titleImpre = document.createElement("div");
      var textImpre = document.createElement("div");
//le asigno el valor ingresado por el usuario a mi div de titleImpre y  textImpre respectivamente
    titleImpre.innerHTML = title.value;
    textImpre.innerHTML = textArea.value;
//les asigno un clase para poder modificarlos en el css
    imprimir.classList.add("contenido");
    titleImpre.classList.add("titulo");
    textImpre.classList.add("escrito");
//les asigno la posición que van a tener
    body.insertBefore(imprimir, body.children[3]);
    imprimir.insertBefore(titleImpre, imprimir.children[0]);
    imprimir.insertBefore(textImpre, imprimir.children[1]);
//agrego las variables que contendran la hora de la publicación y le coloco la posición en la que va a estar
    var fecha = new Date();
    var hora = fecha.getHours();
    var min = fecha.getMinutes();
    var almacenaHora = document.createElement("div");
    almacenaHora.innerText = hora + ":" + min;
    imprimir.insertBefore(almacenaHora, imprimir.children[2]); 

    });
  }

}); 




