// app.js
App({
 
  // 全局数据
  globalData: {
    openid:''
  },

  onLaunch:function(){
    //云开发的初始化
    wx.cloud.init({
      env: 'cloud1-3go0d9m281e0bcfe'
    }),
    wx.cloud.callFunction({
        name:'getUserId',
        complete:res => {
          this.globalData.openid = res.result.openid;
          wx.setStorageSync('openid', res.result.openid);
        }
    });
  }
})