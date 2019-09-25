<template>
  <div class="skillmsg">
    <h3 class="title">
      专业技能
      <i class="el-icon el-icon-edit"></i>
    </h3>
    <div class="content">
      <!-- vue markdown插件 -->
      <mavon-editor class="mavon-editor" toolbarsBackground="#f6f8fa" v-model="value" />
    </div>
    <div>
      <el-button @click="jump(previous)">{{previous}}</el-button>
      <el-button @click="saveSkillMsg">保存</el-button>
      <el-button type="danger" @click="jump(next)">{{next}}</el-button>
    </div>
  </div>
</template>

<script>
import jumpUtils from "../utils/jump.js";
export default {
  name: "BaseMessage",
  data() {
    return {
      value: "",
      previous: "上一步",
      next: "下一步"
    };
  },
  methods: {

    // 保存信息
    saveSkillMsg() {
      console.log(this.value);
      this.$store.commit("saveSkillMsg", this.value);
      setTimeout(() => {
        this.$message.success("信息保存成功")
      }, 300)
    },

     // 模块跳转
    jump(step) {
      const moduleKeys = Object.keys(this.$store.state.modules);
      const currentRouteName = this.$router.currentRoute.name;
      const index = moduleKeys.findIndex(item => {
        return item === currentRouteName
      })
      if (index < moduleKeys.length && index >= 0) {
        if (step === "上一步") {
          if (index === 0) {
            return
          }
          this.$router.push(`/${moduleKeys[index - 1]}`);
          return
        }
        if (step === "下一步") {
          if (index === moduleKeys.length - 1) {
            this.$router.push("/preview")
            return
          }
          this.$router.push(`/${moduleKeys[index + 1]}`)
          return
        }
      }
    }
  }
};
</script>

<style scoped>
.mavon-editor {
  min-height: 500px;
}
.content {
  margin: 10px;
  padding: 10px;
  min-height: 500px;
}
.title {
  margin-bottom: 20px;
  color: #404040;
  font-weight: bold;
}
.skillmsg {
  padding: 10px;
  width: 100%;
  overflow: hidden;
}
</style>