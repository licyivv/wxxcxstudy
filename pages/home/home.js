// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles:['衣服','裤子','鞋子']
  },

  handleItemClick(event){
    const dataset = event.currentTarget.dataset;
    const title = dataset.item;
    const index = dataset.index;
    console.log(title,index);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  
  handleTouchStart(){
    console.log('handleTouchStart');
  },

  handleTouchmove(){
    console.log('handleTouchmove');
  },

  handelTouchend(){
    console.log('handelTouchend');
  },

  handleTap(){
    console.log('handleTap');
  },

  handleLongpress(){
    console.log('handleLongpress');
  },

  handleCaptureView1(){
    console.log('handleCaptureView1');
  },

  handleBindView1(){
    console.log('handleBindView1');
  },

  handleCaptureView2(){
    console.log('handleCaptureView2');
  },

  handleBindView2(){
    console.log('handleBindView2');
  },

  handleCaptureView3(){
    console.log('handleCaptureView3');
  },

  handleBindView3(){
    console.log('handleBindView3');
  },
  
})