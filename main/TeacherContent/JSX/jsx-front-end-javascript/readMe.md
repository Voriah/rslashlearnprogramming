# Hello Bootstrap

In this activity, we will utilize Bootstrap CSS and render components utilizing Bootstrap classes.

## Instructions

* Create a file `index.jsx` that only contains HTML boilerplate

* Add a Bootstrap CDN to the head of your application's `index.jsx` file inside `views/index.jsx`.

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css"/>
```

* Create a folder inside of views called `components`

* Create a component that returns a Bootstrap form with an email & password field

* Create a public folder with an `app.js` file inside of it (make sure you set this folder as the static express assets in your `server.js` file)

* Inside `app.js` create a click event handler for the button on the form that grabs the inputs and logs a user object to the console (ex: `{email: a@b.com, password: 1234}`)
