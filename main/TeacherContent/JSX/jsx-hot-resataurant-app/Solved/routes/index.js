const tables = require('../data/tables')
const waitlist = require('../data/waitlist')

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.render('index')
  })

  app.get('/reserve', (req, res) => {
    res.render('components/reserve')
  })

  app.get('/reservations', (req, res) => {
    // res.render('components/reservations')
    res.render('components/reservations', { tables: tables, waitlist: waitlist })
  })

  app.post('/reservations', (req, res) => {
    if (tables.length < 5) {
      tables.push(req.body)
      res.sendStatus(200)
    } else {
      waitlist.push(req.body)
      res.sendStatus(200)
    }
  })
}
