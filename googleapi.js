// const app_id = "df5c45a2";
// const app_key = "e753bebcf92ac22a1f8d97c0df442e68";

(function() {
  var xhr = new XMLHttpRequest();
  var url =
    "https://api.tfl.gov.uk/journey/journeyresults/51.56335430000001,-0.10794559999999999/to/nw87db?app_id=df5c45a2&app_key=e753bebcf92ac22a1f8d97c0df442e68";

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let googleDirection = JSON.parse(xhr.responseText);

      document.getElementById("direction").innerHTML =
        googleDirection.journeys[0].startDateTime;
      console.log("test", googleDirection.journeys[0].startDateTime);
    }
  };
  xhr.open("GET", url, true);
  xhr.send(); //included this
})();
