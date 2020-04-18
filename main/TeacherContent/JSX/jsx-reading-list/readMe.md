# JSX Reading List App

For your homework, you will be building a reading list application.

In contrast with your normal homework assignments, you will have the solution to reference as you work. However, use it as a last resort for help. We realize that this week is a very challenging one, and that you aren't yet comfortable with JSX. But push yourself. The best way to learn is to push through and code like crazy.

Your application will be made up of two parts: 
1) A front-end set of JSX components for entering and viewing books on a reading list and 
2) A back-end composed of Node/Express and basic JS for storing, updating, and relaying said books.

Spend the time necessary to map this application out. Consider the concepts we've covered in class so far:

* Servers
* Routing
* APIs
* AJAX (GET, POST, PUT, and DELETE requests)
* JSX Components
* Passing Props
* Triggering window location changes

You should be referencing the code from the previous JSX applications.

---------------------

## Phase I - For this first phase, aim to create your basic server

* Make sure you install the necessary packages and middleware that you will need.
* DO NOT write your routes in the server file, or create variables to track the reading list data. Those will be placed in separate locations.

## Phase 2 - For this second phase, focus on creating your routes

* Make sure you have a routes folder with two routes files (one file will be for your views and one will be for your queries to the data)
  
* In the routes file for your views you will need three different routes, one for each view
  
* In the data routes file you will need one for each CRUD (if you forgot what this stands for, you'll need to do some googling) route, including a route to get a specific piece of data. For your benefit, here are some additional instructions (make sure you are referencing your RESTful routes table. If you didn't save it, google it. Also keep in mind that whatever data these routes will need MUST be passed by the corresponding front-end events that trigger them, which will be gone over further in Phase 4, 5, and 6):
   
        1. Your route to return all the books should match the 'index' RESTful route.
        2. Your route to return one specific book should match the 'show' RESTful route.
        3. Your route to add a new book should match the 'create' RESTful route.
        4. Your route to update one specific book should match the 'update' RESTful route.
        5. Your route to delete one specific book should match the 'destroy' RESTful route.

## Phase 3 - For this third phase, focus on creating your data files

* Bear in mind, the principle here is not to just create a file that exports an array back. Your data file should create an array and then export out an object of functions. These functions should manipulate the aforementioned array. For your benefit, here are some additional instructions on what specific functions this exported object should have (keep in mind that whatever parameters are specified below MUST be passed by the data routes that match it from Phase 2):
  
        1. A function called 'getBooks' that returns the books array.
        2. A function called 'getBook' that takes in an 'id' parameter, iterates through the array until it finds thebook with the matching id, and then returns the book back to the user.
        3. A function called 'addBook' that takes in a 'value' parameter and adds that value to the array.
        4. A function called 'updateBook' that takes in an 'id' parameter and a 'value' parameter, iterates through the array until it finds the book with the matching id, and then replaces it with the value that was passed to the function. The value passed should be the entire object itself, not just the specific property that was changed
        5. A function called 'deleteBook' that takes in an 'id' parameter and a 'value' parameter, iterates through the array until it finds the book with the matching id, and then removes it from the array.

## Phase 4 - For this fourth phase, focus on creating your index view.

* This view should not be passed any props from the server on load.

* This view should have nothing more than a simple form for entering in and adding books to your reading list and a button to bring you to the list view. Feel free to beautify it with some Jumbotrons or cards or really anything that you would like.

* Your front-end javascript for this page should be focused on two events : 

        1. Adding a book to your reading list using a fetch POST request. This request should send all the data from the form and receive back as a response a simple status code if it was successful. Once the response is received, the window location should change to the list view.
        2. Clicking over to the list view which should simply change the window location to the list view.

## Phase 5 -  For this fifth phase, focus on creating your list view.

* This view should be passed the entire reading list array as props from the server on load (use the 'getBooks' data route you wrote during phase 3).

* This view should have nothing more than a simple list rendering of your reading list that should've been passed in your props. Make sure it not only renders every property but also every book (remember that 'map()' function?). In addition to each piece of data you should include two buttons, one for updating the book and one for deleting the book.

* Your front-end javascript for this page should be focused on two events : 

        1. Triggering the update button on the book list item which should NOT UPDATE THE BOOK YET. The button should trigger the route to find the book with the corresponding id (pass it as an attribute on the button so you can get it from the click event) and then render the bookEdit view with the corresponding data.
        2. Triggering the delete button on the book list item which should hit the route to delete the book with the corresponding id and then reload the current list view page.

## Phase 6 -  For this sixth phase, focus on creating your bookEdit view.

* This view should be passed the specific book value from hitting the update button on the list view that you made in Phase 4.

* This view should have nothing more than a simple form autofilled with the current data values from the book passed as props. It will then take any changes in the form and pass the entire new book back to the server.

* Your front-end javascript for this page should be focused on one events : 

        1. Submitting the form which should hit the PUT route and send the server all the new updated data from the form. Then, when the response comes back (just make it a status code), you should change the window location back to the list view.
