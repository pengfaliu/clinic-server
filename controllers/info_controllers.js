const info_model = require('../db/info_model')
const get_info = async (ctx) => {
  try {
    const info = await info_model.info_select()
    ctx.body = info
  } catch (error) {
    ctx.throw(400, error)
  }
}

const get_info_id = async (ctx) => {
  const { id } = ctx.params
  try {
    const info = await info_model.info_select_id(id)
    ctx.body = info
  } catch (error) {
    ctx.throw(400, error)
  }
}

module.exports = {
  get_info,
  get_info_id
}