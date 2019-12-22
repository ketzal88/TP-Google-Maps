var mapa // Mapa que vamos a modificar

/* Crear la variable posicionCentral con las coordenadas donde se va a centrar el mapa */
var posicionCentral = {lat: -34.5928549, lng: -58.4283848}

// Inicializa el mapa con un valor de zoom y una locación en el medio
function inicializarMapa () {

  map = new google.maps.Map(document.getElementById('map'), {
    center: posicionCentral,
    zoom: 13
  });



  geocodificadorModulo.inicializar()
  marcadorModulo.inicializar()
  direccionesModulo.inicializar()
  lugaresModulo.inicializar()
  streetViewModulo.inicializar()
}


