<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      theme="light"
      v-model="collapsed"
      :trigger="null"
      collapsible
    >
      <div class="logo" />
      <a-menu theme="light" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <router-link to="/">
            <a-icon type="user" />
            <span>Home</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="2" to="/about">
          <router-link to="/about">
            <a-icon type="video-camera" />
            <span>About</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout style="height: 100vh">
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
          overflowY: 'scroll',
        }"
      >
        <router-view />
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Created by Saransh Mittal
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
