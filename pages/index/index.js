Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
        '../images/banner1.jpg',
        '../images/banner2.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 800,
    'new':'../images/new.png',
    'photo': '../images/photo.png',
    'home': '../images/home.png',
    'messages': '../images/message.png',
    'main':'../images/main.jpg',
    'item_pic': '../images/item_pic.png',
    'item_date': '2018.08.10',
    'item_content': '8月第2季 Golden ladies',
    'footer_pic':'../images/footer.jpg',
    'call': '../images/call.jpg',
    'zaixian': '../images/zaixian.jpg',
    'huodong': '../images/huodong.jpg'

  },
  show:function(){
    wx.navigateTo({
      url: '../show/show',
    })
  },
  call: function () {
    wx.makePhoneCall({
      phoneNumber: '18875766716',
    })
  },
  huodongyemian:function(){
    wx.navigateTo({
      url: '../huodong/huodong',
    })
  },
   
  new:function(){
      wx.navigateTo({
        url: '../new/new',
      })
  },
  photo: function () {
    wx.navigateTo({
      url: '../photo/photo',
    })
  },
  home: function () {
    wx.navigateTo({
      url: '../home/home',
    })
  },
  youhui: function () {
    wx.navigateTo({
      url: '../youhui/youhui',
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