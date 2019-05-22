<template>
  <div>
    <h2 class="logo">Marcus 365</h2>
    <a-menu
      theme="dark"
      mode="horizontal"
      :defaultSelectedKeys="[$route.path]"
      :selectedKeys="[$route.path]"
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item
        v-for="(item) in $router.options.routes"
        :key="item.path"
        :v-if="item.meta.menuShow"
      >
        <router-link :to="item.path">{{item.meta.name}}</router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>

export default {
  name: "TopMenu",
};
</script>

<style>
.logo {
  width: 120px;
  height: 31px;
  margin: 0 28px;
  float: left;
  line-height: 64px;
  color: white;
}
</style>
