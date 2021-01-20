<template>
  <div class="container">
    <a-button @click="handleClik">初转法轮</a-button>
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
      const hooker = this.getContainer();
      const options = {
        width: 80,
        visible: true,
        container: '.container'
      };
      let drawer = new Drawer({
        store: store,
        data: options
      });
      drawer.$mount();
      drawer.$on('close', function() {
        drawer.$destroy();
        drawer = null;
      });
      document.body.appendChild(drawer.$el);
    },
    handleClik() {
      this.openDrawer();
    },
    getContainer() {
      return document.querySelector('.container');
    }
  },
  mounted() {
  }
}
</script>

<style lang="less" scoped>
.container {

}
</style>