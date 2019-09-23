import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const BaseMessage =  () => import(/* webpackChunkName: "baseMsg" */ "./components/BaseMessage.vue")
const PersonalSkill = () => import( /* webpackChunkName: "skillMsg" */ "./components/PersonalSkill.vue")
const InternExperience = () => import( /* webpackChunkName: "internMsg" */ "./components/InternExperience.vue")
const EducationExperience = () => import( /* webpackChunkName: "educationMsg" */ "./components/EducationExperience.vue")

export default new Router({
  mode: "history",
  base: '/',
  routes: [
    {
      path: "/",
      name: "home",
      redirect: '/base',
      component: Home,
      children: [
        { path: "/base", name: 'base', component: BaseMessage },
        { path: "/skill", name: 'skill', component: PersonalSkill },
        { path: "/intern",name: 'intern',  component: InternExperience },
        { path: "/education", component: EducationExperience }
      ]
    },
    {
      path: "/preview",
      name: "preview",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "showEdit" */ "./views/ShowEdit.vue")
    }
  ]
});
