module.exports = (app) => {
  require('./bookRoutes')(app)
  require('./htmlRoutes')(app)
}
