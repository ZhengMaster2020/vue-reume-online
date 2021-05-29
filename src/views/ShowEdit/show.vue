<template>
  <div v-if="visible" style="relative">
    <el-dialog center width="70vw" title="简历预览" :visible="visible" @close="onClose">
      <div id="preview" v-loading="loading"></div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  // 自定义v-model
  model: {
    prop: 'visible',
    event: 'change'
  },

  props: {
    visible: Boolean
  },

  data() {
    return {
      loading: false
    }
  },

  methods: {
    onPreview(dom) {
      this.loading = true
      const container = document.getElementById('preview')
      container.style.width = '100%'
      dom.style.width = container.style.width
      container.style.maxHeight = '600px'
      container.style.overflow = 'auto'
      container.appendChild(dom)
      setTimeout(() => (this.loading = false), 500)
    },

    onClose() {
      const container = document.getElementById('preview')
      container.parentNode.removeChild(container)
      this.$emit('change', false)
    },

    onSave() {
      this.onClose()
    }
  }
}
</script>
<style lang="less" scoped></style>
