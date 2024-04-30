# Full Stack Drill App - April 29, 2024
## About
This is a fullstack EVN app written in Express, Vite(w react template), and Node.  The purpose of this app is to function as a drill for myself to see how quickly I can put a full stack app together with minimal API functionality.  This is not inteded to be a fully functioning app in anyway, but rather a way of tracking my progress in creating fullstack apps.  This particular app utilizes the following features:
* API calls to the server via Axios
* Async/await for said axios calls
* React Functional components
* UseState React Hooks
* Use of SetTimeout to help determine whether or not the user has stopped typing

## Issues
Since this is not intended to be a fully functional standalone app, here are some of the issues with the app include:
* No serverside validation, meaning a lack of protection from bad actors
* Inadequate use of CORS, further lack of protection
* Not production ready
* Lack of database functionality
* imports `bootstrap` and `react-bootstrap` but does nothing with them yet
* No real direction for app development

## Cool feature
Since it is just an app that sends back a message based on what is typed by the user, I wanted to try to implement SetTimeout to fire after 2 seconds after the user stops typing.  Though, I initially planned to use two separate events (onKeyUp and onKeyDown) to manage the timer with a variable timer that was accessible in the top level of the module, but as I was typing, Copilot suggested a method to utilize the timer in such a way that only one event was necessary:
![Screenshot of code sample](/Screenshot2024-04-29.png)

## Feedback
Constructive feedback is welcome, as I am always open to improving my code.  **Please be kind.**
*Thanks*
