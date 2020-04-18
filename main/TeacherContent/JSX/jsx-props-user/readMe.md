#Instructions

You are going to be building a two page application that allows users to log in to our app and then see their login information on a separate page. That is all our app does. You log in, and that's it. wow

* Create a new Express Application (Make sure to add in all necessary middleware and view engines)

* You will need three components : a main entrypoint (`index.jsx`),  a view for your user (`list.jsx`), and a form (`form.jsx`)

* You should have the form component render inside of your main entrypoint component and have inputs for name, email, password, and address

* Create a user object variable on the server, and when the form is submitted have it change the value of that user object

* Once the user object has been changed, send the client to your component to view the user. Make sure you pass the user object from the server to your component.

* Display a <li> with each piece of information on the User object
