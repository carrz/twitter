
/*Deshabilitador del botón en reposo*/
document.getElementById('btn').disabled = true;
/*Función que cuenta los carácteres y muestra los restantes*/
function charCount() {
	var text = document.getElementById("comment").value;
	var numberChar = text.length;
	var maxLength = 140;
	var spanCounter = document.getElementById('counter')
	var howMuch = maxLength - numberChar;
	
	if(howMuch<0){
		counter.style.color = 'black';
        document.getElementById('btn').disabled = true;
	}
	else if(howMuch>=0 && howMuch<10){
        counter.style.color = 'red';
        document.getElementById('btn').disabled = false;
    }
    else{
    	document.getElementById('btn').disabled = false;
    }
	spanCounter.innerHTML = howMuch;
}
/*
	spanCounter.addEventListener('click', function(){
			spanCounter.innerHTML = maxLength;
	})*/	

/*Función que guarda los comentarios y los imprime en la página*/
function add() {
	// Para guardar el comentario, saco el valor de este elemento
	var comments = document.getElementById("comment").value; // Agarra al comentario
	document.getElementById("comment").value = ""; // Limpia la caja de comentarios
	charCount();
	var newComments = document.createElement('div'); //Creamos el contenedor para los comentarios
	var cont = document.getElementsByClassName('cont')[0]; //Obtenemos el ID del contenedor
	
	//Creo un párrafo (papá)
		var paragraph = document.createElement('p');
		paragraph.classList.add('color');
	//Creamos un nodo de texto (hijo)
		var nodoText = document.createTextNode(comments);
		paragraph.appendChild(nodoText);

	//Le asignamos los hijos al contenedor
		newComments.appendChild(paragraph);
		cont.appendChild(newComments);
	
}

/*Textarea autoajustable*/

var textarea = document.querySelector('textarea');
textarea.addEventListener('keydown', autosize);
             
function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}