<template>
  <div class="header">
    <div class="left">
      <el-dropdown @command="handleDropMenuClick">
        <el-avatar class="avatar" :size="40" :src="imgSrc" @error="() => true">
          <img
            class="img"
            src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
          />
        </el-avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="/" icon="el-icon-s-home">首页</el-dropdown-item>
          <el-dropdown-item command="/" icon="el-icon-s-custom">个人中心</el-dropdown-item>
          <el-dropdown-item command="/login" divided icon="el-icon-s-promotion">
            退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="right">
      <div class="router-link"><router-link to="/base">引导填写</router-link></div>
      <div class="router-link"><router-link to="/preview">预览编辑</router-link></div>
    </div>
  </div>
</template>

<script>
import avatarBoy from '../assets/images/avatar_boy.jpg'
import avatarGirl from '../assets/images/avatar_girl.jpg'

export default {
  name: 'Header',
  data() {
    return {
      imgSrc: ''
    }
  },

  mounted() {
    this.imgSrc = Math.random * 10 >= 5 ? avatarBoy : avatarGirl
  },

  methods: {
    handleDropMenuClick(type) {
      this.$router.push(type)
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 56px;
  text-align: center;
  background-color: #fff;
  overflow: hidden;

  .left {
    width: 120px;

    .avatar {
      position: relative;
      cursor: pointer;

      &::before {
        position: absolute;
        top: 0;
        left: 0;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: grey;
      }
    }
  }

  .right {
    width: calc(100% - 120px);
  }
}

.router-link {
  margin-left: 10px;
  padding-right: 40px;
  line-height: 56px;
  display: inline-block;
}

.router-link a {
  display: block;
  color: #404040;
  line-height: 56px;
  text-decoration: none;
  font-size: 14px;
}

.router-link-exact-active {
  color: #67c23a !important;
  border-bottom: 4px solid #67c23a;
}
</style>
