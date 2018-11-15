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

      var newArray = [];
      for (let i = 0; i < array.length; i++) {
        newArray.push(array[i].instruction.summary);
        console.log("array check", array[i].instruction.summary);
      }
      console.log("new array", newArray);
    }
    document.getElementById("duration").innerHTML =
      googleDirection.journeys[0].duration + " mins";
    document.getElementById("direction").innerHTML = newArray;
    // googleDirection.journeys[0].legs[0].instruction.summary;
    // console.log("test", googleDirection.journeys[0].legs[0]);
  };
  xhr.open("GET", url, true);
  xhr.send(); //included this
})();

// instruction.summary;
