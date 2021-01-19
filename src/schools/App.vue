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
    addBackgroundMusic(entries[3].music);
  }
}
</script>

<style lang="less">

</style>