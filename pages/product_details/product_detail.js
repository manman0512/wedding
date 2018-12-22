// pages/product_details/product_detail.js
Page({
    /**进入店铺 */
    handle1(){
        wx.navigateBack({
           delta:1
        })
    },
    /**返回首页 */
   navhandle1(){
    wx.reLaunch({
        url: '/pages/index/index',
    })
   },
   /**客服*/
   navhandle2() {
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
                            wx.makePhoneCall({
                                phoneNumber: '13999999999',
                                success(res) {
                                    console.log(`拨打成功`);
                                },
                                fail() {
                                    console.log(`拨打失败`);
                                }
                            })
                        }
                    }
                })
            }
        }
    })
   },
    /**导航 */
   navhandle3(){
    wx.getLocation({
        type:"gcj02",
        success: function(res) {
            var latitude=res.latitude;
            var longitude=res.longitude;
            wx.openLocation({
                latitude: latitude,
                longitude: longitude,
                name:"思慕婚纱",
                scale:28
            })
        },
    })
   },
   /**收藏 */
 navhandle4(){

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