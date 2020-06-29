<template>
  <div class="skillmsg">
    <h3 class="title">
      专业技能
      <i class="el-icon el-icon-edit"></i>
    </h3>
    <div class="content">
      <!-- vue markdown插件 -->
      <mavon-editor
        class="mavon-editor"
        toolbarsBackground="#f6f8fa"
        @change="editSkillMsg"
        v-model="value"
      />
      <!-- v-model="JSON.stringify(skillMsg)" -->
    </div>
    <div>
      <el-button type="info" @click="jump(previous)">{{ previous }}</el-button>
      <el-button type="success" @click="saveSkillMsg">保存</el-button>
      <el-button type="info" @click="jump(next)">{{ next }}</el-button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'BaseMessage',
  data() {
    return {
      value: '',
      renderValue: '',
      previous: '上一步',
      next: '下一步',
    };
  },
  computed: {
    ...mapState(['skillMsg']),
  },
  created() {
    console.log(sessionStorage.getItem('skillMsg'), 'msg');
    this.value = sessionStorage.getItem('skillMsg')
      ? JSON.parse(sessionStorage.getItem('skillMsg')).skillMsg
      : '';
    this.renderValue = sessionStorage.getItem('skillMsg').skillRenderMsg;
  },
  methods: {
    editSkillMsg(value, render) {
      this.value = value;
      this.renderValue = render;
    },
    saveSkillMsg() {
      sessionStorage.setItem(
        'skillMsg',
        JSON.stringify({
          skillMsg: this.value,
          skillRenderMsg: this.renderValue,
        })
      );
      this.$store.commit('saveSkillMsg', this.value);
      this.$store.commit('saveSkillRenderMsg', this.renderValue);
      this.$message({
        type: 'success',
        message: '信息保存成功',
        duration: 1200,
      });
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
  color: #404040;
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
