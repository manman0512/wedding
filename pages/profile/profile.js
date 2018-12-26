// pages/profile/profile.js
const app=getApp();
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
      collectShop: 0,
      collectProd: 0,
      count: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(123);
      wx.request({
          url: 'http://127.0.0.1:3002/profile',
           data: { uid: 1},
          success: (res) => {
              console.log(res.data);
              
              app.globalData.collectShop = res.data.collectShop;
              app.globalData.collectProd = res.data.collectProd;
              app.globalData.count = res.data.count
              this.setData({
                  collectShop: app.globalData.collectShop,
                  collectProd: app.globalData.collectProd,
                  count: app.globalData.count
              })
          }
      })
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
      this.setData({
          collectShop: app.globalData.collectShop,
          collectProd: app.globalData.collectProd,
          count: app.globalData.count
      })
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