<template>
  <div class="pro-header">
    <a-icon
      class="trigger"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="changeCollapsed"
    />
    <div class="header-tools">
      <a-icon class="header-tool-icon" type="search" />
      <a-icon class="header-tool-icon" type="question-circle-o" />
      <a-icon type="bell" class="header-tool-icon" />
      <a-dropdown v-model="visible">
        <span class="myspace">
          <a-avatar class="my-avatar" src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
          <span>你的肖同学</span>
        </span>
        <a-menu slot="overlay">
          <a-menu-item key="0">
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
          </a-menu-item>
          <a-menu-item key="1">
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
          </a-menu-item>
          <a-menu-divider />
          <a-menu-item key="3" disabled>3rd menu item（disabled）</a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pro-header',
  props: {
    collapsed: Boolean,
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    changeCollapsed() {
      this.$emit('toggleCollapsed', !this.collapsed);
    },
  },
};
</script>

<style lang="less" scoped>
@import './index.less';
</style>
