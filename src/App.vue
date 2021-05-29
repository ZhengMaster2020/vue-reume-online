<template>
  <div id="app" class="default-theme">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <!-- <div id="vs"></div> -->
  </div>
</template>

<script>
// import Player from 'xgplayer'
// export default {
//   mounted() {
//     new Player({
//       id: 'vs',
//       url: 'http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4'
//     })
//   }
// }
</script>

<style lang="less">
@import './assets/css/common.less';

// 可以根据Element的自定义主题进行设置 实现网站换肤功能
// .el-button--success {
//   color: #fff;
//   background-color: #00c091 !important;
//   border-color: #00c091 !important;
// }

// .el-button--success:hover {
//   background-color: #11a480 !important;
//   border-color: #11a480 !important;
// }

.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
