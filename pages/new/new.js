// pages/new/new.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'header_pic':'../images/main.jpg',
    'call': '../images/call.jpg',
    'zaixian': '../images/zaixian.jpg',
    'huodong': '../images/huodong.jpg',
    list:[
      {
        item_pic: '../images/item_pic.png',
        item_date: '2018.08.10',
        item_content: '8月第2季 Golden ladies',
      },
      {
        item_pic: '../images/item_pic.png',
        item_date: '2018.08.10',
        item_content: '8月第2季 Golden ladies',
      },
      {
        item_pic: '../images/item_pic.png',
        item_date: '2018.08.10',
        item_content: '8月第2季 Golden ladies',
      },
      {
        item_pic: '../images/item_pic.png',
        item_date: '2018.08.10',
        item_content: '8月第2季 Golden ladies',
      },
    ],
    
      // imgHttp: app.globalData.imgHttp,
      // list: [],
      //page: 1,
 },
  call: function () {
    wx.makePhoneCall({
      phoneNumber: '18875766716',
    })
  },
  // lower: function (e) {
  //   var that = this
  //   that.setData({
  //     page: that.data.page + 1  //后台数据需要分页，每次加载一页
  //   })
  //   var page = that.data.page
  //   var pageSize = 2  //改变pageSize的值默认加载每页的数量
  //   wx.request({
  //     url: request_url,
  //     data: {
  //       'page': page,
  //       'pageSize': pageSize,
  //     },
  //     success: function (res) {
  //       if (res.data.code == 200) {
  //         let List = that.data.list
  //         let list = res.data.content
  //         for (var i = 0; i < list.length; i++) {
  //           List.push(list[i])  //循环遍历添加数组
  //         }
  //         that.setData({
  //           list: List,
  //         })
  //       }
  //       else {
  //         wx.showToast({
  //           title: '没有了哦',
  //           icon: 'loading'
  //         })
  //       }
  //     }
  //   })
  // },

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