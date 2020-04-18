const React = require('react')

const Reserve = () =>
  <html lang='en'>
    <head>
      <meta charset='UTF-8' />
      <title>Reservation Page</title>
      <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' />
      <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' />
    </head>
    <body>
      <div className='container'>
        <div className='jumbotron'>
          <h1 className='text-center'>
            <span className='fa fa-fire' /> Hot Restaurant</h1>
          <hr />
          <h2 className='text-center'>Make your reservation</h2>
          <br />
          <div className='text-center'>
            <a href='/reservations'>
              <button className='btn btn-lg btn-primary'>
                <span className='fa fa-list-alt' /> View Tables</button>
            </a>
            <a href='/'>
              <button className='btn btn-lg btn-default'>
                <span className='fa fa-home' />
              </button>
            </a>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='card'>
              <div className='card-header'>
                          Table Reservation
              </div>
              <div className='card-body'>
                <form role='form'>
                  <div className='form-group'>
                    <label htmlFor='reserve-name'>Name</label>
                    <input type='text' className='form-control' id='reserve-name' />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='reserve-phone'>Phone Number</label>
                    <input type='text' className='form-control' id='reserve-phone' />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='reserve-email'>Email</label>
                    <input type='text' className='form-control' id='reserve-email' />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='reserve-unique-id'>Unique ID</label>
                    <input type='text' className='form-control' id='reserve-unique-id' />
                  </div>
                  <button type='submit' className='btn btn-primary submit'>Submit</button>
                </form>
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

module.exports = Reserve
