<template>
  <div id="app" class="default-theme">
    <router-view />
  </div>
</template>

<style lang="less">
@import './assets/css/common.less';

.el-button--success {
  color: #fff;
  background-color: #00c091 !important;
  border-color: #00c091 !important;
}
.el-button--success:hover {
  background-color: #11a480 !important;
  border-color: #11a480 !important;
}
</style>
