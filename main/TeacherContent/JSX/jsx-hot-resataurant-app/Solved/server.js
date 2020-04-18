const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

require('./routes')(app)

app.listen(process.env.PORT || 3000, () => console.log('http://localhost:3000'))
