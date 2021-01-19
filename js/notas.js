$(document).ready(function() {

    $.ajax({ 
        type: "GET",
        url: "http://localhost:8081/alumnos/12345678W",
        headers: {
            Accept: "application/json",
        },
        dataType: "json",
        success: function(listaNotas) {
            $.each(listaNotas, function(index, nota){
                console.log(listaNotas);
                var notaHTML = "<div><p><strong>"+nota.acronimo+"</strong></p><p>Nota final: "+nota.nota+"</p></div>";
                $("#notas").append(notaHTML);
            })
        },
        error: (jqXhr, textStatus, errorMessage)=>{
            console.error(errorMessage);
            console.error(jqXhr);
            console.error(textStatus);
            }
    });
});