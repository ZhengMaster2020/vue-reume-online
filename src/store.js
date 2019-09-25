import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state =  {
  baseMsg: {
    name: "张三",
    phone: "1341564446",
    email: "8787626350@qq.com",
    address: "广东广州",
    position: "web前端",
    web: "https://zhengmaster.org.cn"
}
}

const mutations = {

  saveBaseMsg (state, message) {
    const baseMsg = state.baseMsg
    baseMsg.name = message.name
    baseMsg.phone = message.phone
    baseMsg.email = message.email
    baseMsg.address = message.address
    baseMsg.position = message.position
    baseMsg.web = message.web
    
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions: {}
});
