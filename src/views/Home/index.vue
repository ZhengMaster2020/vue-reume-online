<template>
  <div class="home">
    <Header />
    <el-row :gutter="20">
      <el-col :md="6" class="left-panel">
        <ul class="left-message">
          <li v-for="(item, key) in modules" :key="key">
            <span :class="isActive(key)" @click="jump(key)">{{ item }}</span>
            <span class="move-delete">
              <i class="el-icon el-icon-rank"></i>
              <i class="el-icon el-icon-delete" @click="deleteModule(item)"></i>
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
        <router-view />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Header from '../../components/Header.vue'

export default {
  name: 'home',
  components: {
    Header
  },
  data() {
    return {
      modules: {}
    }
  },

  methods: {
    // 初始化模块的相关数据
    fetchModulesData() {
      this.modules = this.$store.state.modules
    },

    // 当前导航被激活
    isActive(name) {
      if (name === this.$router.currentRoute.name) {
        return 'isActive'
      }
    },

    // 点击下一步
    jump(name) {
      this.$router.push(`/${name}`)
      return name
    },

    // 新增模块
    addModule() {
      this.$prompt('请输入自定义模块的名称', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
        .then(({ value }) => {
          this.$message({
            type: 'success',
            message: '您输入的模块名称是: ' + value
          })
          this.modules.push(value)
        })
        .catch()
    },

    // 删除模块
    deleteModule(name) {
      this.$delete(this.modules, name)
    }
  },

  created() {
    this.fetchModulesData()
  }
}
</script>

<style scoped>
.home {
  width: 100%;
  overflow: hidden;
}
.isActive {
  color: #00c091;
  padding-left: 12px;
  border-left: 4px solid #00c091;
}
.move-delete i:hover {
  color: #fff;
  background: #11a480;
}
.move-delete i {
  margin-left: 10px;
  font-size: 14px;
  padding: 5px;
  border-radius: 5px;
  color: #11a480;
  background: #fff;
}
.move-delete {
  text-align: right;
  display: none;
  position: absolute;
  right: 10px;
}
.left-message li:hover .move-delete {
  display: block;
}
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
  color: #11a480;
}
.left-message {
  margin: 5px;
  padding: 5px;
  text-align: center;
  display: block;
  text-align: center;
}
.left-panel,
.right-panel {
  border: 1px solid #dedfe1;
  text-align: center;
  padding: 5px;
  margin: 20px;
  color: #fff;
  background-color: #fff;
}
</style>
