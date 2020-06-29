import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const data = [];

const state = {
  modules: {
    base: '基本信息',
    skill: '专业技能',
    intern: '工作经历',
    project: '项目经历',
    education: '教育经历',
  },
  baseMsg: sessionStorage.getItem('baseMsg')
    ? JSON.parse(sessionStorage.getItem('baseMsg'))
    : {
        address: '广州',
        email: '789456@qq.com',
        name: 'zhengmaster',
        phone: '13415645795',
        position: '全栈工程师',
        web: 'www.baidu.com',
      },
  skillMsg: sessionStorage.getItem('skillMsg')
    ? JSON.parse(sessionStorage.getItem('skillMsg'))
    : undefined,
  skillRenderMsg: sessionStorage.getItem('skillMsg')
    ? JSON.parse(sessionStorage.getItem('skillMsg')).skillRenderMsg
    : `<ul>
        <li>扎实的前端基础,HTML5/CSS3;</li>
      <li>
        熟练使用至少一种JS框架，熟练Reactjs、Vue等，掌握其原理，能独立开发常用组件；
      </li>
      <li>熟练掌握盒模型、常用布局以及浏览器和移动设备兼容性；</li>
      <li>
        熟悉前端自动化和工程化；对Webpack、fis3、Gulp等常见构建工具有自己的认知与理解；
      </li>
      <li>熟悉NodeJS开发，熟练使用Git；有hybird开发经验优先；</li>
    </ul>`,
  internMsg: [
    {
      comName: '深圳蝌蚪科技有限公司',
      comAddress: '广东深圳',
      comPosition: 'web前端实习生',
      comPartment: '研发部',
      dateStart: '2019-06',
      dateEnd: '2019-09',
      internValue: `<ul> 
    <li>使用npm和Webpack从零搭建Vue项目架构，从而使用Vue技术栈完成简单的用户管理系统</li> 
    <li>编写自己的项目脚手架，并独立完成项目的整体页面结构及样式层结构的设计与实现</li> 
    <li>编写自己的项目脚手架，并独立完成项目的整体页面结构及样式层结构的设计与实现</li> 
    <li>编写自己的项目脚手架，并独立完成项目的整体页面结构及样式层结构的设计与实现</li> 
    <li>编写自己的项目脚手架，并独立完成项目的整体页面结构及样式层结构的设计与实现</li> 
    <li>根据UI设计的图纸完成一些页面和公用组件的开发</li> 
    <li>根据后端提供的接口，获取相应数据完成页面的渲染，并深入理解浏览器渲染机制</li> </ul>`,
    },
    {
      comName: '深圳蝌蚪科技有限公司',
      comAddress: '广东深圳',
      comPosition: 'web前端实习生',
      comPartment: '研发部',
      dateStart: '2019-06',
      dateEnd: '2019-09',
      internValue: `<ul> 
    <li>使用npm和Webpack从零搭建Vue项目架构，从而使用Vue技术栈完成简单的用户管理系统</li> 
    <li>使用npm和Webpack从零搭建Vue项目架构，从而使用Vue技术栈完成简单的用户管理系统</li> 
    <li>使用npm和Webpack从零搭建Vue项目架构，从而使用Vue技术栈完成简单的用户管理系统</li> 
    <li>编写自己的项目脚手架，并独立完成项目的整体页面结构及样式层结构的设计与实现</li> 
    <li>根据UI设计的图纸完成一些页面和公用组件的开发</li> 
    <li>根据后端提供的接口，获取相应数据完成页面的渲染，并深入理解浏览器渲染机制</li> </ul>`,
    },
  ],
  projectMsg: [
    {
      proName: '求职在线',
      proAddress: '广州',
      proPosition: 'web前端',
      proPartment: '研发部',
      dateStart: '2019-01',
      dateEnd: '2019-02',
      proValue: `<ul> 
    <li>万名呢万名呢万名呢万名呢万名呢万名呢万名呢万名呢万名呢万名呢万名呢万名呢万名呢</li> 
    <li>万名呢万名呢万名呢万名呢万名呢万名呢万名呢万名呢万名呢万名呢万名呢万名呢万名呢</li> 
    <li>万名呢万名呢万名呢万名呢万名呢万名呢万名呢万名呢万名呢万名呢万名呢万名呢万名呢</li> 
    <li>万名呢万名呢万名呢万名呢万名呢万名呢万名呢万名呢万名呢万名呢万名呢万名呢万名呢</li> 
    <li>使用npm和Webpack从零搭建Vue项目架构，从而使用Vue技术栈完成简单的用户管理系统</li> 
    <li>编写自己的项目脚手架，并独立完成项目的整体页面结构及样式层结构的设计与实现</li> 
    </ul>`,
    },
    {
      proName: '求职在线2',
      proAddress: '广州',
      proPosition: 'web前端',
      proPartment: '研发部',
      dateStart: '2019-01',
      dateEnd: '2019-02',
      proValue: `<ul> 
      <li>万名呢万名呢万名呢万名呢万名呢万名呢万名呢万名呢万名呢</li>
      <li>根据UI设计的图纸完成一些页面和公用组件的开发</li> 
      <li>根据UI设计的图纸完成一些页面和公用组件的开发</li> 
      <li>根据UI设计的图纸完成一些页面和公用组件的开发</li> 
      <li>根据UI设计的图纸完成一些页面和公用组件的开发</li> 
      <li>根据UI设计的图纸完成一些页面和公用组件的开发</li> 
    </ul>`,
    },
  ],
  educationMsg: [
    {
      eduSchoolName: 'IT科技大学',
      eduProfession: '计算机科学与技术',
      eduSecCollege: '信息学院',
      eduCity: '东莞',
      dateStart: '2019-08',
      dateEnd: '2019-10',
      eduValue: `<ul> 
    <li>GPA：3.52 / 5.0（专业前6%）| 荣誉/奖项：三等奖学金</li> 
    </ul>`,
      options: [
        {
          value: '选项1',
          label: '大专',
        },
        {
          value: '选项2',
          label: '本科',
        },
        {
          value: '选项',
          label: '硕士',
        },
        {
          value: '选项4',
          label: '博士',
        },
        {
          value: '选项5',
          label: 'MBA',
        },
      ],
      eduDesValue: '',
    },
  ],
  newOtherMsg: [],
};

const mutations = {
  saveBaseMsg(state, base) {
    const baseMsg = state.baseMsg;
    baseMsg.name = base.name;
    baseMsg.phone = base.phone;
    baseMsg.email = base.email;
    baseMsg.address = base.address;
    baseMsg.position = base.position;
    baseMsg.web = base.web;
  },

  saveSkillMsg(state, skill) {
    state.skillMsg = skill;
    data.push(state.skillMsg);
  },

  saveSkillRenderMsg(state, skill) {
    state.skillRenderMsg = skill;
    data.push(state.skillRenderMsg);
  },

  saveInternMsg(state, intern) {
    const internMsg = state.internMsg;
    internMsg.comName = intern.name;
    internMsg.comAddress = intern.address;
    internMsg.comPosition = intern.position;
    internMsg.comPartment = intern.partment;
    internMsg.dateStart = intern.dateStart;
    internMsg.dateEnd = intern.dateEnd;
    internMsg.internValue = intern.internValue;
  },

  saveProjectMsg(state, project) {
    const proMsg = state.projectMsg;
    proMsg.proName = project.proName;
    proMsg.proAddress = project.proAddress;
    proMsg.proPosition = project.proPosition;
    proMsg.proPartment = project.proPartment;
    proMsg.dateStart = project.dateStart;
    proMsg.dateEnd = project.dateEnd;
    proMsg.proValue = project.proValue;
  },

  saveEducationMsg(state, edu) {
    const eduMsg = state.educationMsg;
    eduMsg.eduSchoolName = edu.eduSchoolName;
    eduMsg.eduProfession = edu.eduProfession;
    eduMsg.eduSecCollege = edu.eduSecCollege;
    eduMsg.eduCity = edu.eduCity;
    eduMsg.dateStart = edu.dateStart;
    eduMsg.dateEnd = edu.dateEnd;
    eduMsg.eduValue = edu.eduValue;
    eduMsg.eduDesValue = edu.eduDesValue;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions: {},
});
