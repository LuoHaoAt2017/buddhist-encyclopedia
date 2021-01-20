<template>
  <div class="root">
    <router-view></router-view>
  </div>
</template>

<script>
import entries from 'root/build/entries';
import addBackgroundMusic from 'root/utils/music';
export default {
  name: 'App',
  created() {
    addBackgroundMusic(entries[0].music);
  }
}
</script>

<style lang="less">
body {
  padding: 10px;
  .root {
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-radius: 4px;
  }
}
</style>