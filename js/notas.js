/*$(document).ready(function() {
	$.getJSON("http://localhost:8081/alumnos/12345678W",function(listaNotas){
		$.each(listaNotas, function(index, nota){
			var notaHTML = "<div><p><strong>"+nota.acronimo+"</strong></p><p>Nota final: "+nota.nota+"</p></div>";
			$("#notas").append(notaHTML);
		})
	});
});*/

$(document).ready(function() {

    $.ajax({ 
        type: "GET", 
        url: "http://localhost:8081/alumnos/12345678W",
        dataType: "json",
        success: function(listaNotas) {
            //$.each(listaNotas, function(index, nota){
                var notaHTML = "<p>su puta madre</p>";
                $("#notas").append(notaHTML);
            //})
        }
    });
});


//var notaHTML = "<div><p><strong>"+nota.acronimo+"</strong></p><p>Nota final: "+nota.nota+"</p></div>";