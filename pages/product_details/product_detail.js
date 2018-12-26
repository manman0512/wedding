// pages/product_details/product_detail.js
const app=getApp()
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
    // wx.getLocation({
    //     type:"gcj02",
    //     success: function(res) {
    //         var latitude=res.latitude;
    //         var longitude=res.longitude;
    //         wx.openLocation({
    //             latitude: latitude,
    //             longitude: longitude,
    //             name:"思慕婚纱",
    //             scale:28
    //         })
    //     },
    // })
       var latitude = Number(this.data.latitude);
       var longitude = Number(this.data.longitude);
       wx.openLocation({

           latitude: latitude,
           longitude: longitude,
           name: this.data.product_detail[0].name,
           scale: 28
       })
   },
   /**收藏 */
 navhandle4(){
     var pid = this.data.pid;
     if(!this.data.collectProd){
         this.setData({
             collectProd: true
         });
         let num=parseInt(app.globalData.collectProd)+1;
         app.globalData.collectProd=num
         
         wx.request({
             url: 'http://127.0.0.1:3002/addcollectProd',
             data: { uid: 1, pid: pid },
             success: (res) => {
                 console.log(res);
             }
         })
     }else{
         this.setData({
             collectProd: false
         })
         let num = parseInt(app.globalData.collectProd)-1;
         app.globalData.collectProd = num
         wx.request({
             url: 'http://127.0.0.1:3002/delcollectProd',
             data: { uid: 1, pid: pid },
             success: (res) => {
                 console.log(res);
             }
         })
     }
     
 },
  /**
   * 页面的初始数据
   */
  data: {
      product_detail:[],
      latitude: "",
      longitude:"",
      tel: "",
      pid:0,
      collectProd:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        
        this.setData({
            pid:options.pid
        })
        wx.request({
            url: 'http://127.0.0.1:3002/product_detail',
            data: { pid: options.pid},
            success:(res)=>{
                // console.log(res);
                this.setData({
                    product_detail:res.data,
                    latitude: res.data[0].latitude,
                    longitude: res.data[0].longitude,
                    tel: res.data[0].tel
                })
            }
        })
        wx.request({
            url: 'http://127.0.0.1:3002/collectProd',
            data: { uid:1,pid: options.pid }, 
            success:(res)=>{
                console.log(res);
                if(res.data.code==1){
                    this.setData({
                        collectProd: true
                    })
                }
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