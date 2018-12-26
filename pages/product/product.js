// pages/product/product.js
const app=getApp();
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
handle3(e){
    var sid = this.data.sid;
    if(!this.data.collectShop){
        this.setData({
            collectShop: true
        });
        let num = parseInt(app.globalData.collectShop)+1;
        app.globalData.collectShop = num;
        wx.request({
            url: 'http://127.0.0.1:3002/addcollectShop',
            data: { uid: 1, sid: sid },
            success: (res) => {
                // console.log(res);
                
            }
        })

    }else{
        this.setData({
            collectShop: false
        });
        let num = parseInt(app.globalData.collectShop)-1;
        app.globalData.collectShop=num;
        wx.request({
            url: 'http://127.0.0.1:3002/delcollectShop',
            data: { uid: 1, sid: sid },
            success: (res) => {
                // console.log(res);

            }
        })
    }
    
},
handle4(e){
    var sid = this.data.sid;
    if(!this.data.count){
        this.setData({
            count: true
        });
        let num = parseInt(app.globalData.count)+1;
        app.globalData.count = num;
        wx.request({
            url: 'http://127.0.0.1:3002/addcount',
            data: { uid: 1, sid: sid },
            success: (res) => {
                // console.log(res);
                
            }
        })
    }else{
        this.setData({
            count: false
        });
        let num = parseInt(app.globalData.count)-1;
        app.globalData.count = num;
        wx.request({
            url: 'http://127.0.0.1:3002/delcount',
            data: { uid: 1, sid: sid },
            success: (res) => {
                // console.log(res);

            }
        })
    }
    
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
    collectShop:false,
    count:false,
    sid:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
          var sid = options.sid;
          this.setData({
              sid: sid
          });
        //   console.log(`我是`+sid);
          wx.request({
              url: 'http://127.0.0.1:3002/collectShop',
              data: { uid:1,sid:sid },
              success: (res) => {
                  console.log(res);
                  if (res.data.code ==1) {
                      this.setData({
                          collectShop: true
                      });
                  }
              }
          })
          wx.request({
              url: 'http://127.0.0.1:3002/count',
              data: { uid: 1, sid: sid },
              success: (res) => {
                  console.log(res.data.code);
                  if (res.data.code ==1) {
                      this.setData({
                          count: true
                      });
                  }
              }
          })
    // console.log(options);
    // var sid=options.sid 
    // console.log(sid)
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