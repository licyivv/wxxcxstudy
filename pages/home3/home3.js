// pages/home3/home3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'hhh'
  },

  handlePush(){
    wx.navigateTo({
      url: '/pages/home2/home2?title=aann',
    })
  },
  
})