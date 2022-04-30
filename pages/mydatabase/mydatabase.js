Page({
  data: {
    result: []
  },
  onLoad() {
    // 引入base.js
    var baseJS = require("../../common/tools/base")
    // 调用base.js中的函数
    baseJS.getData("goods", this.getRes)
  },
  // 回调函数
  getRes(res) {
    this.setData({
      result: res
    })
    console.log(this.data.result)
  }
})