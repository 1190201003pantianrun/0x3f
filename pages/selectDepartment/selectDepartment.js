// pages/selectDepartment/selectDepartment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeKey: 0,
    About: [],
    users: [
      {
          "id": 1,
          "name": "全部"
      },
      {
          "id": 2,
          "name": "中考真题"
      },
      {
          "id": 3,
          "name": "化学"
      },
      {
          "id": 4,
          "name": "英语"
      }
  ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // var baseJS = require("../../common/tools/base");
    // baseJS.getData("hospital_test", this.getRes);
    // var list = [2, "hello"];
    // baseJS.addData("hospital_test", list);
    // baseJS.getData("goods", this.getRes)
    console.log(this.data.users)

  },


 // 回调函数
 getRes(res) {
  console.log("你好", res);
  this.setData({
    About: res.data
  })
  console.log(this.data.About)
}

})