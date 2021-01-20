<template>
  <a-drawer
    :visible="visible"
    :width="`${width}%`"
    :destroyOnClose="true"
    :mask="true"
    :maskClosable="false"
    :getContainer="container"
    title="scoped deep 测试"
    @close="closeCallback"
    wrapClassName="drawer-wrapper"
    placement="right"
  >
  一切存在都是苦难
  </a-drawer>
</template>

<script>
export default {
  name: 'luohao-drawer',
  data() {
    return {
      visible: false,
      width: 100,
      container: 'body'
    }
  },
  methods: {
    closeCallback() {
      this.$emit('close');
    },
  }
}
</script>

<style lang="less" scoped>
.drawer-wrapper {
  /deep/.ant-drawer-header {
    .ant-drawer-title {
      color: #f00;
    }
  }
  /deep/.ant-drawer-body {
    color: #00f;
  }
}
</style>