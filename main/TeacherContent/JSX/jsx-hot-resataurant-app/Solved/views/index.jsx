const React = require('react')

const Index = () =>
  <html lang='en'>
    <head>
      <meta charSet='UTF-8' />
      <title>Tables Page</title>
      <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' />
      <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' />
    </head>
    <body>
      <div class='container'>
        <div class='jumbotron'>
          <h1 class='text-center'><span class='fa fa-fire' /> Hot Restaurant</h1>
          <hr />
          <h2 class='text-center'>We only have 5 tables! Book your seat before they all are gone!</h2>
          <br />
          <div class='text-center'>
            <a href='/reservations'><button class='btn btn-lg btn-primary'><span class='fa fa-list-alt' /> View Reservations</button></a>
            <a href='/reserve'><button class='btn btn-lg btn-danger'><span class='fa fa-credit-card' /> Make Reservation</button></a>
          </div>
        </div>
      </div>
      <script src='./app.js' />
    </body>
  </html>

module.exports = Index
