<!-- 首页 -->
<template>
  <div class="layout">
    <my-header class="my-header"></my-header>
    <my-menu class="my-menu"></my-menu>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import MyNavMenu from '@/components/MyNavMenu'
export default {
  components: {
    'my-header': MyHeader,
    'my-menu': MyNavMenu
  },
  data () {
    return {
    }
  }
}

</script>
<style  scoped lang='scss'>
.my-header {
  position: absolute;
  z-index: 50;
}
.layout {
  // position: relative;
  height: 100%;
}
.my-menu {
  position: absolute;
  // top: 80px;
  width: 100%;
  height: 100%;
  z-index: 40;
  // margin-top: 80px;
}
</style>