// pages/home2/home2.js
Page({
  /**
   * 弹窗
   */
  handleshowToast(){
    wx.showToast({
      title: 'hello',
      duration:3000,
      icon:'loading',
      mask:true,   //遮罩层，按完之后不能够按其他按钮，防误触
      success:function(){
        console.log('展示弹窗成功');
      },
      fail:function(){
        console.log('展示弹窗失败');
      },
      complete:function(){
        console.log('完成函数的调用');
      }
    })
  },
  handleshowModal(){
    wx.showModal({
      title:'我是标题',
      content:'我是内容',
      // showCancel:false,
      cancelText:'退出',
      cancelColor:'#EDEDED',
      success:function(res){
        console.log(res);
        if(res.cancel){
          console.log('用户点击了取消按钮');
        }
        if(res.confirm){
          console.log('用户点击了确认按钮');
        }
      }
    })
  },
  handleshowLoad(){
    wx.showLoading({
      title: '加载ing',
      mask:true,  //蒙版

    })
    setTimeout(() => {
      // 必须手动调用才能让loading消失
      wx.hideLoading()
    },1000)
  },
  handleshowAct(){
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      success:function(res){
        console.log(res);
        switch(res.tapIndex){
          case 0: ;
        }
      }
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return{
      title:'欢迎使用小程序',   //转发标题
      path:'/pages/home1/home1',  //进入的页面
      imageUrl:'https://aecpm.alicdn.com/simba/img/TB1j4LLKpXXXXcbaXXXSutbFXXX.jpg'   //图片地址,展示的图片
    }
  },
  handleBack(){
    wx.navigateBack({
      delta: 2
    })
  }
})