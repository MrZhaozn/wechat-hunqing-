// pages/youhui/youhui.js

var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'can_bg':'../images/new.jpg',
    'cant_bg':'../images/old.jpg',
    toView: 'red',
    scrollTop:100,
    'can':'flex',
    'cant':'none',
    'canone':'hover',
    'cantone':'',
    'show': 'block',
    'hidden': 'none',
    'can_list':[{
      'money':'30.00',
      'tiaojian':'无门槛',
      'shijian':'2016.2.9-2018.10.9'
    },
      {
        'money': '120.00',
        'tiaojian': '满500减120',
        'shijian': '2018.2.9-2018.12.25'
      },
      {
        'money': '95.00',
        'tiaojian': '新人福利无门槛',
        'shijian': '永久期限'
      }
    ],
    'cant_list': [{
      'money': '20.00',
      'tiaojian': '每满60减20',
      'shijian': '2016.2.9-2018.1.9'
    },
    {
      'money': '600.00',
      'tiaojian': '满600减600',
      'shijian': '2018.2.9-2018.3.25'
    },
    {
      'money': '76.00',
      'tiaojian': '新人福利无门槛',
      'shijian': '2018.3.6-2018.4.9'
      },
      {
        'money': '85.00',
        'tiaojian': '七夕幸福礼包',
        'shijian': '2018.3.6-2018.7.7'
      }
    ]
  },
  can:function(e){
    console.log(e)
    this.setData({
      'can': 'flex',
      'cant': 'none',
      'canone': 'hover',
      'cantone': '',
      'show': 'block',
      'hidden': 'none',
    })
  },
  cant:function(e){
      console.log(e)
      this.setData({
        can:'none',
        cant:'flex',
        canone:'',
        cantone:'hover',
        'show': 'none',
        'hidden': 'block',
      })
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
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