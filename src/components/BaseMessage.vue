<template>
  <div class="basemsg">
    <h3 class="title">基本信息<i class="el-icon el-icon-tickets"></i></h3>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item label="求职意志">
        <el-input v-model="form.position"></el-input>
      </el-form-item>
      <el-form-item label="个人网站">
        <el-input v-model="form.position"></el-input>
      </el-form-item>
      <el-form-item size="large">
        <el-button @click="onSubmit">保存信息</el-button>
        <el-button type="danger" @click="jump">下一步</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "BaseMessage",
  data() {
    return {
      form: {
        name: "",
        phone: "",
        email: "",
        address: "",
        position: ""
      }
    };
  },
  methods: {
    jump () {
      this.$router.push('/skill')
    },
    onSubmit () {
      window.alert('save')
    }
  }
};
</script>

<style scoped>
.title {
  margin-bottom: 20px;
  color: #404040;
  font-weight: bold;
}
.basemsg {
  padding: 10px;
}
</style>