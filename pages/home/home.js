// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'head':'../images/home1.jpg',
    'center': '../images/home2.jpg',
    'footer': '../images/home3.jpg',
    'text_header':'8090婚纱摄影是由一群热爱摄影并具有多年行业经验的有活力、时尚的年轻人组成。摄影以专业从事摄影行业的连锁经营发展道路观，历经多年耕耘，步履扎实，稳健发展，在秦皇岛摄影行业具有较强的影响力。致力于更广阔的前景开发。',
    'text_style':'8090摄影风格：',
    'text_content':'唯美、时尚、个性、典雅、并附有剧情式拍摄手法，努力为您打造专属您私人订制的风格，留住精彩瞬间。',
    'address':'地址：xxxxxxxxx婚纱摄影',
    'phone':'联系电话：1233211234567',
    'time': '营业时间：8：00-18:00',
    'call': '../images/call.jpg',
    'zaixian': '../images/zaixian.jpg',
    'huodong': '../images/huodong.jpg'

  },
  call: function () {
    wx.makePhoneCall({
      phoneNumber: '18875766716',
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