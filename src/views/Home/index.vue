<template>
  <div class="home">
    <Header />
    <div class="home-content">
      <aside class="left-panel">
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
      </aside>
      <section class="right-panel"><router-view /></section>
    </div>
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

<style lang="less" scoped>
@import '../../assets/css/common';
@import '../../assets/css/mixin';

.home {
  width: 100%;
  overflow: hidden;

  &-content {
    .flex(space-between, flex-start);
    height: calc(100vh - 92px);
    padding: 16px;

    .left-panel {
      width: 250px;
    }

    .right-panel {
      width: calc(100% - 250px);
      margin-left: 16px;
    }
  }
}

.isActive {
  color: var(--themeColor);
  padding-left: 12px;
  border-left: 4px solid var(--themeColor);
}

.move-delete i:hover {
  color: #fff;
  background: var(--themeColor);
}

.move-delete i {
  margin-left: 10px;
  font-size: 14px;
  padding: 5px;
  border-radius: 5px;
  color: var(--themeColor);
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
  .flex();
  color: #9c9c9c;
  padding: 10px;
  min-height: 26px;
  margin: 20px 0;
  cursor: pointer;
  font-size: 16px;
  position: relative;
}

.left-message li:hover {
  color: var(--themeColor);
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
  height: 100%;
  border: 1px solid #dedfe1;
  text-align: center;
  padding: 5px;
  color: #fff;
  background-color: #fff;
}
</style>
