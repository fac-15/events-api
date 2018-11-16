//get geolocation of user
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  document.getElementById("invisible").textContent =
    position.coords.latitude + "," + position.coords.longitude;
}

getLocation();

function showRoute(event) {
  document.getElementById("legs").textContent = "";
  var invisible = document.getElementById("invisible").textContent;
  // console.log(invisible);
  var postCode = event.target.className;
  // console.log(postCode);
  var xhr = new XMLHttpRequest();
  var url =
    "https://api.tfl.gov.uk/journey/journeyresults/" +
    invisible +
    "/to/" +
    postCode +
    "?app_id=df5c45a2&app_key=e753bebcf92ac22a1f8d97c0df442e68";
  // console.log(url);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var googleDirection = JSON.parse(xhr.responseText);
      var array = googleDirection.journeys[0].legs;
      document.getElementById("duration").innerHTML =
        googleDirection.journeys[0].duration + " mins";
      // direction list
      var newArray = [];
      for (let i = 0; i < array.length; i++) {
        newArray.push(array[i].instruction.summary);
      }
    }

    var counter = 0;
    var ul = document.getElementById("legs");
    while (newArray.length > counter) {
      var li = document.createElement("li");
      li.textContent = newArray[counter];
      if (newArray[counter].includes("Walk")) {
        var dateSpan = document.createElement("span");
        dateSpan.innerHTML = '<i class="fas fa-walking"></i>';
        li.insertBefore(dateSpan, li.firstChild);
      } else if (newArray[counter].includes("bus")) {
        var dateSpan = document.createElement("span");
        dateSpan.innerHTML = '<i class="fas fa-bus"></i>';
        li.insertBefore(dateSpan, li.firstChild);
      } else {
        var dateSpan = document.createElement("span");
        dateSpan.innerHTML = '<i class="fas fa-train"></i>';
        li.insertBefore(dateSpan, li.firstChild);
      }
      ul.appendChild(li);
      counter++;
    }
    // setoff and arrival time
    var start = googleDirection.journeys[0].startDateTime
      .split("T")[1]
      .slice(0, 5);
    var arrival = googleDirection.journeys[0].arrivalDateTime
      .split("T")[1]
      .slice(0, 5);
    // console.log(start);
    // console.log(arrival);
    document.getElementById("start").innerHTML = start + " " + arrival;
  };
  xhr.open("GET", url, true);
  xhr.send();
}
document.getElementById("events").addEventListener("click", showRoute, false);
