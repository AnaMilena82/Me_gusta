
var spanNumLikes = document.querySelector ( "#countlike" ); //para obtener el valor que tiene el id #countlike

var contadorElement = document.getElementById('countlike');

function addlike() {
    // para sumar los likes
    numlikes = Number(spanNumLikes.textContent); //convierte la cadena en numero
    numlikes++;
    contadorElement.innerText = numlikes;
}