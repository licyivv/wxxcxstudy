// pages/demo04/demo04.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0
  },
  //输入框的input事件的执行逻辑
  handleInput(e){
    // console.log(e.detail.value);
    this.setData({
      num:e.detail.value
    })
  },
  //加 减 按钮事件
  handleTap(e){
    const operation = e.currentTarget.dataset.operation;
    this.setData({
      num : this.data.num+operation
    })
  },
})