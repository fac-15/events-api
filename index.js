(function() {
  console.log("hi");
  var xhr = new XMLHttpRequest();
  var url =
    "https://api.tfl.gov.uk/journey/journeyresults/w51dy/to/se59pj?app_id=47787d57&app_key=da80efe588ae3ef5084ba76f49098232";
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var obj = JSON.parse(xhr.responseText);
      var duration = document.getElementById("duration");
      var direction = document.getElementById("direction");
      var departure = document.getElementById("departure");
      var arrival = document.getElementById("arrival");
      duration.textContent =
        "Duration: " + obj.journeys[2].legs[1].duration + " minutes";
      direction.textContent =
        "Direction: " + obj.journeys[2].legs[1].instruction.detailed;
      departure.textContent =
        "Departure Point: " + obj.journeys[2].legs[1].departurePoint.commonName;
      arrival.textContent =
        "Arrival Point: " + obj.journeys[2].legs[1].arrivalPoint.commonName;
      if (obj.journeys[2].legs[1].obstacles.length != 0) {
        var counter = 1;
        var durArr = [];
        var dirArr = [];
        var depArr = [];
        var arrArr = [];
        while (obj.journeys[2].legs[1].obstacles.length >= counter) {
          durArr.push(obj.journeys[2].legs[1 + counter].duration);
          dirArr.push(obj.journeys[2].legs[1 + counter].instruction.detailed);
          depArr.push(
            obj.journeys[2].legs[1 + counter].departurePoint.commonName
          );
          arrArr.push(
            obj.journeys[2].legs[1 + counter].arrivalPoint.commonName
          );
          counter++;
        }
        console.log(durArr);
        console.log(dirArr);
        console.log(depArr);
        console.log(arrArr);
        var counter2 =0;
        var ul = document.getElementById('obstacles');
        while (durArr.length > 0) {
          var
        }
      }
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
})();
