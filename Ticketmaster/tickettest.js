var test = require("tape");
// var ticket = require("./ticketapi.js");

function generateDate() {
  var date = new Date()
    .toJSON()
    .slice(0, 10)
    .replace(/-/g, "-");
  return date;
}

function generateTime() {
  var time = new Date().toJSON().slice(10, 19);
  return time;
}

test("is tape working", function(t) {
  t.equal(1, 1, "1 should equal 1");
  t.end();
});

test("does generateDate return a string", function(t) {
  t.deepEqual(typeof generateDate(), "string", "should return a string");
  t.end();
});

test("does generateTime return a string", function(t) {
  t.deepEqual(typeof generateTime(), "string", "should return a string");
  t.end();
});

// test("require ticketapi.js", function(t) {
//   t.equal(ticket(2), 4, "2 + 2 should equal 4");
//   t.end();
// });
