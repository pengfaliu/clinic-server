const query = require('./index')

class UserModel {
  constructor () {}

  /**
   * 登陆
   * @param {用户名} name
   * @param {密码} password
   */
  static user_login (name, password) {
    const _sql = `select * from SYS_User where FName = '${ name }' and FPassword = '${ password }'`
    return query(_sql)
  }
}

module.exports = UserModel