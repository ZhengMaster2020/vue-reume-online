<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :md="6" class="left-panel">
        <ul class="left-message">
          <li v-for="(item, index) in module" :key="item">
            <span>{{ item }}</span>
            <span class="move-delete">
              <i class="el-icon el-icon-rank"></i>
              <i class="el-icon el-icon-delete" @click="deleteModule(index)"></i>
            </span>
          </li>
          <li @click="addModule">
            <span>
              <i class="el-icon el-icon-circle-plus-outline"></i>
              添加自定义模块
            </span>
          </li>
        </ul>
      </el-col>
      <el-col :md="16" class="right-panel" :offet="1">
        <router-view/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
/* eslint-disable */
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      module: ["基本信息", "专业技能", "实习经历", "教育经历"]
    };
  },
  methods: {
    addModule () {
      this.$prompt(
        "请输入自定义模块的名称",
        "提示",
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        })
        .then(({ value }) => {
          this.$message({
            type: 'success',
            message: '您输入的模块名称是: ' + value
          });
          this.module.push(value)
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        })
    },

    deleteModule (index) {
      // this.$alert(index)
      this.module.splice(index, 1)
    }
  }
};
</script>

<style scoped>
.move-delete i:hover {
  color: #fff;
  background: #409eff;
}
.move-delete i {
  margin-left: 10px;
  font-size: 14px;
  padding: 5px;
  border-radius: 5px;
  color: #409eff;
  background: #fff;
}
.move-delete {
  text-align: right;
  display: none;
  position: absolute;
  right: 10px;
}
.left-message li:hover .move-delete{
  display: block;
}
/* .left-message li:active {
  background: #409eff;
} */
.left-message li {
  color: #9c9c9c;
  padding: 10px;
  min-height: 26px;
  margin: 42px 45px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  position: relative;
}
.left-message li:hover {
  /* color: rgb(255, 79, 76) */
  color: #404040;
}
.left-message {
  margin: 5px;
  padding: 5px;
  text-align: center;
  display: block;
  text-align: center;
}
.home {
  margin: 10px;
}
.left-panel {
  border: 1px solid #eee;
  text-align: center;
  padding: 5px;
  margin: 20px;
}
.right-panel {
  margin: 20px;
  background: rebeccapurple;
}
</style>
