<template>
  <div class="skillmsg">
     <h3 class="title">专业技能 <i class="el-icon el-icon-edit"></i></h3>
     <div class="content">
       <mavon-editor class="mavon-editor" toolbarsBackground="#f6f8fa" v-model="value"/>
     </div>
     <div>
       <el-button @click="jump(previous)">{{previous}}</el-button>
       <el-button @click="save">保存</el-button>
       <el-button type="danger" @click="jump(next)">{{next}}</el-button>
     </div>
  </div>
</template>

<script>
export default {
  name: "BaseMessage",
  data () {
    return {
      value: '',
      previous: '上一步',
      next: '下一步'
    }
  },
  methods: {
    jump (val) {
      console.log(this.$router.currentRoute)
      const currentRoute = this.$router.currentRoute
      if (currentRoute.name === 'skill' && val === '上一步') {
        this.$router.push('/base')
      }
    },
    save () {
      window.alert('保存并浏览')
    }
  }
}
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
}
</style>