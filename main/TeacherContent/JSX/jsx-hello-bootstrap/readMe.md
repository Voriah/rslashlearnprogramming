# Hello Bootstrap

In this activity, we will utilize Bootstrap CSS and render components utilizing Bootstrap classes.

## Instructions

* Create a file `index.jsx` that only contains HTML boilerplate

* Add a Bootstrap CDN to the head of your application's `index.jsx` file inside `views/index.jsx`.

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css"/>
```

* Create a folder inside of views called `components`

* Create three new components that return a new bootstrap component (navbar, jumbotron, form, etc). The choice is yours

### Hints

* In order to return separate JSX elements from a function, all of the higher level elements need a single parent, e.g., usually a `div`.

* All JSX tags must either have an adjacent tag or else have a self-closing forward slash.

* `className` must be used to describe an element's `class` property since `class` is a reserved word in JavaScript.

* Remember to import the `react` library in any file where JSX is utilized.
