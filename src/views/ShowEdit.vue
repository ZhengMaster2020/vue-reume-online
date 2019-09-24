<template>
  <div class="document">
    <Header/>
    <el-row class="main">
      <el-col :span="20">
        content
      </el-col>
      <el-col :span="4">
        <el-button>生成PDF文档</el-button>
        <el-button>下载</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Header from "../components/Header.vue"

export default {
  components: {
    Header
  }
}
</script>

<style scoped>
.main {
  text-align: center;
  margin: 20px;
  padding: 10px;
}
</style>
