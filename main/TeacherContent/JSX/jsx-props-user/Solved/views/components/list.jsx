const React = require('react')

const List = props =>
  <html lang='en'>
    <head>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
      <link href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO' crossOrigin='anonymous' />
      <title>Log In App</title>
    </head>
    <body>
      <a href='/'>Add another user</a>
      <div className='list-group align-center' style={{width: 50 + '%'}}>
        <a href='#' className='list-group-item list-group-item-action flex-column align-items-start active'>
          <div className='d-flex w-100 justify-content-between' data-password={props.password}>
            <h5 className='mb-1'>{props.name}</h5>
            <small>{props.email}</small>
          </div>
          <p className='mb-1'>{props.address}</p>
        </a>
      </div>
    </body>
  </html>

module.exports = List
