# vue-resume-online  简历在线生成器 :page_with_curl:

> 该项目是一个在线填写个人信息等相关简历信息，然后根据用户填写的这些信息，在线生成一份`PDF文档`的个人简历，提供给用户预览以及下载这份填写好的个人简历



## 项目演示:tv:

![图片加载失败](https://user-gold-cdn.xitu.io/2020/6/16/172bdcee311e32a7?imageslim)

## 项目难点
请思考一下，以下的几个问题，有什么解决方案，需要用到什么技术，即便日后你把这个项目写在简历上作为自己初学Vue框架的一个个人的实践项目，相信面试官对你有所青睐。

+ markdown编辑器的原理，怎么去实现一个markdown编辑器的组件？
+ markdown编辑器组件怎么实现图片上传功能？
+ 怎么实现的下载文档功能，以及如何生成PDF格式的简历文件？
+ 项目中是怎么封装组件的，有什么思路或者步骤？
+ 该项目为单纯的前端项目，是如何实现数据持久化的？
+ 项目的即时渲染技术，也就是数据双向绑定，使用了**观察者模式**

## 项目技术栈:black_flag:

| 技术         | 说明                   | 官网                                                                                     |
| :----------- | :--------------------- | :--------------------------------------------------------------------------------------- |
| Vue 2.x      | 前端框架               | [https://vuejs.org/](https://vuejs.org/)                                                 |
| Vue-router   | 前端路由框架           | [https://router.vuejs.org/](https://router.vuejs.org/)                                   |
| Vuex         | 全局状态管理框架       | [https://vuex.vuejs.org/](https://vuex.vuejs.org/)                                       |
| Vue-cli 3.x  | 项目脚手架             | [https://cli.vuejs.org/zh/](https://cli.vuejs.org/zh/)                                   |
| element-ui   | 前端UI框架             | [https://element.eleme.io/](https://element.eleme.io/)                                   |
| mavon-editor | vue插件 markdown编辑器 | [https://github.com/hinesboy/mavonEditor](https://github.com/hinesboy/mavonEditor)       |
| html2canvas  | 将html生成图片         | [https://github.com/niklasvh/html2canvas](https://github.com/niklasvh/html2canvas)       |
| jspdf        | 将图片转换成PDF文档    | [https://mozilla.github.io/pdf.js/examples/](https://mozilla.github.io/pdf.js/examples/) |


## 观察者模式（Observer Pattern）
观察者模式（发布-订阅模式）观察者们监听对象Subject属性的变化，若有变化则Subject则触发notify()方法；这个方法就触发Observer的update()监听回调方法，取完成某些操作。
+ Observer 观察者
  + 属性： name(自身名字) subject(被观察者)
  + 方法： update() 
+ Subject 被观察者
  + 属性： state(状态) obervers(观察者们， 数组)
  + 方法：getState() setState() attach() notify() 

**以下是该项目的安装运行步骤**:arrow_down_small:

## 将本项目克隆至本地
```
git clone git@github.com:ZhengMaster2020/vue-reume-online.git
cd vue-resume-online
```

## 安装依赖
```
npm install
```

### 启动项目
```
npm run serve
```

### 打包项目
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
