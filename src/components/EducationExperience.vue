<template>
  <div class="edumsg">
    <h3 class="title">
      教育经历
      <i class="el-icon el-icon-edit"></i>
    </h3>
    <el-form class="form" label-position="top" ref="form" :model="form" label-width="80px">
      <el-row>
        <el-col :span="12">
          <el-form-item label="学校">
            <el-input
              style="width:98%"
              size="mini"
              v-model="form.eduSchoolName"
              placeholder="学校名称"
            />
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="就读时间">
            <el-date-picker
              size="mini"
              type="daterange"
              style="width:100%"
              start-placeholder="入学时间"
              end-placeholder="毕业时间"
              v-model="form.dateStart"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="学历">
            <el-select style="width:98%" size="mini" v-model="form.eduValue" placeholder="学历">
              <el-option
                v-for="item in form.options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="性质">
            <el-select
              style="width:100%"
              size="mini"
              v-model="form.eduValue"
              placeholder="请选择学校性质学历"
            >
              <el-option
                v-for="item in form.options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="学院">
            <el-input
              style="width:98%"
              size="mini"
              v-model="form.eduSecCollege"
              placeholder="二级学院"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="城市">
            <el-input size="mini" v-model="form.eduCity" placeholder="所在城市"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="20">
          <el-form-item label="经历描述">
            <mavon-editor
              class="mavon-editor"
              toolbarsBackground="#f6f8fa"
              v-model="form.eduDesValue"
              @change="handleChange"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <!-- <el-form-item>
        <el-button @click="jump(previous)" type="info">{{ previous }}</el-button>
        <el-button @click="saveEducationMsg" type="success">保存</el-button>
        <el-button @click="jump(next)" type="info">{{ next }}</el-button>
      </el-form-item> -->
      <FooterBtn :btn-group="btnGroup" />
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'BaseMessage',
  data() {
    return {
      form: {
        eduSchoolName: '',
        eduProfession: '',
        eduSecCollege: '',
        eduCity: '',
        dateStart: '',
        dateEnd: '',
        eduValue: '',
        options: [
          {
            value: '选项1',
            label: '大专'
          },
          {
            value: '选项2',
            label: '本科'
          },
          {
            value: '选项',
            label: '硕士'
          },
          {
            value: '选项4',
            label: '博士'
          },
          {
            value: '选项5',
            label: 'MBA'
          }
        ],
        eduDesValue: ''
      },
      previous: '上一步',
      next: '下一步',
      btnGroup: [
        { type: 'info', text: '上一步', size: 'mini' },
        { type: 'primary', text: '保存', size: 'mini' }
      ]
    }
  },

  methods: {
    handleChange(value, render) {
      console.log(render)
    },

    // save education message
    saveEducationMsg() {
      this.$store.commit('saveEducationMsg', this.form)
      setTimeout(() => {
        this.$message.success('信息保存成功！')
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

<style scoped>
.edumsg {
  height: 100%;
  padding: 10px;
  text-align: left;
  overflow: hidden;
}

.form {
  height: 100%;
  overflow: hidden;
}

.title {
  text-align: center;
  margin-bottom: 20px;
  color: #404040;
  font-weight: bold;
}
.mavon-editor {
  width: 100%;
  color: #404040;
}

::v-deep .el-form--label-top .el-form-item__label {
  padding: 0;
}

.el-form-item {
  margin-bottom: 0;
}
</style>
