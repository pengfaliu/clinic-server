const disease_model = require('../db/disease_model')

const disease_type = async (ctx) => {
  try {
    const { recordset: allData } = await disease_model.disease_type_query()
    let data = allData.filter(data => data.FParentID === null)
    data.forEach(dataF => {
      dataF.childrenList = allData.filter(dataS => dataF.FDiseaseTypeID === dataS.FParentID)
    });
    ctx.body = {code: 200, data}
  } catch (error) {
    ctx.throw(400, error)
  }
}

const disease_list = async (ctx) => {
  const {FDiseaseTypeID, pageindex, pagesize} = ctx.request.body
  try {
    const { recordset: data } = await disease_model.disease_list_query (FDiseaseTypeID, pageindex, pagesize)
    ctx.body = {code: 200, data}
  } catch (error) {
    ctx.throw(400, error)
  }
}

module.exports = {
  disease_type,
  disease_list
}