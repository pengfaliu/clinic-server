const query = require('./index')

class DiseaseModel {
  constructor () {}

  /**
   * 查询疾病分类
   */
  static disease_type_query () {
    const _sql = `select * from KLN_BAS_DiseaseType`
    return query(_sql)
  }

  /**
   * 根据疾病分类查询疾病目录
   * @param {疾病类别id} FDiseaseTypeID
   * @param {当前页} pageindex
   * @param {每页查询条数} pagesize
   */
  static disease_list_query (FDiseaseTypeID, pageindex, pagesize) {
    pageindex = pageindex || 1
    pagesize = pagesize || 10
    const _sql = `select * from KLN_BAS_Disease where FDiseaseTypeID = ${FDiseaseTypeID} order by FDiseaseID offset ${(pageindex - 1) * pagesize} rows fetch next ${pagesize} rows only`
    return query(_sql)
  }

  /**
   * 查询疾病条数
   * @param {疾病类别id} FDiseaseTypeID
   */
  static diseast_count (FDiseaseTypeID) {
    const _sql = `select count(*) as count from KLN_BAS_Disease where FDiseaseTypeID = ${FDiseaseTypeID}`
    return query(_sql)
  }

}

module.exports = DiseaseModel