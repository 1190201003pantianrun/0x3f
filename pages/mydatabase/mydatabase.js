Page({
  data: {
    result: []
  },
  onLoad() {
    // 引入base.js
    var baseJS = require("../../common/tools/base")
    // 获取集合中所有数据
    baseJS.getData("goods", this.getRes)
    // 向集合中增加一条数据
    // var list = ["可乐", 3.0]
    // baseJS.addData("goods", list)
    // baseJS.getData("goods", this.getRes)
    // 更新集合中的数据
    
  },
  // 回调函数
  getRes(res) {
    this.setData({
      result: res
    })
    console.log(this.data.result)
  }
})