const query = require('./index')

class ReportModel {
  constructor () {}

  /**
   * 根据脚本查询报表数据
   * @param {报表脚本} script 
   */
  static report_script_info (script) {
    return query(script)
  }
}

module.exports = ReportModel