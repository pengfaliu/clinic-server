const user_model = require('../db/user_model')
const jwt = require('jsonwebtoken')
const jwt_config = require('../config/jwt_config')

/**
 * 用户登陆
 * @param {*} ctx
 */
const user_login = async (ctx) => {
  let {FName, FPassword} = ctx.request.body
  try {
    if (FName && FPassword) {
      const { recordset: userData } = await user_model.user_login(FName, FPassword)
      if (userData.length) {
        let userToken = {
          name: FName
        }
        const token = jwt.sign(userToken, jwt_config.secret, {expiresIn: '1h'})  // token签名，有效期为一小时
        ctx.body = {code: 200, data: userData[0], token}
      } else {
        ctx.throw(400, '用户名或密码错误')
      }
    } else {
      ctx.throw(400, '参数错误')
    }
  } catch (error) {
    ctx.throw(400, error)
  }
}

module.exports = {
  user_login
}