// const app_id = "df5c45a2";
// const app_key = "e753bebcf92ac22a1f8d97c0df442e68";

(function() {
  var xhr = new XMLHttpRequest();
  var url =
    "https://api.tfl.gov.uk/journey/journeyresults/n166uz/to/nw87db?app_id=df5c45a2&app_key=e753bebcf92ac22a1f8d97c0df442e68";

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var googleDirection = JSON.parse(xhr.responseText);
      var array = googleDirection.journeys[0].legs;

      document.getElementById("duration").innerHTML =
        googleDirection.journeys[0].duration + " mins";
      // document.getElementById("direction").innerHTML = newArray;

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
    console.log(start);
    console.log(arrival);
    document.getElementById("start").innerHTML = start + " " + arrival;
  };

  xhr.open("GET", url, true);
  xhr.send(); //included this
})();

// instruction.summary;
