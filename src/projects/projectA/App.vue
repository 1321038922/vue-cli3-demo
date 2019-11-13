<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang='scss'>
* {
  padding: 0;
  margin: 0;
  list-style: none ;
}
.lb {
  display: inline-block;
}
.clearfix:after{
  content: '';
  display: block;
  clear: both;
  width: 0;
  padding: 0;
  visibility: hidden;
}
.fll{
  float: left;
}
.flr {
  float: right;
}
</style>
