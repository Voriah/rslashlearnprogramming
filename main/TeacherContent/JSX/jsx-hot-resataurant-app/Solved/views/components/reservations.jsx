const React = require('react')

const Reservations = props =>
  <html lang='en'>
    <head>
      <meta charSet='UTF-8' />
      <title>Tables Page</title>
      <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' />
      <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' />
    </head>
    <body>
      <div className='container'>
        <div className='jumbotron'>
          <h1 className='text-center'><span className='fa fa-fire' /> Hot Restaurant</h1>
          <hr />
          <h2 className='text-center'>Current Reservations and Waiting List</h2>
          <br />
          <div className='text-center'>
            <a href='/reserve'><button className='btn btn-lg btn-danger'><span className='fa fa-credit-card' /> Make Reservation</button></a>
            <a href='/'><button className='btn btn-lg btn-default'><span className='fa fa-home' /></button></a>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='card'>
              <div className='card-header'>
                <h4>Current Reservations</h4>
              </div>
              <div className='card-body'>
                <ul id='tableList' className='list-group'>
                  {props.tables.map(table =>
                    <li key={table.id} className='list-group-item mt-4'>
                      <h2>ID: {table.id}</h2>
                      <h2>Name: {table.name}</h2>
                      <h2>Email: {table.email}</h2>
                      <h2>Phone: {table.phone}</h2>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div className='card mt-4'>
              <div className='card-header'>
                <h4>Waiting List</h4>
              </div>
              <div className='card-body'>
                <ul id='waitList' className='list-group' >
                  {props.waitlist.map(table =>
                    <li key={table.id} className='list-group-item mt-4'>
                      <h2>ID: {table.id}</h2>
                      <h2>Name: {table.name}</h2>
                      <h2>Email: {table.email}</h2>
                      <h2>Phone: {table.phone}</h2>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src='https://code.jquery.com/jquery.js' />
      <script src='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js' />
      <script src='./app.js' />
    </body>
  </html>

module.exports = Reservations
