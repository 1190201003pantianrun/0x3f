// pages/selectDepartment/selectDepartment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeKey: 0,
    department: [],
    hello: 0,
  },

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var baseJS = require("../../common/tools/base");
    baseJS.getData("hospital_test", this.getRes);
    // var list = ["神经科"];
    // baseJS.addData("hospital_test", list);
    // baseJS.getData("hospital_test", this.getRes)
    // console.log(this.data.users)

  },


 // 回调函数
 getRes(res) {
  console.log("你好", res);
  this.setData({
    department: res.data,
    hello:9999

  })

  console.log("department", this.data.department)
  // console.log(this.data.department[0])
  // console.log(this.data.department[0].name)
  // console.log(this.data.department[1])
},


onChange(event) {
  // this.data.hello = this.data.hello + 1;
  // console.log("hello", this.data.hello);
},

})