const disease_model = require('../db/disease_model')

/**
 * 疾病类别查询
 * @param {*} ctx
 */
const disease_type = async (ctx) => {
  ctx.body = ctx.header
  try {
    const { recordset: allData } = await disease_model.disease_type_query()
    let data = allData.filter(data => data.FParentID === 0)
    data.forEach(dataF => {
      dataF.childrenList = allData.filter(dataS => dataF.FDiseaseTypeID === dataS.FParentID)
    });
    ctx.body = data
  } catch (error) {
    ctx.throw(400, error)
  }
}

/**
 * 疾病目录查询
 * @param {*} ctx
 */
const disease_list = async (ctx) => {
  let {FDiseaseTypeID, pageindex, pagesize} = ctx.request.body
  FDiseaseTypeID = parseInt(FDiseaseTypeID)
  pageindex = parseInt(pageindex)
  pagesize = parseInt(pagesize)
  try {
    const { recordset: data } = await disease_model.disease_list_query (FDiseaseTypeID, pageindex, pagesize)
    const { recordset: count } = await disease_model.diseast_count(FDiseaseTypeID)
    ctx.body = {
      code: 200,
      data,
      page: {
        pageCount: count[0].count,
        pagesize: pagesize || 10,
        pageindex: pageindex || 1
      }
    }
  } catch (error) {
    ctx.throw(400, error)
  }
}

module.exports = {
  disease_type,
  disease_list
}