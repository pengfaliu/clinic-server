const query = require('./index')

class DiseaseModel {
  constructor () {}

  static disease_type_query () {
    const _sql = `select * from KLN_BAS_DiseaseType`
    return query(_sql)
  }

  static disease_list_query (FDiseaseTypeID, pageindex, pagesize) {
    pageindex = pageindex || 1
    pagesize = pagesize || 10
    const _sql = `select * from KLN_BAS_Disease where FDiseaseTypeID = ${FDiseaseTypeID} order by FDiseaseID offset ${(pageindex - 1) * pagesize} rows fetch next ${pagesize} rows only`
    return query(_sql)
  }

}

module.exports = DiseaseModel