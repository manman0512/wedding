Page({

  /**
   * 页面的初始数据
   */
  data: {
    imglist:[
        { lid: 1, img_url: 'http://127.0.0.1:3002/img/banner1.jpg' },
        { lid: 2, img_url: 'http://127.0.0.1:3002/img/banner2.jpg' },
        { lid: 3, img_url: 'http://127.0.0.1:3002/img/banner3.jpg' },
        { lid: 4, img_url: 'http://127.0.0.1:3002/img/banner4.jpg' }
    ],
    indicatorDots:true,
    autoplay:true,
    beforeColor:"#2f2d2d99",
    afterColor:"#fff",
    navlist: [
        { lid: 1, icon_url: 'http://127.0.0.1:3002/icons/cehua.png',title:"婚礼策划"},
        { lid: 2, icon_url: 'http://127.0.0.1:3002/icons/hunsha.png',title:"婚纱摄影" },
        { lid: 3, icon_url: 'http://127.0.0.1:3002/icons/lifu.png',title:"婚纱礼服"},
        { lid: 4, icon_url: 'http://127.0.0.1:3002/icons/shoushi.png',title:"婚礼首饰" },
        { lid: 5, icon_url: 'http://127.0.0.1:3002/icons/hunyanjiudian.png',title:"婚宴酒店" },
        { lid: 6, icon_url: 'http://127.0.0.1:3002/icons/jiu.png',title:"婚宴用酒" },
        { lid: 7, icon_url: 'http://127.0.0.1:3002/icons/hunlisiyi.png',title:"婚礼司仪" },
        { lid: 8, icon_url: 'http://127.0.0.1:3002/icons/hunliyongpin.png',title:"婚礼用品" },
        { lid: 9, icon_url: 'http://127.0.0.1:3002/icons/huayi.png',title:"花艺甜品" },
        { lid: 10, icon_url: 'http://127.0.0.1:3002/icons/gengduo.png',title:"更多分类" },
    ],
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