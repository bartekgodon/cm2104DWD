// var map;
//
// function initMap() {
//   geocoder = new google.maps.Geocoder();
//   var aberdeen = {lat: 57.1497, lng: -2.0943};
//   map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 13,
//     center: aberdeen,
//     disableDefaultUI: true
//     }
//   );
// };

var geocoder;
var map;
var service;
var infowindow;
var aberdeen;

function initialize() {
  geocoder = new google.maps.Geocoder();
  aberdeen = new google.maps.LatLng(57.1497,-2.0942);

  map = new google.maps.Map(document.getElementById('map'), {
      center: aberdeen,
      zoom: 15,
      disableDefaultUI: true
    });

  var request = {
    location: aberdeen,
    radius: '2000',
    type: ['restaurant']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

function codeAddress() {

  var address = document.getElementById('address').value;
  geocoder.geocode( { 'address': address}, function(results, status)  {
    if (status == 'OK') {
      map.setCenter(results[0].geometry.location);

      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
      });
      map.setZoom(15);
    }
    else
    {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}
