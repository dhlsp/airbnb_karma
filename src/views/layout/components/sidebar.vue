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
        {
          name: '列表管理',
          path: '/table_one',
          children: [
            {
              name: '列表移动列',
              path: '/table_one',
              title: '列表移动列',
            },
            {
              name: '列表添加列',
              path: '/table_two',
              title: '列表添加列',
            },
            {
              name: '列表编辑列',
              path: '/table_three',
              title: '列表编辑列',
            },
            {
              name: '列表合计列',
              path: '/table_four',
              title: '列表合计列',
            },
          ],
        },
        {
          name: '表单管理',
          path: '/form_one',
          children: [
            {
              name: '表单一',
              path: '/form_one',
              title: '表单一',
            },
          ],
        },
        {
          name: '图形管理',
          path: '/one_chart',
          children: [
            {
              name: '图形一',
              path: '/chart_one',
              title: '图形一',
            },
            {
              name: '图形二',
              path: '/chart_two',
              title: '图形二',
            },
            {
              name: '饼状图',
              path: '/chart_pie',
              title: '饼状图',
            },
            {
              name: '折线图',
              path: '/chart_line',
              title: '折线图',
            },
            {
              name: '柱状图',
              path: '/chart_columnar',
              title: '柱状图',
            },
            {
              name: '环形图',
              path: '/chart_ring',
              title: '环形图',
            },
            {
              name: '热力图',
              path: '/chart_hot',
              title: '热力图',
            },
          ],
        },
        {
          name: '信息管理',
          path: '/message_check',
          children: [
            {
              name: '信息查看',
              path: '/message_check',
              title: '信息查看',
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
