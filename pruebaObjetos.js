window.addEventListener("load", function(){
  var texto = document.getElementById("primeraOpcion");
  var cita = document.getElementById("segundaOpcion");
  var meme = document.getElementById("terceraOpcion");
  var pastilla = document.getElementById("cuartaOpcion");
  var body = document.getElementsByTagName("body")[0];


var postArray = [texto, cita, meme, pastilla];

for (elemento of postArray){
    elemento.addEventListener("click", desplegar);
}

function desplegar() {
	var contenido = document.createElement("div");
    var textArea = document.createElement("textarea");
    var publiBtn = document.createElement("button");
    var close = document.createElement("button");

	contenido.classList.add("contenido");
    textArea.classList.add("textArea");
    publiBtn.classList.add("publiBtn");
    close.classList.add("close");

    publiBtn.textContent = "Publicar";
    close.textContent = "Cerrar";    

    body.insertBefore(contenido, body.children[2]);
    contenido.insertBefore(textArea, contenido.children[0]);
    contenido.insertBefore(publiBtn, contenido.children[1]);
    contenido.insertBefore(close, contenido.children[2]);

    close.addEventListener("click", function() {
      contenido.remove();
    });

    publiBtn.addEventListener("click", function() {
      var imprimir = document.createElement("div");
      var textImpre = document.createElement("div");

    textImpre.innerHTML = textArea.value;

    imprimir.classList.add("contenido");
    textImpre.classList.add("escrito");

    body.insertBefore(imprimir, body.children[3]);
    imprimir.insertBefore(textImpre, imprimir.children[0]);

    var fecha = new Date();
    var hora = fecha.getHours();
    var min = fecha.getMinutes();
    var almacenaHora = document.createElement("div");
    almacenaHora.innerText = hora + ":" + min;
    imprimir.insertBefore(almacenaHora, imprimir.children[1]);

    });
}

/*function Texto(desplegar) {
	this.desplegar = desplegar;

    };
};*/



});