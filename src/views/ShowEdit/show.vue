<template>
  <div>
    <el-dialog title="提示" :visible="isShow" width="30%" center>
      <span>需要注意的是内容是默认不居中的</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="onClose">取 消</el-button>
        <el-button type="primary" @click="onSave">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  model: {
    prop: 'visible',
    event: 'change'
  },

  props: {
    visible: Boolean
  },

  data() {
    return {
      isShow: false
    }
  },

  watch: {
    visible(nVal) {
      this.isShow = nVal
    }
  },

  methods: {
    onClose() {
      this.isShow = false
      this.$emit('change', false)
    },

    onSave() {
      this.onClose()
    }
  }
}
</script>
<style lang="less" scoped></style>
