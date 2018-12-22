// pages/profile/profile.js
Page({
    handle1() {
        wx.showActionSheet({
            itemList: ["139-9999-9999", "呼叫"],
            success: (res) => {
                if (res.tapIndex == 1) {
                    wx.showModal({
                        title: "呼叫",
                        content: `139-9999-6666`,
                        success: (res) => {
                            console.log(res);
                            if (res.confirm) {
                                // wx.showToast({
                                //     title: '暂时还不能呼叫哦~',
                                //     icon:"none",
                                // });
                                wx.makePhoneCall({
                                    phoneNumber: '13999999999',
                                    success(res){
                                        console.log(`拨打成功`);
                                    },
                                    fail(){
                                        console.log(`拨打失败`);
                                    }
                                })
                                // setTimeout(function () {
                                //     wx.hideToast();
                                // }, 1500)
                            }
                        }
                    })
                } 
            }
        })
    },
  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})