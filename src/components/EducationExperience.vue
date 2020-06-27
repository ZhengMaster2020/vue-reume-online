<template>
  <div class="edumsg">
    <h3 class="title">
      教育经历
      <i class="el-icon el-icon-edit"></i>
    </h3>
    <el-form ref="form" :model="form" label-width="80px">
      <el-row>
        <el-col :span="20">
          <el-form-item>
            <el-input
              v-model="form.eduSchoolName"
              placeholder="学校名称"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10">
          <el-form-item>
            <el-input
              v-model="form.eduProfession"
              placeholder="专业"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item>
            <el-select v-model="form.eduValue" placeholder="学历">
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
        <el-col :span="10">
          <el-form-item>
            <el-input
              v-model="form.eduSecCollege"
              placeholder="二级学院"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item>
            <el-input v-model="form.eduCity" placeholder="所在城市"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item>
        <el-col :span="9">
          <el-date-picker
            type="date"
            placeholder="入学时间（YYYY-MM）"
            v-model="form.dateStart"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="9">
          <el-date-picker
            placeholder="毕业时间（YYYY-MM）"
            v-model="form.dateEnd"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>
      </el-form-item>
      <el-row>
        <el-col :span="20">
          <el-form-item>
            <el-tag type="info" style="float:left">
              教育描述 （点击填写框即可显示案例和关键词）
              <el-icon
                class="el-icon-cpu"
                style="color: #f40; font-size: 18x; font-weight: bold"
              ></el-icon>
            </el-tag>
          </el-form-item>
          <el-form-item>
            // Vue markdown 插件
            <mavon-editor
              class="mavon-editor"
              toolbarsBackground="#f6f8fa"
              @change="handleChange"
              v-model="form.eduDesValue"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button style="float:left; color:#9c9c9c" size="medium" type="text">
          <el-icon
            class="el-icon-plus"
            style="color:#00c091; font-weight:bold"
          ></el-icon
          >添加更多教育经历
        </el-button>
      </el-form-item>
      <el-form-item>
        <el-button @click="jump(previous)" type="info">{{
          previous
        }}</el-button>
        <el-button @click="saveEducationMsg" type="success">保存</el-button>
        <el-button @click="jump(next)" type="info">{{ next }}</el-button>
      </el-form-item>
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
            label: '大专',
          },
          {
            value: '选项2',
            label: '本科',
          },
          {
            value: '选项',
            label: '硕士',
          },
          {
            value: '选项4',
            label: '博士',
          },
          {
            value: '选项5',
            label: 'MBA',
          },
        ],
        eduDesValue: '',
      },
      previous: '上一步',
      next: '下一步',
    };
  },

  methods: {
    handleChange(value, render) {
      console.log(render);
    },

    // save education message
    saveEducationMsg() {
      this.$store.commit('saveEducationMsg', this.form);
      setTimeout(() => {
        this.$message.success('信息保存成功！');
      }, 300);
    },

    // 模块跳转
    jump(step) {
      const moduleKeys = Object.keys(this.$store.state.modules);
      const currentRouteName = this.$router.currentRoute.name;
      const index = moduleKeys.findIndex((item) => {
        return item === currentRouteName;
      });
      if (index < moduleKeys.length && index >= 0) {
        if (step === '上一步') {
          if (index === 0) {
            return;
          }
          this.$router.push(`/${moduleKeys[index - 1]}`);
          return;
        }
        if (step === '下一步') {
          if (index === moduleKeys.length - 1) {
            this.$router.push('/preview');
            return;
          }
          this.$router.push(`/${moduleKeys[index + 1]}`);
          return;
        }
      }
    },
  },
};
</script>

<style scoped>
.edumsg {
  padding: 10px;
  width: 100%;
  overflow: hidden;
}
.title {
  margin-bottom: 20px;
  color: #404040;
  font-weight: bold;
}
.mavon-editor {
  color: #404040;
}
</style>
