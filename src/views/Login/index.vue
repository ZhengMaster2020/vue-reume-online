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
          <el-form status-icon class="form" ref="form" :model="form">
            <el-form-item
              prop="name"
              :rules="{ required: true, message: '用户名不能为空', trigger: 'blur' }"
            >
              <el-input
                clearable
                v-model.trim="form.name"
                placeholder="请输入用户名"
                @change="handleBtnStatus"
              />
            </el-form-item>
            <el-form-item
              prop="password"
              :rules="{ required: true, message: '密码不能为空', trigger: 'blur' }"
            >
              <el-input
                clearable
                type="password"
                v-model.trim="form.password"
                placeholder="请输入密码"
                @change="handleBtnStatus"
              />
            </el-form-item>
            <el-form-item>
              <el-button
                class="btn"
                type="success"
                :disabled="loginBtnDisabled"
                :loading="btnLoading"
                @click="onSave('form')"
              >
                登录
              </el-button>
              <el-button
                class="btn"
                type="default"
                :disabled="btnDisabled"
                @click="onReset('form')"
              >
                重置
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

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
    handleBtnStatus() {
      const { name, password } = this.form
      this.loginBtnDisabled = name && password ? false : true
      this.btnDisabled = name || password ? false : true
    },

    onSave(name) {
      this.$refs[name].validate(async valid => {
        if (valid) {
          this.btnLoading = true
          const { code, data, message } = await this.$api.login(this.form)
          if (!code && data) this.$message.success(message)
          console.log(data)
          setTimeout(() => {
            this.btnLoading = false
            console.log('ssss,', Cookies)
            Cookies.setItem('userInfo', JSON.stringify(this.form), { expires: 3 })
            this.$message.success('登录成功！')
            this.$router.push('/')
          }, 500)
        }
      })
    },

    onReset(name) {
      this.$refs[name].resetFields()
      this.btnDisabled = true
      this.loginBtnDisabled = true
      this.btnLoading = false
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
