# events-api 🎉
![](https://media1.tenor.com/images/74af153c37829c49fa897a5160713549/tenor.gif?itemid=4096707)

Link to your [events-api](https://fac-15.github.io/events-api/)

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

- We spent ages trying to link our two .js files using module.exports and require. We forgot that we had already written code to help us avoid having to do this, passing information to each li element as a class name: 

```

```

### Stretch Goals 🏃🥅
- Add image of the venue/event.
- Allow user to choose a date, and return a list of events for that date.
- Display the venue address to the user, as well as the directions on how to get there. 

