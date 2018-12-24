// pages/product/product.js
Page({
handle1(){
    wx.navigateTo({
        url: '/pages/introduct/introduct',
    })
},
handle2(e){
    var pid=e.target.dataset.pid;
    wx.navigateTo({
        url:"/pages/product_details/product_detail?pid="+pid
    })
},
  /**
   * 页面的初始数据
   */
  data: {
      indicatorDots: true,
      autoplay: true,
      beforeColor: "#2f2d2d99",
      afterColor: "#fff",
    shop_detail:{},
    productlist:[],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options);
    var sid=options.sid 
    console.log(sid)
    wx.request({
        url:'http://127.0.0.1:3002/shopdetail',
        data:{sid},
        success:(res)=>{
            console.log(res);
            this.setData({
                shop_detail:res.data.shop_detail,
                productlist:res.data.product_list
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