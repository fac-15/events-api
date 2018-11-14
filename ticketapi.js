var myCity = "London";
var url =
  "https://app.ticketmaster.com/discovery/v2/events.json?apikey=oAocDLZcbnlG4NabWmo2qx1gyzlzdVGL" +
  "&city=" +
  myCity;

// var url =
//   "https://app.ticketmaster.com/discovery/v2/events.json?apikey=oAocDLZcbnlG4NabWmo2qx1gyzlzdVGL&latlong=" +
//   ourLat +
//   "," +
ourLong;
var ourLat = 0;
var ourLong = 0;
var eventName = document.querySelector("h1");
var eventDate = document.querySelector("h2");
var venueName = document.querySelector("h3");
var venueLocation = document.querySelector("h4");
var eventButton = document.querySelector("button");

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//     // ourLat = position.coords.latitude;
//     // ourLong = position.coords.longitude;
//     console.log(url);
//   } else {
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }
//
// function myFunction() {
//   getLocation();
//   showPosition();
// }

function firstAPICall() {
  var xhr = new XMLHttpRequest();
  console.log(xhr);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log("working");
      var parsed = JSON.parse(xhr.responseText);
      eventName.textContent = parsed._embedded.events[0].name;
      eventDate.textContent = parsed._embedded.events[0].dates.start.localDate;
      venueName.textContent =
        parsed._embedded.events[0]._embedded.venues[0].name;
      venueLocation.textContent =
        parsed._embedded.events[0]._embedded.venues[0].postalCode;
      console.log("Name of event is " + parsed._embedded.events[0].name);
    } else {
      console.log("not working");
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

eventButton.addEventListener("click", firstAPICall, false);
