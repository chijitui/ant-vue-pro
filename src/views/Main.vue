<template>
  <a-layout id="pro-main">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed" width="256">
      <pro-sidebar :collapsed="collapsed"></pro-sidebar>
    </a-layout-sider>
    <a-layout>
      <a-layout-header id="pro-header">
        <pro-header :collapsed="collapsed" @toggleCollapsed="toggleCollapsed"></pro-header>
      </a-layout-header>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import proSidebar from '@/components/main-component/sidebar/index';
import proHeader from '@/components/main-component/header/index';

export default {
  name: 'pro-main',
  components: {
    proSidebar,
    proHeader,
  },
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    toggleCollapsed(collapsed) {
      this.collapsed = collapsed;
    },
  },
};
</script>

<style lang="less" scoped>
@import './main.less';
</style>
