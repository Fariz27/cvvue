<template>
  <div id="app">
    <router-view name='header'/>
    <router-view/>
    <router-view name='footer'/>
  </div>
</template>
<style lang="scss">
@import "../public/scss/style.scss";
</style>
