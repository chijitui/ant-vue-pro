<template>
  <div class="pro-sidebar">
    <div class="logo">
      <img src="../../../../static/logo.svg">
      <span v-if="!collapsed">Ant Vue Pro</span>
    </div>
    <a-menu
      theme="dark"
      mode="inline"
      :defaultSelectedKeys="defaultSelectedKeys"
      :defaultOpenKeys="defaultOpenKeys"
      :style="menuStyle"
      @click="changeRoute"
      >
      <template v-for="menuItem in menuConfig">
        <a-menu-item :key="menuItem.name" v-if="!('children' in menuItem)">
          <a-icon :type="menuItem.icon" />
          <span>{{ menuItem.title }}</span>
        </a-menu-item>
        <a-sub-menu :key="menuItem.name" v-if="('children' in menuItem)">
          <span slot="title">
            <a-icon :type="menuItem.icon" />
            <span>{{ menuItem.title }}</span>
          </span>
          <a-menu-item :key="subMenuItem.name" v-for="subMenuItem in menuItem.children">
            <a-icon :type="subMenuItem.icon" />
            <span>{{ subMenuItem.title }}</span>
          </a-menu-item>
        </a-sub-menu>
      </template>
    </a-menu>
  </div>
</template>

<script>
import main from '@/router/main';

export default {
  name: 'pro-sidebar',
  props: {
    collapsed: Boolean,
  },
  computed: {
    defaultSelectedKeys() {
      return [this.$route.name];
    },
    defaultOpenKeys() {
      return [this.$route.meta.father];
    },
  },
  data() {
    return {
      menuStyle: {
        padding: '16px 0',
      },
      menuConfig: main,
    };
  },
  methods: {
    changeRoute(route) {
      const path = route.key.replace(/_/g, '/');
      this.$router.push({
        path,
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import './index.less';
</style>
