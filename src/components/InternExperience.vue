<template>
  <div class="internmsg">
    <h3 class="title">
      工作经历
      <i class="el-icon el-icon-edit"></i>
    </h3>
    <el-form ref="form" :model="form" label-position="top" label-width="80px">
      <el-row>
        <el-col>
          <el-form-item label="公司名称">
            <el-input size="mini" v-model="form.name" placeholder="请输入公司名称"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="所在城市">
            <el-input
              style="width:98%"
              size="mini"
              v-model="form.address"
              placeholder="请输入公司地址"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="职位名称">
            <el-input size="mini" v-model="form.position" placeholder="请输入你的职位"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="所在部门">
            <el-input
              style="width:98%"
              size="mini"
              v-model="form.partment"
              placeholder="请输入所在部门"
            />
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="工作时间">
            <el-date-picker
              size="mini"
              type="daterange"
              style="width:100%"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              v-model="form.dateStart"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col>
          <el-form-item label="工作经历">
            <mavon-editor
              class="mavon-editor"
              toolbarsBackground="#f6f8fa"
              v-model="value"
              @change="editWorkMsg"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <!-- <el-form-item>
        <el-button @click="jump(previous)" type="info">{{ previous }}</el-button>
        <el-button @click="saveInternMsg" type="success">保存</el-button>
        <el-button @click="jump(next)" type="info">{{ next }}</el-button>
      </el-form-item> -->
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'BaseMessage',
  data() {
    return {
      form: {},
      value: '',
      previous: '上一步',
      next: '下一步'
    }
  },

  computed: {
    editWorkMsg(value) {
      console.log(value)
      return ''
    }
  },

  mounted() {
    this.fetchInternExpData()
  },

  methods: {
    // 初始化数据
    fetchInternExpData() {
      const internData = this.$store.state.internMsg
      this.form.name = internData.comName
      this.form.address = internData.comAddress
      this.form.position = internData.comPosition
      this.form.partment = internData.comPartment
      this.form.dateStart = internData.dateStart
      this.form.dateEnd = internData.dateEnd
      this.form.internValue = internData.internValue
    },

    // 保存数据
    saveInternMsg() {
      console.log(this.form.internValue)
      this.$store.commit('saveInternMsg', this.form)
      setTimeout(() => {
        this.$message.success('信息保存成功')
      }, 300)
    },

    // 模块跳转
    jump(step) {
      const moduleKeys = Object.keys(this.$store.state.modules)
      const currentRouteName = this.$router.currentRoute.name
      const index = moduleKeys.findIndex(item => {
        return item === currentRouteName
      })
      if (index < moduleKeys.length && index >= 0) {
        if (step === '上一步') {
          if (index === 0) {
            return
          }
          this.$router.push(`/${moduleKeys[index - 1]}`)
          return
        }
        if (step === '下一步') {
          if (index === moduleKeys.length - 1) {
            this.$router.push('/preview')
            return
          }
          this.$router.push(`/${moduleKeys[index + 1]}`)
          return
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.mavon-editor {
  height: 300px;
}
.internmsg {
  text-align: left;
  padding: 10px;
  color: #404040;
  overflow: hidden;
}
.title {
  text-align: center;
  margin-bottom: 20px;
  color: #404040;
  font-weight: bold;
}

::v-deep .el-form--label-top .el-form-item__label {
  padding: 0;
}

.el-form-item {
  margin-bottom: 0;
}
</style>
