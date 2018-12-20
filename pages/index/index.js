Page({
    imgload(){
        wx.request({
            url: 'http://127.0.0.1:3002/indexImages',
            success:(res)=>{
                console.log(res);
                this.setData({
                    bannerlist:res.data.banner,
                    iconlist:res.data.icon,
                    recomlist:res.data.recom,
                    shoplist:res.data.shop
                })
            }
        })
    },
  /**
   * 页面的初始数据
   */
  data: {
    bannerlist:[],
    indicatorDots:true,
    autoplay:true,
    beforeColor:"#2f2d2d99",
    afterColor:"#fff",
    iconlist: [],
    recomlist:[],
    shoplist:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.imgload();
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