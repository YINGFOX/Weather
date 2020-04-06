Page({

  /**
   * 页面的初始数据
   */
  data: {
    province: '',
    city: '',
    now: null,
    loc: ''
  },
  // 切换城市时
  changeCity: function (e) {
    this.setData({
      province: e.detail.value[0],
      city: e.detail.value[1]
    })
    this.getWeather2();
  },
  // 获取本地天气信息
  getWeather: function () {
    let that = this;
    wx.request({
      url: 'https://free-api.heweather.net/s6/weather/now?',
      header: {
        'Content-Type': 'application/json'
      },
      data: {
        location: that.data.loc,
        key: '24573a41a4cb439bb3362ec0f36c5865'
      },
      success: function (res) {
        // console.log(res)
        that.setData({
          now: res.data.HeWeather6[0].now,
          province: res.data.HeWeather6[0].basic.admin_area,
          city: res.data.HeWeather6[0].basic.parent_city
        })
      }
    })
  },
  //获取查询的地址
  getWeather2: function () {
    let that = this;
    wx.request({
      url: 'https://free-api.heweather.net/s6/weather/now?',
      header: {
        'Content-Type': 'application/json'
      },
      data: {
        location: that.data.city,
        key: '24573a41a4cb439bb3362ec0f36c5865'
      },
      success: function (res) {
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
    let that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude;
        var longitude = res.longitude;
        var locat = latitude.toString() + "," + longitude.toString();
        that.data.loc = locat;
        that.getWeather();
      },
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