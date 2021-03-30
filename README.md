# :earth_americas: vue-resume-online 简历在线生成器 

> 该项目是一个在线填写个人信息等相关简历信息，然后根据用户填写的这些信息，在线生成一份`PDF文档`的个人简历，提供给用户预览以及下载这份填写好的个人简历

## :tv: ​项目演示

![图片加载失败](https://user-gold-cdn.xitu.io/2020/6/16/172bdcee311e32a7?imageslim)

## :customs: ​项目难点

请思考一下，以下的几个问题，有什么解决方案，需要用到什么技术，即便日后你把这个项目写在简历上作为自己初学 Vue 框架的一个个人的实践项目，相信面试官对你有所青睐。

- markdown 编辑器的原理，怎么去实现一个 markdown 编辑器的组件？
- markdown 编辑器组件怎么实现图片上传功能？
- 怎么实现的下载文档功能，以及如何生成 PDF 格式的简历文件？
- 项目中是怎么封装组件的，有什么思路或者步骤？
- 该项目为单纯的前端项目，是如何实现数据持久化的？
- 项目的即时渲染技术，也就是数据双向绑定，使用了**观察者模式**

* VueRoute 以及相关技术
  - 路由过渡动画效果是怎么实现的？
  - 路由组件的懒加载是怎么实现的，以及为什么要懒加载？
    - Vue 的异步组件`import()`加上 Webpack 的代码分割`code split`功能
  - 基于导航守卫进行项目权限路由拦截功能？

    - 全局的`router.beforeEach()`

## :repeat_one: ​路由守卫

[VueRouter](https://router.vuejs.org/zh/)的导航守卫分为**全局**守卫钩子与**局部（组件）**守卫钩子，所谓的钩子就是项目运行到一个相应的我阶段可以调用的方法来实现某些功能。通常在VueRouter项目中我们用的相对较多的守卫钩子就是`beforeEach`、`beforeRouteUpdate`,在这里我就不教大家去一一学习对应的守卫钩子，倘若自己对这一快知识比较模糊的话，可以去VueRouter官方网站进行充电 :arrow_right: [https://router.vuejs.org/zh/](https://router.vuejs.org/zh/)

+ 功能点：基于Vue的全局前置守卫钩子`beforeEach` 实现登录鉴权

  + 项目知识的单纯的前端项目， 在无后端以及无服务器无数据库的情况下只能单纯基于`js-cookies`这个库来简单实现登录鉴权功能。

  + 思路

    + 使用`js-cookies`存储一个userInfo对象，该对象为当前登录改系统的用户信息，userInfo有记录用户名与密码
    + 用户每次登录系统，都从Cookies里面读取个人userInfo，倘若userInfo这个对象存在而且用户名和密码都不为空，用户成功登录系统
    + 倘若userInfo或用户名或密码为空，则无论用户在改系统进行什么页面跳转都重定向至登录界面

  + 具体代码

    + 定义路由

      ```js
      import Vue from 'vue'
      import Router from 'vue-router'
      import Cookies from 'js-cookies'
      
      Vue.use(Router)
      
      const router = new Router({
        mode: 'history',
        base: '/',
        routes: [
          {
            path: '/',
            name: 'home',
            redirect: '/base',
            component: Home,
            children: []
          },
          {
            path: '/login',
            name: 'login',
            component: () => import('./views/Login')
          },
        ]
      })
      
      // 路由权限验证 有权限进入系统 无权限则跳转登录页
      // to.name: 当前路由的名字，'login'为登录界面组件的name
      router.beforeEach((to, from, next) => {
        const userInfo = JSON.parse(Cookies.getItem('userInfo'))
        if (to.name !== 'login' && !userInfo) {
          next({ path: '/login', name: 'login' })
        } else next()
      })
      
      export default router
      
      ```

      ```vue
      Login.vue
      
      <script>
      import Cookies from 'js-cookies'
      import bgImgOne from '@/assets/images/banner1.png'
      import bgImgTwo from '@/assets/images/banner2.png'
      
      export default {
        data() {
          return {
            bgImgArr: [bgImgOne, bgImgTwo],
            form: { name: '', password: '' },
            btnLoading: false,
            btnDisabled: true,
            loginBtnDisabled: true
          }
        },
      
        methods: {
          onSave(name) {
            this.$refs[name].validate(valid => {
              if (valid) {
                this.btnLoading = true
                setTimeout(() => {
                  this.btnLoading = false
                  // 每次登录把最新的用户信息存入Cookies
                  Cookies.setItem('userInfo', JSON.stringify(this.form), { expires: 3 })
                  this.$message.success('登录成功！')
                  this.$router.push('/')
                }, 500)
              }
            })
          },
        }
      }
      </script>
      ```

      

![login page show](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/93f7d30dd9f34a65b3cc6287d70f512f~tplv-k3u1fbpfcp-watermark.image)

## 项目技术栈:black_flag:

| 技术         | 说明                     | 官网                                                                                     |
| :----------- | :----------------------- | :--------------------------------------------------------------------------------------- |
| Vue 2.x      | 前端框架                 | [https://vuejs.org/](https://vuejs.org/)                                                 |
| Vue-router   | 前端路由框架             | [https://router.vuejs.org/](https://router.vuejs.org/)                                   |
| Vuex         | 全局状态管理框架         | [https://vuex.vuejs.org/](https://vuex.vuejs.org/)                                       |
| Vue-cli 3.x  | 项目脚手架               | [https://cli.vuejs.org/zh/](https://cli.vuejs.org/zh/)                                   |
| element-ui   | 前端 UI 框架             | [https://element.eleme.io/](https://element.eleme.io/)                                   |
| mavon-editor | vue 插件 markdown 编辑器 | [https://github.com/hinesboy/mavonEditor](https://github.com/hinesboy/mavonEditor)       |
| html2canvas  | 将 html 生成图片         | [https://github.com/niklasvh/html2canvas](https://github.com/niklasvh/html2canvas)       |
| jspdf        | 将图片转换成 PDF 文档    | [https://mozilla.github.io/pdf.js/examples/](https://mozilla.github.io/pdf.js/examples/) |

## 观察者模式（Observer Pattern）

观察者模式（发布-订阅模式）观察者们监听对象 Subject 属性的变化，若有变化则 Subject 则触发 notify()方法；这个方法就触发 Observer 的 update()监听回调方法，取完成某些操作。

- Observer 观察者
  - 属性： name(自身名字) subject(被观察者)
  - 方法： update()
- Subject 被观察者
  - 属性： state(状态) obervers(观察者们， 数组)
  - 方法：getState() setState() attach() notify()

待续。。。。

**以下是该项目的安装运行步骤**:arrow_down_small:

## 将本项目克隆至本地

```
git clone git@github.com:ZhengMaster2020/vue-reume-online.git
cd vue-resume-online
```

## 安装依赖

```sh
建议： 淘宝镜像
cnpm i

npm install
```

### 启动项目

```sh
npm run dev
```

### 打包项目

```
npm run build

或

yarn build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
