import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const data = []

const state =  {
  modules: {
    base: "基本信息",
    skill: "专业技能",
    intern: "实习/工作经历",
    project: "项目经历",
    education: "教育经历"
  },
  baseMsg: {
    name: "张三",
    phone: "1341564446",
    email: "8787626350@qq.com",
    address: "广东广州",
    position: "web前端",
    web: "https://zhengmaster.org.cn"
  },
  skillMsg: '',
  internMsg: {
    comName: "深圳xxx科技有限公司",
    comAddress: "广东深圳",
    comPosition: "web前端",
    comPartment: "研发部",
    dateStart: "2019-06",
    dateEnd: "2019-09",
    internValue: ''
  },   
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
    data.push(baseMsg)
  },

  saveSkillMsg (state, skill) {
    state.skillMsg = skill
    data.push(state.skillMsg)
  },

}

export default new Vuex.Store({
  state,
  mutations,
  actions: {}
});
