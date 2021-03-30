<template>
  <div class="login">
    <div class="login-wrap">
      <el-carousel class="login-wrap-carousel" indicator-position="none" arrow="never">
        <el-carousel-item v-for="item in bgImgArr" :key="item">
          <img :src="item" alt="err" class="img" />
        </el-carousel-item>
      </el-carousel>
      <div class="login-wrap-form">
        <h2 class="title">用户登录</h2>
        <div>
          <el-form class="form" ref="form" :model="form">
            <el-form-item>
              <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.password" placeholder="请输入密码"></el-input>
            </el-form-item>
          </el-form>
          <div>
            <el-button class="btn" type="success">登录</el-button>
            <el-button class="btn" type="default">重置</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bgImgOne from '@/assets/images/banner1.png'
import bgImgTwo from '@/assets/images/banner2.png'

export default {
  data() {
    return {
      bgImgArr: [bgImgOne, bgImgTwo],
      form: {}
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  height: 100vh;
  width: 100vw;

  .login-wrap {
    width: 1120px;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;

    &-carousel {
      width: 633px;
      height: 454px;

      .img {
        width: 633px;
        height: 454px;
      }

      /deep/ .el-carousel__container {
        height: 100%;
      }
    }

    &-form {
      width: 427px;
      height: 454px;
      border-radius: 6px;
      box-shadow: 0 8px 24px 0 #e8e8e8;
      background-color: #fff;
      padding: 10px;
      display: flex;
      align-items: center;
      // justify-content: center;
      flex-direction: column;

      .title {
        color: #000;
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 60px;
        margin-top: 50px;
      }

      .btn {
        width: 100px;
      }
    }
  }
}
</style>
