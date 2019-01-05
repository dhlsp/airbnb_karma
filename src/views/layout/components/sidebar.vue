<template>
  <scroll-bar ref="scrollBar">
    <el-menu
      mode="vertical"
      :default-active="$route.path"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
      class="menu"
      router>
      <template v-for="(item, index) in routes">
        <el-menu-item v-if="!item.children || item.children.length === 0" :key="index" :index="item.path">
          <svg-icon :icon-class="item.icon || 'reorder'"></svg-icon>
          <span slot="title">{{item.name || '无'}}</span>
        </el-menu-item>
        <el-submenu v-else :index="item.path" :key="index">
          <template slot="title">
            <svg-icon :icon-class="item.icon || 'reorder'"></svg-icon>
            <span slot="title">{{item.name || '无'}}</span>
          </template>
          <el-menu-item v-for="(child, i) in item.children" :key="i" :index="child.path">
            <svg-icon :icon-class="child.icon || 'reorder'"></svg-icon>
            <span>{{child.name || '无'}}</span>
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </scroll-bar>
</template>

<script>
import ScrollBar from '@components/ScrollBar';

export default {
  name: 'sidebar',
  data() {
    return {
      defaultActive: this.$route.path,
      routes: [
        {
          name: '基础信息',
          path: '/home-page',
          children: [
            {
              name: '信息列表',
              path: '/home-page',
              title: '信息列表',
            },
          ],
        },
      ],
    };
  },
  computed: {
    isCollapse() {
      return this.$store.getters.sidebar.opened;
    },
  },
  components: {
    ScrollBar,
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.menu {
  .svg-icon {
    margin-right: 12px;
  }
}
.menu:not(.el-menu--collapse) {
  width: 180px;
}
</style>
