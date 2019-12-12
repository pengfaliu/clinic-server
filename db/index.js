const mssql = require('mssql');
const db_config = require('../config/db')
const db_pool = new mssql.ConnectionPool(db_config);
const query = (sql) => {
  console.log(sql)
  return new Promise((resolve, reject) => {
    db_pool.connect().then(pool => {
      return pool.query(sql)
    }).then(result => {
      resolve(result)
      db_pool.close()
    }).catch(err => {
      reject(err)
      db_pool.close()
    })
  })
}
module.exports = query
