const React = require('react')
const Navbar = require('./components/navbar')
const Jumbotron = require('./components/jumbotron')
const Form = require('./components/form')

const Page = () =>
  <html lang='en'>
    <head>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
      <title>Document</title>
      <link href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO' crossOrigin='anonymous' />
    </head>
    <body>
      <Navbar />
      <Jumbotron />
      <Form />
    </body>
  </html>

module.exports = Page
