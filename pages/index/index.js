Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['河南省', '洛阳市', '洛龙区'],
    now: null,
   },
  // 切换城市时
  changeCity: function (e) {
    // console.log(e)
    this.setData({
      region: e.detail.value
    })
    this.getWeather();
  },
  // 获取天气信息
  getWeather: function () {
    let that = this;
    wx.request({
      url: 'https://free-api.heweather.net/s6/weather/now?',
      header: {
        'Content-Type': 'application/json'
      },
      data: {
        location: that.data.region[1],
        key: '24573a41a4cb439bb3362ec0f36c5865'
      },
      success: function (res) {
        // console.log(res)
        that.setData({
          now: res.data.HeWeather6[0].now,
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getWeather();
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