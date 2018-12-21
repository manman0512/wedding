// pages/shoplist/shoplist.js
Page({
    handle1(e){
        var pid=e.target.dataset.pid;
        wx.navigateTo({
            url: '/pages/product/product?pid='+pid,
        })
    },
    loadProduct:function(e){
        var fid=e.target.dataset.id;
        var fname=e.target.dataset.fname;
        // console.log(fname);
        // console.log(fid);
        this.setData({
            btnid: fid,
            title:fname
        })
        wx.request({
            url:"http://127.0.0.1:3002/product",
            data:{fid},
            success:(res)=>{
                // console.log(res);
                this.setData({
                    shoplist:res.data 
                })
            }
        })
    },
  /**
   * 页面的初始数据
   */
  data: {
    btnid:1,
    shoplist:[],
    navlist:[],
    title:"婚礼策划"//右侧标题
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //   console.log(options.fid);
    //   console.log(options);
      var fid=options.fid;
      var title=options.title;
          wx.request({
              url: "http://127.0.0.1:3002/shoplist",
              success: (res) => {
                //   console.log(res.data);
                  this.setData({
                      shoplist: res.data.product,
                      navlist: res.data.shoplist
                  })
              }
          })
        if(fid){
            this.setData({
                btnid:fid,
                title:title
            })
            wx.request({
                url: "http://127.0.0.1:3002/product",
                data: { fid },
                success: (res) => {
                    // console.log(res);
                    this.setData({
                        shoplist: res.data
                    })
                }
            })
        }
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