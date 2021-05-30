<template>
  <div class="header">
    <div class="right">
      <div class="router-link"><router-link to="/base">引导填写</router-link></div>
      <div class="router-link"><router-link to="/preview">预览编辑</router-link></div>
    </div>

    <el-color-picker
      show-alpha
      size="small"
      v-model="color"
      :predefine="predefine"
      @active-change="handleChangeColor"
    />

    <!-- 个人头像 -->
    <div class="left">
      <el-dropdown trigger="click" class="dropdown" @command="handleDropMenuClick">
        <i
          :class="['el-icon-caret-bottom', 'arrow-icon', arrowIconDown && 'icon-rotate']"
          @click="handleIconClick"
        />
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
  </div>
</template>

<script>
import avatarBoy from '../assets/images/avatar_boy.jpg'
import avatarGirl from '../assets/images/avatar_girl.jpg'

export default {
  name: 'Header',
  data() {
    return {
      arrowIconDown: false,
      imgSrc: '',
      color: '#00c091',
      predefine: [
        '#ff4500',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00c091',
        '#00ced1',
        '#1e90ff',
        '#c71585',
        'rgba(255, 69, 0, 0.68)',
        'rgb(255, 120, 0)',
        'hsv(51, 100, 98)',
        'hsva(120, 40, 94, 0.5)',
        'hsl(181, 100%, 37%)',
        'hsla(209, 100%, 56%, 0.73)',
        '#c7158577'
      ]
    }
  },

  mounted() {
    this.imgSrc = Math.random() * 10 >= 5 ? avatarBoy : avatarGirl
    this.color = document.documentElement.style.getPropertyValue('--themeColor').trim() || '#00c091'
  },

  methods: {
    handleIconClick() {
      this.arrowIconDown = !this.arrowIconDown
    },

    handleDropMenuClick(type) {
      this.$router.push(type)
    },

    handleChangeColor(color) {
      this.color = color
      const docStyle = document.documentElement.style
      docStyle.setProperty('--themeColor', color)
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/css/common';
@import '../assets/css/mixin';

.header {
  .flex();
  width: 100%;
  height: 56px;
  text-align: center;
  background-color: #fff;
  overflow: hidden;

  .left {
    width: 120px;

    .dropdown {
      .flex();
    }

    .arrow-icon {
      font-size: 20px;
      margin-right: 10px;
      cursor: pointer;
      transform: rotate(0);
      transition: transform 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
    }

    .icon-rotate {
      transform: rotate(-180deg);
    }

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
  color: var(--themeColor) !important;
  border-bottom: 4px solid var(--themeColor);
}
</style>
