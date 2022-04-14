import Vue from 'vue';
import store from 'vuex';

Vue.use(store)

export default new store.Store({
  state: {
    // 所有用到网络图片的组件都要使用变量
    imgURL:"http://www.codeboy.com:9999/",
    // 共享登录的用户名
    uname:null //初始值null代表没有用户
  },
  getters: {
  },
  // 用于存储修改state中的值的方法
  mutations: {
    // 如何触发此方法，例如名字更改为王敏
    // $store.commit("upsateUname")
    updateUname(state,uname){
      // 参数1：state,共享的state属性
      // 参数2：自定义传参
      state.uname=uname
      console.log("uname更新为:",uname)
    }
  },
  actions: {
  },
  modules: {
  }
})