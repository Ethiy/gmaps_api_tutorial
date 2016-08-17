var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:48.889, lng:2.240},
    zoom: 17
  });
}