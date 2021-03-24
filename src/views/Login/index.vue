<template>
  <div class="login">
    <div class="lark-form-main">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  form: {}
}
</script>

<style lang="less" scoped>
.login {
  // padding-left: 16px;
  // padding-right: 16px;
  // margin-left: auto;
  // margin-right: auto;
  // height: 100%;

  .lark-form-main {
    background-color: #fff;
    padding: 40px 8px 48px;
    margin-bottom: 64px;
    border: 1px solid #e9e9e9;
    border-radius: 4px;
  }
}
</style>
