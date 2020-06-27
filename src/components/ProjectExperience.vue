<template>
  <div class="projectmsg">
    <h3 class="title">
      项目经历
      <i class="el-icon el-icon-edit"></i>
    </h3>
    <el-form ref="form" :model="form" label-width="80px">
      <el-row>
        <el-col :span="10">
          <el-form-item>
            <el-input v-model="form.proName" placeholder="项目名称"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item>
            <el-input v-model="form.proAddress" placeholder="城市"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10">
          <el-form-item>
            <el-input
              v-model="form.proPosition"
              placeholder="你的职位"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item>
            <el-input
              v-model="form.proPartment"
              placeholder="所在部门"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item>
        <el-col :span="9">
          <el-date-picker
            type="date"
            placeholder="起始时间（YYYY-MM）"
            v-model="form.dateStart"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="9">
          <el-date-picker
            placeholder="结束时间（YYYY-MM）"
            v-model="form.dateEnd"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>
      </el-form-item>
      <el-row>
        <el-col :span="20">
          <el-form-item>
            <el-tag type="info" style="float:left">内容描述</el-tag>
          </el-form-item>
          <el-form-item>
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
      <el-form-item>
        <el-button style="float:left; color:#9c9c9c" size="medium" type="text">
          <el-icon
            class="el-icon-plus"
            style="color:#00c091; font-weight:bold"
          ></el-icon>
          添加更多项目经历
        </el-button>
      </el-form-item>
      <el-form-item>
        <el-button @click="jump(previous)" type="info">{{
          previous
        }}</el-button>
        <el-button @click="saveProjectMsg" type="success">保存</el-button>
        <el-button @click="jump(next)" type="info">{{ next }}</el-button>
      </el-form-item>
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
        proValue: '',
      },
      previous: '上一步',
      next: '下一步',
    };
  },

  methods: {
    handleChange(value, htmlCode) {
      this.form.proValue = htmlCode;
    },

    saveProjectMsg() {
      this.$store.commit('saveProjectMsg', this.form);
      this.$message.success('信息保存成功！');
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
.mavon-editor {
  min-height: 500px;
}
.projectmsg {
  padding: 10px;
  color: #404040;
  width: 100%;
  overflow: hidden;
}
.title {
  margin-bottom: 20px;
  color: #404040;
  font-weight: bold;
}
</style>
