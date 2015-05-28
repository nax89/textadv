var data = [];

data[0] = {	
	"id" : 1,
	"text" : 
		"Introduccion de la historia. hasta la siguiente pagina no pasara nada.",
	"actions" :
		{
			"ir a": "pagina",
			"goto_id": 1
		}	
};

data[1] = {	
	"id" : 2,
	"text" : 
		"Estas en la segunda pagina. A un salto del final.",
	"actions" :
		{
			"hacer": "salto",
			"goto_id": 2
		}	
};

data[2] = {	
	"id" : 3,
	"text" : 
		"Fin de la historia!",
	"actions" :
		{
			"ir a": "pagina",
			"goto_id": 2
		}	
};

console.log(data);

function mostrarTexto(){
//	alert(data[0].text);
	$("body").append("<p>"+data[0].text+"</p>");

//	$("p").html("<p>hola</p>");
}

$(document).ready(function(){
	mostrarTexto();
});

