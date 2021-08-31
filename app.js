// app.js
App({
  // 对象：小程序关闭掉内存会被回收
  globalData: {
    token : ''
  },
  onLaunch:function() {
    // 1.先从缓存中取出token
    const token = wx.getStorageSync('token')
    // 2.判断token是否有值
    if(token && token.length !== 0){
      //有token，验证token是否过期
      this.check_token(token)
    }else{ //没有token，进行登录操作
      this.login()
    }
  },
  check_token(token){
    // console.log('执行了登录验证操作');
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method:'POST',
      header:{
        token
      },
      success:(res)=>{
        if(!res.data.errCode){
          // console.log('token有效');
          this.globalData.token = token;
        }else{
          this.login();
        }
      },
      fail:function(err){
        console.log(err);
      }
    })
  },

  login(){
    // console.log('执行了登录操作');
     // 登录操作
     wx.login({
      // code只有五分钟的有效期
      success: (res)=>{
        // 1.获取code
        const code = res.code;
        // 2.将code发送给我们的服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: "POST",
          data:{
            code
          },
          success:(res)=>{
            // 1.取出token
            const token = res.data.token;

            // 2.将token保存在globaData中
            this.globalData.token = token;
            console.log(this.globalData.token);
            // 3.进行本地存储
            wx.setStorageSync('token', token) //同步 依次执行
            // 异步，不会等待，直接执行下一次的代码 wx.setStorage(option)
           
          }
        })
      }
    })
  }
})
