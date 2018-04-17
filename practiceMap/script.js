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
};

function categorySearch() {

  geocoder = new google.maps.Geocoder();
  aberdeen = new google.maps.LatLng(57.1497,-2.0942);

  map = new google.maps.Map(document.getElementById('map'), {
      center: aberdeen,
      zoom: 15,
      disableDefaultUI: true
    });

  if(document.getElementById("categorySelect").value == "0"){return};

  var request = {
    location: aberdeen,
    radius: '2000',
    type: [document.getElementById("categorySelect").value]
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}
//end

function callback(results, status) {

  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var bounds = new google.maps.LatLngBounds();
  var placesList = document.getElementById('places');
  var placeLoc = place.geometry.location;

  var image = {
           url: place.icon,
           size: new google.maps.Size(71, 71),
           origin: new google.maps.Point(0, 0),
           anchor: new google.maps.Point(17, 34),
           scaledSize: new google.maps.Size(25, 25)
         };

  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  var li = document.createElement('li');
         li.textContent = place.name;
         placesList.appendChild(li);

         bounds.extend(place.geometry.location);
};

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

  function clearMarkers() {
    setMapOnAll(null);
  };

  function deleteMarkers() {
        clearMarkers();
  };
