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
    comName: "深圳蝌蚪@科技有限公司",
    comAddress: "广东深圳",
    comPosition: "web前端",
    comPartment: "研发部",
    dateStart: "2019-06",
    dateEnd: "2019-09",
    internValue: ''
  }, 
  projectMsg: {
    proName: "求职在线",
    proAddress: "广州",
    proPosition: "web前端",
    proPartment: "研发部",
    dateStart: "2019-01",
    dateEnd: "2019-02",
    proValue: ''
  },
  educationMsg: {
    eduSchoolName: "IT科技大学",
    eduProfession: "计算机科学与技术",
    eduSecCollege: "信息学院",
    eduCity: "东莞",
    dateStart: "2019-08",
    dateEnd: "2019-10",
    eduValue: "",
    options: [
      {
        value: "选项1",
        label: "大专"
      },
      {
        value: "选项2",
        label: "本科"
      },
      {
        value: "选项",
        label: "硕士"
      },
      {
        value: "选项4",
        label: "博士"
      },
      {
        value: "选项5",
        label: "MBA"
      }
    ],
    eduDesValue: ""
  },
  newOtherMsg: []  
}

const mutations = {

  saveBaseMsg (state, base) {
    const baseMsg = state.baseMsg
    baseMsg.name =  base.name
    baseMsg.phone = base.phone
    baseMsg.email = base.email
    baseMsg.address = base.address
    baseMsg.position = base.position
    baseMsg.web = base.web
  },

  saveSkillMsg (state, skill) {
    state.skillMsg = skill
    data.push(state.skillMsg)
  },

  saveInternMsg (state, intern) {
    const internMsg = state.internMsg
    internMsg.comName = intern.name 
    internMsg.comAddress = intern.address 
    internMsg.comPosition = intern.position 
    internMsg.comPartment = intern.partment 
    internMsg.dateStart = intern.dateStart 
    internMsg.dateEnd = intern.dateEnd 
    internMsg.internValue = intern.internValue 
  },

  saveProjectMsg (state, project) {
    const proMsg = state.projectMsg
    proMsg.proName = project.proName
    proMsg.proAddress = project.proAddress
    proMsg.proPosition = project.proPosition
    proMsg.proPartment = project.proPartment
    proMsg.dateStart = project.dateStart
    proMsg.dateEnd = project.dateEnd
    proMsg.proValue = project.proValue
  },

  saveEducationMsg (state, edu) {
    const eduMsg = state.educationMsg
    eduMsg.eduSchoolName = edu.eduSchoolName
    eduMsg.eduProfession = edu.eduProfession
    eduMsg.eduSecCollege = edu.eduSecCollege
    eduMsg.eduCity = edu.eduCity
    eduMsg.dateStart = edu.dateStart
    eduMsg.dateEnd = edu.dateEnd
    eduMsg.eduValue = edu.eduValue
    eduMsg.eduDesValue = edu.eduDesValue
  },

    

}

export default new Vuex.Store({
  state,
  mutations,
  actions: {}
});
