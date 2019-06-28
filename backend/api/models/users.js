const _ = require('lodash')

module.exports = (pool) => ({

  findUserWithPwd: (email, password) => pool.query('select * from userz where email = $1 and password = $2',[email, password])
    .then(res => res.rows.length > 0 ? res.rows[0] : null)
    .catch(err => { throw err }),
  
  addUser: (email,password,name) => 
    pool.query('insert into userz (email,password,name) values ($1,$2,$3)' , [email,password,name])
    .then(qres => res.push(qres))
    .catch(err => { throw err })
  
})


