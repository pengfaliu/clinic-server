const report_model = require('../db/report_model')

const report_script_info = async (ctx) => {
  let { script } = ctx.request.body
  try {
    const { recordset: data } = await report_model.report_script_info(script)
    ctx.body = {
      code: 200,
      data
    }
  } catch (error) {
    ctx.throw(400, error)
  }
}

module.exports = {
  report_script_info
}