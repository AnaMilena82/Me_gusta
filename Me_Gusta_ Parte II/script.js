
var spanNumLikes1 = document.querySelector ( "#countlike1" ); //para obtener el valor que tiene el id #countlike
var spanNumLikes2 = document.querySelector ( "#countlike2" );
var spanNumLikes3 = document.querySelector ( "#countlike3" );

var contadorElement1 = document.getElementById('countlike1');
var contadorElement2 = document.getElementById('countlike2');
var contadorElement3 = document.getElementById('countlike3');


function addlike(element) {
 if(element=== 1){
    numlikes1 = Number(spanNumLikes1.textContent); //convierte la cadena en numero
    numlikes1++;
    contadorElement1.innerText = numlikes1;
 }
 else if(element=== 2){
    numlikes2 = Number(spanNumLikes2.textContent); //convierte la cadena en numero
    numlikes2++;
    contadorElement2.innerText = numlikes2;
 }
 else if(element=== 3){
    numlikes3 = Number(spanNumLikes3.textContent); //convierte la cadena en numero
    numlikes3++;
    contadorElement3.innerText = numlikes3;
 }
      
}

