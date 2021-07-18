<template>
  <div class="footer-btn">
    <el-button
      :size="item.size"
      :type="item.type"
      v-for="item in btnGroup"
      :key="item.text"
      @click="onClick(item)"
    >
      {{ item.text }}
    </el-button>
  </div>
</template>

<script>
export default {
  props: {
    btnGroup: {
      type: Array,
      default: () => [
        { type: 'info', text: '上一步', size: 'mini' },
        { type: 'primary', text: '保存', size: 'mini' },
        { type: 'info', text: '下一步', size: 'mini' }
      ]
    }
  },

  methods: {
    onClick(item) {
      this.$emit('on-click', item)
    }
  }
}
</script>

<style lang="less" scoped>
.footer-btn {
  position: fixed;
  bottom: 20px;
  right: 5%;
}
</style>
