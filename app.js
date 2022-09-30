


$(document).ready(function(){
   
  /* Aqui va todo el codigo ES LA POLLA, REPASAR*/ 
   
   $('h1').html('texto reemplazado a traves de una etiqueta')
   $('.display-4').html ('texto reemplazado desde clase')
  
   /* ahora vamos a seleccionar mas elementos dentro de la misma clase */
   $('.container h1').html('cambio de texto');
  /* Asi accedo todos los H1 dentro de una clase, con un espcio. */




  /*  OJO CON FIRST Y LAST */
  $('.container h1:first').html('cambio de texto');
  $('.container h1:last').html('cambio de texto');
 

/* ADD, REMOVE,'#id'  */


/* aplicar rojo al texto, es decir, aplicarle una nueva clase encima */
   


$('.grande').addClass('text-danger');

$('.grande').removeClass('text-danger');

/* Esto es increible */

 $('.grande').append('<h1>he añadido un H1 con appen!</h1>');

$('.grande').prepend('<h1>He añadido un H1 con prepend!! </h1>');

 



/* Añadir un estilo de CSS! */

 $('.grande .mediano').css('background-color', 'red');

/* llego a la clase mediano solo con un espacio y le pongo un estilo.

Ahora debajo voy a meterle varios estilos a una clase que esta dentro de otras 2 clases! A la pequeña:*/


$('.grande .mediano .pequena').css({color: 'white', background : 'green', padding:'20px' });

 /* Esta lo elimina del DOM! Está HIDE hace: DISPLAY NONE */
/* 
$(selector).remove();
$(selector).hide();

att
 */









});