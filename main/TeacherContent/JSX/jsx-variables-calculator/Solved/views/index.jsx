const React = require('react')

const a = 7
const b = 12

const Page = () =>
  <html lang='en'>
    <head>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <title>Calculator</title>
    </head>
    <body>
      <h1>Welcome To The Calculator</h1>
      <ul>
        <li>Addition : {a + b}</li>
        <li>Subtraction : {a - b}</li>
        <li>Multiplication : {a * b}</li>
        <li>Division : {a / b}</li>
        <li>Modulus : {a % b}</li>
      </ul>
    </body>
  </html>

module.exports = Page
