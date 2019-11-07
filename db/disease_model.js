const query = require('./index')

class DiseaseModel {
  constructor () {}

  static disease_type_query () {
    const _sql = `select * from KLN_BAS_DiseaseType`
    return query(_sql)
  }

}

module.exports = DiseaseModel