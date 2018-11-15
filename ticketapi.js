var myCity = "London";
var ourLat = 0;
var ourLong = 0;
var date = new Date()
  .toJSON()
  .slice(0, 10)
  .replace(/-/g, "-");
var time = new Date().toJSON().slice(10, 19);
var url =
  "https://app.ticketmaster.com/discovery/v2/events.json?apikey=oAocDLZcbnlG4NabWmo2qx1gyzlzdVGL" +
  "&city=" +
  myCity +
  "&sort=date,asc&startDateTime=" +
  date +
  time +
  "Z";

// var url =
//   "https://app.ticketmaster.com/discovery/v2/events.json?apikey=oAocDLZcbnlG4NabWmo2qx1gyzlzdVGL&latlong=51.56755570000001,-0.1058971";

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//     console.log(url);
//   } else {
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }
//
// function showPosition(position) {
//   ourLat = position.coords.latitude;
//   ourLong = position.coords.longitude;
// }
//
// getLocation();
// showPosition();
//
// function myFunction() {
//   getLocation();
//   showPosition();
// }

// var url =
//   "https://app.ticketmaster.com/discovery/v2/events.json?apikey=oAocDLZcbnlG4NabWmo2qx1gyzlzdVGL&latlong=" +
//   ourLat +
//   "," +
//   ourLong;
// console.log(url);

var eventName = document.querySelector("h1");
var eventDate = document.querySelector("h2");
var venueName = document.querySelector("h3");
var venueLocation = document.querySelector("h4");
var eventButton = document.querySelector("button");

function firstAPICall() {
  var xhr = new XMLHttpRequest();
  console.log(xhr);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log("working");
      var parsed = JSON.parse(xhr.responseText);
      var events = parsed._embedded.events;
      var titles = [];
      for (var i = 0; i < events.length; i++) {
        // titles.push(events[i].name);
        titles.push({
          title: events[i].name,
          postalCode: events[i]._embedded.venues[0].postalCode,
          url: events[i].url,
          venueName: events[i]._embedded.venues[0].name,
          venueAddress:
            events[i]._embedded.venues[0].address.line1 +
            ", " +
            events[i]._embedded.venues[0].address.line2
        });
      }
      console.log(titles);
      for (var j = 0; j < titles.length; j++) {
        var newItem = document.createElement("li");
        newItem.className = events[j]._embedded.venues[0].postalCode;
        newItem.setAttribute("onclick", "location.href='https://google.com'");
        var itemSpan = document.createElement("span");
        itemSpan.textContent = titles[j].title;
        newItem.appendChild(itemSpan);
        var ul = document.getElementById("events");
        ul.appendChild(newItem);
      }
      // eventName.textContent = parsed._embedded.events[0].name;
      // eventDate.textContent = parsed._embedded.events[0].dates.start.localDate;
      // venueName.textContent =
      //   parsed._embedded.events[0]._embedded.venues[0].name;
      // venueLocation.textContent =
      //   parsed._embedded.events[0]._embedded.venues[0].postalCode;
      // console.log("Name of event is " + parsed._embedded.events[0].name);
      // console.log(url);
    } else {
      console.log("not working");
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

eventButton.addEventListener("click", firstAPICall, false);
