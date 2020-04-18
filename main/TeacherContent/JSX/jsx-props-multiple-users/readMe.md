#Instructions

You are going to be building a new version of the previous `jsx-props-user` application, but this one will allow for multiple users to be added instead of just the one

* Create a new Express Application (Make sure to add in all necessary middleware and view engines)

* You will need three components : a main entrypoint (`index.jsx`),  a view for your user list (`list.jsx`), and a form (`form.jsx`)

* You should have the form component render inside of your main entrypoint component like the previous activity

* Instead of storing one user on the server, create a user array and push each user form entry to said array

* On your user list component, use the array mapping method to loop over the user array passed by props. (Use the user's password as the unique key and attach said key to the <li> itself)

* Have each list item display the same information as it did in the previous activity
