<template>
  <a-drawer
    :visible="visible"
    :width="`${width}%`"
    :destroyOnClose="true"
    :mask="true"
    @close="closeCallback"
    wrapClassName="drawer-wrapper"
    placement="right"
  >
  less scoped deep 测试
  </a-drawer>
</template>

<script>
export default {
  name: 'luohao-drawer',
  data() {
    return {
      visible: false,
      width: 100
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

</style>