Page({
    /**
     * 页面的初始数据
     */
    data: {
        userInfo: "",
        disabled: true,
    },

    setDisabled() {
        this.setData({
            disabled: false,
        });
    },

    radioChange: function () {
        this.setDisabled();
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) { },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () { },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () { },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () { },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () { },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () { },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () { },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () { },

    // bindGetUserInfo:function(e){
    //     console.log('bindGetUserInfo', e);
    // },

    login() {
        let that = this;
        console.log("尝试登录");


        wx.getUserProfile({
            desc: "必须授权才能使用",
            success: (res) => {
                let user = res.userInfo;
                wx.setStorageSync("user", user);

                that.userInfo = user;

                console.log("登录成功", that.userInfo);

                var app = getApp();
                console.log('hello openid: ', wx.getStorageSync('openid'));    

                wx.showToast({
                  icon: 'success',
                  title: '登录成功',
                });

                if (user) {
                  wx.navigateTo({
                      url: '../searchhop/searchhop',
                  })
                }
            },

            fail: (res) => {
                console.log("失败", res);
                wx.showToast({
                    icon: 'error',
                    title: '授权失败',
                });
            },
        });
    },
});
