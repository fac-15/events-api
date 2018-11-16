var test = require("tape");

function showPosition(position) {
  document.getElementById("invisible").textContent =
    position.coords.latitude + "," + position.coords.longitude;
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    return "hello";
  } else {
    alert("Geolocation is not supported by this browser.");
    return "not working";
  }
}

test("is tape working", function(t) {
  t.equal(1, 1, "1 should equal 1");
  t.end();
});

test("is geolocation working", function(t) {
  t.equal(typeof getLocation(), "string", "should return a string");
  t.end();
});
