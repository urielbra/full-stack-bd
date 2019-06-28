pool = require('../utils/db_connection')

module.exports = {
  Usuario: require('./users')(pool),
  Postit: require('./postit')(pool)
}