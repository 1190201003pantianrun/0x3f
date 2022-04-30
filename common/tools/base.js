/**
 * 
 * @param {要访问的集合名} table 
 * @param {回调函数，可以理解为函数指针} callback 
 */
function getData(table, callback) {
  wx.cloud.database().collection(table).get()
    .then(res => {
      callback(res)
    })
    .catch(err => {
      console.log(err)
    })
}
/**
 * 将函数接口暴露出去
 */
module.exports = {
  getData: getData
}