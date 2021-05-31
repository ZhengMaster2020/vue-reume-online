<template>
  <div id="app" class="default-theme">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style lang="less">
@import './assets/css/common.less';

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
