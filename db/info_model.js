const query = require('./index')

class InfoModel {
  constructor () {}

  static info_select () {
    const _sql = `select * from KLN_BAS_MedSpec where FMedSpecID = 3`
    return query(_sql)
  }

  static info_select_id (values) {
    const _sql = `select * from KLN_BAS_MedSpec where FMedSpecID = ${values}`
    return query(_sql)
  }
}

module.exports = InfoModel