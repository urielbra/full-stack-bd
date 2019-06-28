const Pool = require('pg').Pool
const credentials = require('./credentials')

const pool = new Pool(credentials)

module.exports = pool
