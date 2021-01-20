<template>
  <div class="container">
  </div>
</template>

<script>
import Vue from 'vue';
import store from '@/buddhists/store/index';
import LuohaoDrawer from 'common/components/luohao-drawer.vue';
const Drawer = Vue.extend(LuohaoDrawer)
export default {
  name: 'home',
  components: {
    LuohaoDrawer
  },
  data() {
    return {
    }
  },
  methods: {
    openDrawer() {
      const options = {
        visible: true,
        width: 80,
      };
      let drawer = new Drawer({
        store: store,
        data: options,
      });
      drawer.$mount();
      drawer.$on('close', function() {
        drawer.$destroy();
        drawer = null;
      });
      document.body.appendChild(drawer.$el);
    },
  },
  mounted() {
    this.openDrawer();
  }
}
</script>

<style lang="less" scoped>

</style>