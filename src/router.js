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
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children: [
        { path: "/base", component: BaseMessage },
        { path: "/skill", component: PersonalSkill },
        { path: "/intern", component: InternExperience },
        { path: "/education", component: EducationExperience }
      ]
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
