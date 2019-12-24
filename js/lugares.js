lugaresModulo = (function () {
  var servicioLugares // Servicio para obtener lugares cercanos e información de lugares(como fotos, puntuación del lugar,etc).

    // Completa las direcciones ingresadas por el usuario a y establece los límites
    // con un círculo cuyo radio es de 20000 metros.
  function autocompletar () {
        /* Completar la función autocompletar(): autocompleta los 4 campos de texto de la
        página (las direcciones ingresables por el usuario).
        Para esto creá un círculo con radio de 20000 metros y usalo para fijar
        los límites de la búsqueda de dirección. El círculo no se debe ver en el mapa. */

        autocomplete = new google.maps.places.Autocomplete(
          document.getElementById('direccion'));

        autocomplete2 = new google.maps.places.Autocomplete(
          document.getElementById('desde'));

        autocomplete3 = new google.maps.places.Autocomplete(
          document.getElementById('hasta'));

        autocomplete4 = new google.maps.places.Autocomplete(
          document.getElementById('agregar'));


        var circle = new google.maps.Circle({
          center: posicionCentral,
          radius: 20000
        });
        autocomplete.setBounds(circle.getBounds());

        var circle2 = new google.maps.Circle({
          center: posicionCentral,
          radius: 20000
        });
        autocomplete2.setBounds(circle2.getBounds());

        var circle3 = new google.maps.Circle({
          center: posicionCentral,
          radius: 20000
        });
        autocomplete3.setBounds(circle3.getBounds());

        var circle4 = new google.maps.Circle({
          center: posicionCentral,
          radius: 20000
        });
        autocomplete4.setBounds(circle4.getBounds());

  }

    // Inicializo la variable servicioLugares y llamo a la función autocompletar
  function inicializar () {
    servicioLugares = new google.maps.places.PlacesService(mapa)
    autocompletar()
  }

    // Busca lugares con el tipo especificado en el campo de TipoDeLugar

  function buscarCerca (posicion) {
        /* Completar la función buscarCerca  que realice la búsqueda de los lugares
    del tipo (tipodeLugar) y con el radio indicados en el HTML cerca del lugar
    pasado como parámetro y llame a la función marcarLugares. */
    var tipodeLugar = document.getElementById('tipoDeLugar').value
    var radio = document.getElementById('radio').value

    var request = {
      location: posicion,
      radius: radio,
      type: [tipodeLugar]
    };

    servicioLugares.nearbySearch(request, function (results, status){
          marcadorModulo.marcarLugares(results, status);
    });
  }
  return {
    inicializar,
    buscarCerca
  }
})()
