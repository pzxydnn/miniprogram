App({
  onLaunch: function () {
    //云开发初始化
    wx.cloud.init({
      env : "pzxy-dnn"
    })
  }
})