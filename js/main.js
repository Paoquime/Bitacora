window.addEventListener("load", main);

function main() {
  var post = document.getElementById("primeraOpcion");
  post.addEventListener("click", addPost);
}

function addPost (e){
	e.preventDefault();
	alert("hice click");
}

