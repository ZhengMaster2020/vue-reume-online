<template>
  <div class="projectmsg">
    <h3 class="title">
      项目经历
      <i class="el-icon el-icon-edit" />
    </h3>
    <el-form label-position="top" ref="form" :model="form" label-width="80px">
      <el-row>
        <el-col :span="12">
          <el-form-item label="经历名称">
            <el-input
              style="width:98%"
              size="mini"
              v-model="form.proName"
              placeholder="请输入项目名称"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="所在城市">
            <el-input size="mini" v-model="form.proAddress" placeholder="请输入城市" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="你的角色">
            <el-input
              style="width:98%"
              size="mini"
              v-model="form.proPosition"
              placeholder="请输入你的角色位"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="所在部门">
            <el-input size="mini" v-model="form.proPartment" placeholder="请输入所在部门" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="起止时间">
            <el-date-picker
              size="mini"
              type="daterange"
              style="width:98%"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              v-model="form.dateStart"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="20">
          <el-form-item label="经历描述">
            <mavon-editor
              class="mavon-editor"
              toolbarsBackground="#f6f8fa"
              defaultOpen="edit"
              @change="handleChange"
              @save="saveProjectMsg"
              v-model="form.proValue"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <!-- <el-form-item>
        <el-button style="float:left; color:#9c9c9c" size="medium" type="text">
          <el-icon class="el-icon-plus" style="color:#00c091; font-weight:bold"></el-icon>
          添加更多项目经历
        </el-button>
      </el-form-item> -->
      <!-- <el-form-item>
        <el-button @click="jump(previous)" type="info">{{ previous }}</el-button>
        <el-button @click="saveProjectMsg" type="success">保存</el-button>
        <el-button @click="jump(next)" type="info">{{ next }}</el-button>
      </el-form-item> -->
      <FooterBtn />
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'ProjectExp',
  data() {
    return {
      form: {
        proName: '',
        proAddress: '',
        proPosition: '',
        proPartment: '',
        dateStart: '',
        dateEnd: '',
        proValue: ''
      },
      previous: '上一步',
      next: '下一步'
    }
  },

  methods: {
    handleChange(value, htmlCode) {
      this.form.proValue = htmlCode
    },

    saveProjectMsg() {
      this.$store.commit('saveProjectMsg', this.form)
      this.$message.success('信息保存成功！')
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

<style scoped>
.mavon-editor {
  min-height: 300px;
}
.projectmsg {
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
