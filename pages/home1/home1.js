// pages/home1/home1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0,
    submit:true
  },

  handleIncrement(){
    this.setData({
      count: this.data.count + 1
    })
  },
  handletabClick(event){
    console.log(event);
  },
  handleIncrementCpn(){
    // console.log('---');
    // 修改my-sel中的counter this代表page对象 要把page对象换成组件对象
    const my_sel = this.selectComponent('.sel-class');
    console.log(my_sel);
    // my_sel.setData({
    //   counter:my_sel.data.counter + 1
    // })
    
    // 通过方法对数据进行修改
    my_sel.incrementCounter(1)
  },
  handleChangeShow(){
    this.setData({
      submit:!this.data.submit
    })
  }

})