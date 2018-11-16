# Bounce 🎉
![](https://media1.tenor.com/images/74af153c37829c49fa897a5160713549/tenor.gif?itemid=4096707)

[Link to our project](https://fac-15.github.io/events-api/)

### Goals 🥅

Create a web app that can: 
1. display a list of nearby events to the user
2. provide directions from the user's current location to the selected venue

To get more comfortable with APIs.


### User Journey 

(Sak diagram)


### Why we chose these APIs

We wanted to create something that would be useful, and might have some real-world application. 

We chose the Ticketmaster API as we wanted to return a list of events. The documentation was pretty nice. The JSON was easy to navigate. 

We chose the TFL API as we ran into problems with CORS on the Google Maps API. There were ways to get around it using a browser extension, but this wouldn't be practical for other users. 

TFL's docs were not as good - it required a lot of finding examples, and some instructions weren't clear, for example how to append keys and IDs as query parameters in the url.

### Dependencies to install 💻

- JavaScript
- HTML
- CSS
- Tape for testing
- Create API keys 


### Problems 😥 
- Getting google map api to work

- trouble with lat and long

- We spent ages trying to link our two .js files using **module.exports** and **require**, and ended up getting nowhere. We'd forgotten that we had already written code to help us avoid having to do this, passing a unique post code from our first API to each newly-created li element as a class name: 

```
        var newItem = document.createElement("li");
        newItem.className = events[j]._embedded.venues[0].postalCode;
```
Which created this on the DOM:

```
        <span class="WC2 9HU">Matilda the Musical</span>

```
**Using the DOM**, our TFL API could then access the post code, and return directions relevant to the selected event.

- We used the same DOM logic to overcome a problem with our geolocation. We couldn't get the user's latitude and longitude out of the local scope of the getLocation() function, and we couldn't pass the return value of the function into our TFL API call. So we sent the user's co-ordinates to the DOM: 

```
function showPosition(position) {
  document.getElementById("invisible").textContent =
    position.coords.latitude + "," + position.coords.longitude;
}
```
And then our second API call to TFL was able to access the latitude and longitude from the element ``` ("invisible") ``` on the DOM.

### Stretch Goals 🏃🥅
- Display an image (provided in the JSON) for each listed event.
- Allow user to choose a date, and return a list of events for that date.
- Display the venue address to the user, as well as the directions on how to get there. 

