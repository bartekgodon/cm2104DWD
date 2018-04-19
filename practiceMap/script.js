//define required variables
var geocoder;
var map;
var service;
var infowindow;
var aberdeen;

  //initialize map on aberdeen
function initialize() {

  geocoder = new google.maps.Geocoder();
  aberdeen = new google.maps.LatLng(57.1497,-2.0942);

  map = new google.maps.Map(document.getElementById('map'), {
      center: aberdeen,
      zoom: 13,
      disableDefaultUI: true
    });
};

//search for places based on category
function categorySearch() {
  //check if all required search parameters are valid, if not return
  if(document.getElementById("categorySelect").value == "0" || document.getElementById("categorySelect").value < 1){return};

  //reset map to remove markers
  initialize();

  //get the places div (result output)
  var div = document.getElementById('places');

  //remove any outputs in the results div
  while(div.firstChild){
    div.removeChild(div.firstChild);
  };

  //generate the search request
  var request = {
    location: aberdeen,
    radius: [document.getElementById("radius").value * 1000] ,
    type: [document.getElementById("categorySelect").value]
  };

  //run the nearby search and generate an array of results
  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}


//callback method to create a marker for each result
function callback(results, status) {

  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      //create a marker for the current index place object
      createMarker(results[i]);
    }
  }
}

//create a marker, place it on a map and generate a place result to be displayed in the results div
function createMarker(place) {

    //select the places div
    var placesList = document.getElementById('places');
    //get the geometry location of the input place
    var placeLoc = place.geometry.location;

    //generate an icon image for the place
    var image = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };

    //crete a new marker
    var marker = new google.maps.Marker({
      map: map,
      icon: image,
      position: place.geometry.location
    });

    //listener to zoom on the marker when clicked on
    marker.addListener('click', function() {
      map.setZoom(18);
      map.setCenter(marker.getPosition());
    });

    //generate place result info div
    var div = document.createElement('div');
    div.setAttribute("id","resultDiv");

    var h3 = document.createElement("h3");
    h3.setAttribute("id","resultHead");

    var p = document.createElement("p");
    p.setAttribute("id","resultPara");

    var button = document.createElement('a');
    var buttonText = document.createTextNode("Add to Favourites");
    button.setAttribute('href', "http://google.com");
    button.appendChild(buttonText);

    h3.textContent = place.name;
    p.textContent = "Address: "+place.vicinity;

    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(button);

    //add info div into the result list
    placesList.appendChild(div);
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
