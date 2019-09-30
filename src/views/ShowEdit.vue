<template>
  <div class="document">
    <Header/>
    <el-row class="main">
      <el-col :span="24">
        <el-row class="row">
          <el-col>
            <h1 style="font-weight: bold"> {{this.content.baseMsg.name}} </h1>
          </el-col>
        </el-row>
        <el-row class="row">
          <el-col :span="24">
            <span class="tag">电话：</span>{{this.content.baseMsg.phone}} | 
            <span class="tag">邮箱：</span>{{this.content.baseMsg.email}} | 
            <span class="tag">地址：</span>{{this.content.baseMsg.address}}
          </el-col>
        </el-row>
        <el-row class="row">
          <el-col :span="24">
            <span class="tag">个人网址：</span>{{this.content.baseMsg.web}} |  
            <span class="tag">wechat：</span> weixin1899855881
          </el-col>
        </el-row>
        <el-row class="row skill">
          <el-col>
            <h2 class="title"> 专业技能 </h2>
            <hr>  
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <mavon-editor 
              class="mavon-editor"
              v-html="content.skillMsg"
              :boxShadow=false
            />
          </el-col>
        </el-row>
        <el-row class="row intern">
          <el-col>
            <h2 class="title"> 项目经历 </h2>
            <hr>  
          </el-col>
        </el-row>
        <el-row class="row intern">
          <el-col>
            <h2 class="title"> 教育经历 </h2>
            <hr>  
          </el-col>
        </el-row>
        <el-row class="row intern">
          <el-col>
            <h2 class="title"> 开源项目及作品 </h2>
            <hr>  
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Header from "../components/Header.vue"

export default {
  components: {
    Header
  },
  data () {
    return {
      content: "",
      value: ""
    }
  },
  methods: {
    fetchData () {
      this.content = this.$store.state
      console.log(this.content)
    }
  },
  created () {
    this.fetchData()
  }
}
</script>

<style scoped>
.mavon-editor {
  margin: 0 20px;
  padding: 5px 0;
  width: 90%;
  min-height: 200px;
  border: none;
}
.tag {
 font-weight: bold; 
}
.skill,.intern .title {
  font-weight: bold;
}
.skill,.intern {
  text-align: left;
  display: block;
}
.document {
  width: 100%;
  overflow: hidden;
}
.main {
  text-align: center;
  margin: 20px;
  padding: 10px;
  background: #fefefe;
}
.row {
  margin: 0 10px;

  /* border: 1px solid green;  */
  padding: 5px 10px;
}
</style>
