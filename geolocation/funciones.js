var x = document.getElementById("demo");
var btn=document.getElementById("btn");
function initMap(lt) {
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: lt});
  var marker = new google.maps.Marker({position: lt, map: map});
}
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}


 function showPosition(position) {
  var l=position.coords.latitude;
  var t=position.coords.longitude;
  var lt={lat: l, lng: t};
  return lt;
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}
function initMap() {
  var lt =getlocation();
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: lt});
  var marker = new google.maps.Marker({position: lt, map: map});
}