const db = wx.cloud.database()

/**
 * 
 * @param {要访问的集合名} table 
 * @param {回调函数，可以理解为函数指针} callback 
 */
function getData(table, callback) {
  db.collection(table).get()
    .then(res => {
      callback(res)
    })
    .catch(err => {
      console.error(err)
    })
}
/**
 * 
 * @param {要访问的集合名} table 
 * @param {要增加的数据} list 
 */
function addData(table, list) {
  db.collection(table).add({
      data: {
        name: list[0],
        price: list[1]
      }
    })
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.error(err)
    })
}
/**
 * 
 * @param {要修改的集合} table 
 */
function updateData(table) {

}
/**
 * 将函数接口暴露出去
 */
module.exports = {
  getData: getData,
  addData: addData
}