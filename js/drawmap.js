
mapboxgl.accessToken = 'pk.eyJ1IjoidGpjaGhhamVkIiwiYSI6ImNqOHl4MWJxbDB6b3UycW5yNzBqeGk4OHEifQ.CILcfEPVWpZzEd6U0bhqCQ';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/surajroland/cj8sz8gf2cwj92rkayl4t9tvg', //hosted style id
    center: [100, -15], // starting position
    zoom: 1// starting zoom
});
map.scrollZoom.disable();
map.doubleClickZoom.disable();
map.dragPan.disable();
map.dragRotate.disable();
map.touchZoomRotate.disable();

var geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [9.4129111, 47.6718456]
    },
    properties: {
      title: 'Mapbox',
      description: 'Hildesheim, Germany'
    }
  }]
};

// add markers to map
geojson.features.forEach(function(marker) {

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
  .setLngLat(marker.geometry.coordinates)
  .addTo(map);
});
