<template>
  <div class="basemsg">
    <h3 class="title">基本信息<i class="el-icon el-icon-tickets"></i></h3>
    <el-row>
      <el-col :span="23">
        <el-form ref="baseMsg"  :rules="rules" :model="baseMsg" status-icon label-width="80px">
          <el-form-item label="姓名" prop="name">
            <el-input v-model="baseMsg.name" :placeholder="form.name"></el-input>
          </el-form-item>
          <el-form-item label="电话" prop="phone">
            <el-input v-model="baseMsg.phone" :placeholder="form.phone"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="baseMsg.email" :placeholder="form.email"></el-input>
          </el-form-item>
          <el-form-item label="地址" prop="address">
            <el-input v-model="baseMsg.address" :placeholder="form.address"></el-input>
          </el-form-item>
          <el-form-item label="求职意志" prop="position">
            <el-input v-model="baseMsg.position" :placeholder="form.position"></el-input>
          </el-form-item>
          <el-form-item label="个人网站" prop="web">
            <el-input v-model="baseMsg.web" :placeholder="form.web"></el-input>
          </el-form-item>
          <el-form-item size="large">
            <el-button @click="saveBaseMsg('baseMsg')">保存信息</el-button>
            <el-button type="danger" @click="next">下一步</el-button>
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
      },
      rules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' },
          { min: 2, max: 12, message: '长度在 2 到 12 个字符', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入电话', trigger: 'blur' },
          { pattern: /^1[3|4|5|7|8|9]\d{9}$/, message: '手机号码错误', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        address: [
          { required: true, message: '请输入地址', trigger: 'blur' },
        ],
        position: [
          { required: true, message: '请输入名称', trigger: 'blur' },
        ]
      }
    };
  },
  methods: {

    // 初始化数据
    fetchBaseMsg () {
      const data = this.$store.state.baseMsg
      this.form.name = data.name
      this.form.phone = data.phone 
      this.form.email = data.email
      this.form.address = data.address
      this.form.position = data.position
      this.form.web = data.web
    },

    // 点击下一步
    next () {
      const flag = this.saveBaseMsg('baseMsg')
      if (flag === true) { 
        this.$router.push('/skill')
      } else {
        this.$message.error('请正确填写表单')
      }
    },

    // 保存用户填写的基本信息
    saveBaseMsg (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store.commit('saveBaseMsg', this.baseMsg)
          setTimeout(() => {
            this.$message.success('信息保存成功')
          }, 300)
        } else {
          this.$message.error('表单填写错误')
      }
      })  
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