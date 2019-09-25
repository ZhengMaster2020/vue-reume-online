<template>
  <div class="basemsg">
    <h3 class="title">基本信息<i class="el-icon el-icon-tickets"></i></h3>
    <el-row>
      <el-col :span="23">
        <el-form ref="baseMsg" :model="baseMsg" label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="baseMsg.name" :placeholder="form.name"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="baseMsg.phone" :placeholder="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="baseMsg.email" :placeholder="form.email"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="baseMsg.address" :placeholder="form.address"></el-input>
      </el-form-item>
      <el-form-item label="求职意志">
        <el-input v-model="baseMsg.position" :placeholder="form.position"></el-input>
      </el-form-item>
      <el-form-item label="个人网站">
        <el-input v-model="baseMsg.web" :placeholder="form.web"></el-input>
      </el-form-item>
      <el-form-item size="large">
        <el-button @click="saveBaseMsg">保存信息</el-button>
        <el-button type="danger" @click="jump">下一步</el-button>
      </el-form-item>
    </el-form>
      </el-col>
    </el-row>
    
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
        position: "",
        web: ""
      },
      baseMsg: {
        name: "",
        phone: "",
        email: "",
        address: "",
        position: "",
        web: ""
      }
    };
  },
  methods: {
    fetchBaseMsg () {
      const data = this.$store.state.baseMsg
      this.form.name = data.name
      this.form.phone = data.phone 
      this.form.email = data.email
      this.form.address = data.address
      this.form.position = data.position
      this.form.web = data.web
    },

    jump () {
      this.$router.push('/skill')
    },

    saveBaseMsg () {
      this.$store.commit('saveBaseMsg', this.baseMsg)
      setTimeout(() => {
        window.alert("信息保存成功")
      }, 300)
    }
  },
  created () {
    this.fetchBaseMsg()
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
  width: 100%;
  overflow: hidden;
}
</style>