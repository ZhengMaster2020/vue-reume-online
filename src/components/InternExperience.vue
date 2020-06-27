<template>
  <div class="internmsg">
    <h3 class="title">
      工作经历
      <i class="el-icon el-icon-edit"></i>
    </h3>
    <el-form ref="form" :model="form" label-width="80px">
      <el-row>
        <el-col :span="10">
          <el-form-item>
            <el-input v-model="form.name" placeholder="公司名称"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item>
            <el-input v-model="form.address" placeholder="公司地址"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10">
          <el-form-item>
            <el-input v-model="form.position" placeholder="你的职位"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item>
            <el-input v-model="form.partment" placeholder="所在部门"></el-input>
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
            <el-tag type="info" style="float:left"
              >工作内容 （点击填写框即可显示案例和关键词）</el-tag
            >
          </el-form-item>
          <el-form-item>
            <mavon-editor
              class="mavon-editor"
              toolbarsBackground="#f6f8fa"
              @change="editWorkMsg"
              v-model="value"
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
          添加更多工作经历
        </el-button>
      </el-form-item>
      <el-form-item>
        <el-button @click="jump(previous)" type="info">{{
          previous
        }}</el-button>
        <el-button @click="saveInternMsg" type="success">保存</el-button>
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
        name: '',
        address: '',
        dateStart: '',
        dateEnd: '',
        position: '',
        partment: '',
        internValue: '',
      },
      value: '',
      previous: '上一步',
      next: '下一步',
    };
  },

  computed: {
    editWorkMsg(value) {
      console.log(value);
      // this.form.internValue = htmlCode;
    },
  },

  methods: {
    // 初始化数据
    fetchInternExpData() {
      const internData = this.$store.state.internMsg;
      this.form.name = internData.comName;
      this.form.address = internData.comAddress;
      this.form.position = internData.comPosition;
      this.form.partment = internData.comPartment;
      this.form.dateStart = internData.dateStart;
      this.form.dateEnd = internData.dateEnd;
      this.form.internValue = internData.internValue;
    },

    // 保存数据
    saveInternMsg() {
      console.log(this.form.internValue);
      this.$store.commit('saveInternMsg', this.form);
      setTimeout(() => {
        this.$message.success('信息保存成功');
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

  mounted() {
    this.fetchInternExpData();
  },
};
</script>

<style scoped>
.mavon-editor {
  min-height: 500px;
}
.internmsg {
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
