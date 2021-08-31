// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemclick(event){
      // 取出index
      const index = event.currentTarget.dataset.index;
      // 修改 currentIndex
      this.setData({
        currentIndex : index 
      })
      // console.log(index);

      // 通知页面点击事件
      this.triggerEvent('itemClick',{index,titles:this.properties.titles[index]},{})
    }
  }
})
