var myCity = "London";
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

var eventButton = document.querySelector("button");

function firstAPICall() {
  document.getElementById("events").textContent = "";
  var xhr = new XMLHttpRequest();
  // console.log(xhr);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // console.log("working");
      var parsed = JSON.parse(xhr.responseText);
      var events = parsed._embedded.events;
      var titles = [];
      for (var i = 0; i < events.length; i++) {
        titles.push({
          title: events[i].name,
          postalCode: events[i]._embedded.venues[0].postalCode,
          url: events[i].url,
          venueName: events[i]._embedded.venues[0].name
        });
      }
      // console.log(titles);
      for (var j = 0; j < titles.length; j++) {
        var newItem = document.createElement("li");
        newItem.className = events[j]._embedded.venues[0].postalCode;
        var itemSpan = document.createElement("span");
        itemSpan.className = events[j]._embedded.venues[0].postalCode;
        itemSpan.textContent = titles[j].title;
        newItem.appendChild(itemSpan);
        var ul = document.getElementById("events");
        var scrol = document.createElement("a");
        scrol.setAttribute("href", "#legs");
        scrol.appendChild(newItem);
        ul.appendChild(scrol);
      }
    } else {
      console.log("loading");
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}
eventButton.addEventListener("click", firstAPICall, false);
