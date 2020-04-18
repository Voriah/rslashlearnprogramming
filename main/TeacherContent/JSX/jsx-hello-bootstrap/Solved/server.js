const express = require('express')
const path = require('path')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jsx')

app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => res.render('index.jsx'))
app.listen(3000, _ => console.log('http://localhost:3000'))
