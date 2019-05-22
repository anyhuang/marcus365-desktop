<template>
  <div id="app">
    <a-layout class="layout">
      <a-layout-header id="layout-header">
        <TopMenu />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view/>
      </a-layout-content>
      <a-layout-footer class="footer">
        <span>Design by Marcus</span>
      </a-layout-footer>
    </a-layout>

  </div>
</template>

<script>
  import TopMenu from "./components/TopMenu";
  export default {
    components: {TopMenu}
  }
</script>


<style>
  #app{
    height: 100vh;
  }

  .layout {
    height: 100%;
  }

  #layout-header {
    padding: 0;
  }

  .content {
    padding: 20px 50px;
    height: 100%;
  }
  .footer{
    text-align: center;
  }
</style>
