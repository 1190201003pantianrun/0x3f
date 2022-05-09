// pages/selectDepartment/selectDepartment.js


Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeKey: 0,
    hospital_id:0, // 选择的是哪个医院
    department: [], // 医院拥有的部门
    doctors:[
      { "firstName": "Brett", "lastName":"McLaughlin", "email": "aaaa" },
      { "firstName": "Jason", "lastName":"Hunter", "email": "bbbb"},
      { "firstName": "Elliotte", "lastName":"Harold", "email": "cccc" },
      { "firstName": "Brett", "lastName":"McLaughlin", "email": "aaaa" },
      { "firstName": "Jason", "lastName":"Hunter", "email": "bbbb"},
      { "firstName": "Elliotte", "lastName":"Harold", "email": "cccc" },
      { "firstName": "Brett", "lastName":"McLaughlin", "email": "aaaa" },
      { "firstName": "Jason", "lastName":"Hunter", "email": "bbbb"},
      { "firstName": "Elliotte", "lastName":"Harold", "email": "cccc" },
      { "firstName": "Brett", "lastName":"McLaughlin", "email": "aaaa" },
      { "firstName": "Jason", "lastName":"Hunter", "email": "bbbb"},
      { "firstName": "Elliotte", "lastName":"Harold", "email": "cccc" },
      { "firstName": "Brett", "lastName":"McLaughlin", "email": "aaaa" },
      { "firstName": "Jason", "lastName":"Hunter", "email": "bbbb"},
      { "firstName": "Elliotte", "lastName":"Harold", "email": "cccc" },
      { "firstName": "Brett", "lastName":"McLaughlin", "email": "aaaa" },
      { "firstName": "Jason", "lastName":"Hunter", "email": "bbbb"},
      { "firstName": "Elliotte", "lastName":"Harold", "email": "cccc" },
      { "firstName": "Brett", "lastName":"McLaughlin", "email": "aaaa" },
      { "firstName": "Jason", "lastName":"Hunter", "email": "bbbb"},
      { "firstName": "Elliotte", "lastName":"Harold", "email": "cccc" },
      { "firstName": "Brett", "lastName":"McLaughlin", "email": "aaaa" },
      { "firstName": "Jason", "lastName":"Hunter", "email": "bbbb"},
      { "firstName": "Elliotte", "lastName":"Harold", "email": "cccc" },
      { "firstName": "Brett", "lastName":"McLaughlin", "email": "aaaa" },
      { "firstName": "Jason", "lastName":"Hunter", "email": "bbbb"},
      { "firstName": "Elliotte", "lastName":"Harold", "email": "cccc" },
      { "firstName": "Brett", "lastName":"McLaughlin", "email": "aaaa" },
      { "firstName": "Jason", "lastName":"Hunter", "email": "bbbb"},
      { "firstName": "Elliotte", "lastName":"Harold", "email": "cccc" },
      { "firstName": "Brett", "lastName":"McLaughlin", "email": "aaaa" },
      { "firstName": "Jason", "lastName":"Hunter", "email": "bbbb"},
      { "firstName": "Elliotte", "lastName":"Harold", "email": "cccc" },
      { "firstName": "Brett", "lastName":"McLaughlin", "email": "aaaa" },
      { "firstName": "Jason", "lastName":"Hunter", "email": "bbbb"},
      { "firstName": "Elliotte", "lastName":"Harold", "email": "cccc" },
      { "firstName": "Brett", "lastName":"McLaughlin", "email": "aaaa" },
      { "firstName": "Jason", "lastName":"Hunter", "email": "bbbb"},
      { "firstName": "Elliotte", "lastName":"Harold", "email": "cccc" },
      { "firstName": "Brett", "lastName":"McLaughlin", "email": "aaaa" },
      { "firstName": "Jason", "lastName":"Hunter", "email": "bbbb"},
      { "firstName": "Elliotte", "lastName":"Harold", "email": "cccc" },
      { "firstName": "Brett", "lastName":"McLaughlin", "email": "aaaa" },
      { "firstName": "Jason", "lastName":"Hunter", "email": "bbbb"},
      { "firstName": "Elliotte", "lastName":"Harold", "email": "cccc" } 
    ], // 医生所在的列表
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var baseJS = require("../../common/tools/base");
    baseJS.getData("hospital_test", this.getRes);
  },


 // 回调函数
 getRes(res) {
  console.log("你好", res);
  this.setData({
    department: res.data,
  })
},


onChange(event) {
  // console.log(event, this.data.activeKey);
  this.setData({
    activeKey: event.detail
  })
},

})