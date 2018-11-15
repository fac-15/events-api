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
      }
    }
    document.getElementById("duration").innerHTM =
      googleDirection.journeys[0].duration + " mins";

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
  };
  xhr.open("GET", url, true);
  xhr.send();
})();
