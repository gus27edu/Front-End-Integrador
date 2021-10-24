// Deberá contener la funcionalidad en Javascript:

// al momento de presionar el botón “Resumen”, deberá mostrar en la sección “Total a Pagar: $”, 
// el monto correspondiente a la cantidad de tickets a comprar con el descuento correspondiente 
// dependiendo la categoría seleccionada, existen 3 categorías, Estudiante, Trainee, Junior

function calculo(){

    var seleccion = document.getElementById("categoria");
    var valorSeleccionado=parseFloat(seleccion.options[seleccion.selectedIndex].value);
    var cantidad=document.getElementById("cantidad").value;
    var total=0;

    switch(valorSeleccionado){

        case 1:
            total= (200*cantidad) - ((200*cantidad)*80)/100
            break;
        case 2:
            total= (200*cantidad) - ((200*cantidad)*50)/100
            break;
        case 3:
            total= (200*cantidad) - ((200*cantidad)*15)/100
            break;
    }
    document.getElementById("total").value=total;

}

// let resumen=document.querySelector('.resumen');
// resumen.addEventListener('click', calculo)