import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'js-cookies'
import Home from './views/Home'

Vue.use(Router)

const BaseMessage = () =>
  import(/* webpackChunkName: "baseMsg" */ './components/experience-components/ExperienceBase.vue')
const PersonalSkill = () =>
  import(
    /* webpackChunkName: "skillMsg" */ './components/experience-components/ExperienceSkill.vue'
  )
const InternExperience = () =>
  import(
    /* webpackChunkName: "internMsg" */ './components/experience-components/ExperienceInter.vue'
  )
const EducationExperience = () =>
  import(
    /* webpackChunkName: "educationMsg" */ './components/experience-components/ExperienceEducation.vue'
  )
const ProjectExperience = () =>
  import(
    /* webpackChunkName: "projectMsg" */ './components/experience-components/ExperienceProject.vue'
  )

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/base',
      component: Home,
      children: [
        { path: '/base', name: 'base', component: BaseMessage },
        { path: '/skill', name: 'skill', component: PersonalSkill },
        { path: '/intern', name: 'intern', component: InternExperience },
        { path: '/education', name: 'education', component: EducationExperience },
        { path: '/project', name: 'project', component: ProjectExperience }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login')
    },
    {
      path: '/preview',
      name: 'preview',
      component: () => import(/* webpackChunkName: "showEdit" */ './views/ShowEdit')
    }
  ]
})

// 路由权限验证 有权限进入系统 无权限则跳转登录页
router.beforeEach((to, from, next) => {
  const userInfo = JSON.parse(Cookies.getItem('userInfo'))
  if (to.name !== 'login' && !userInfo) {
    next({ path: '/login', name: 'login' })
  } else next()
})

export default router
