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
            },
            {
              name: '生成二维码',
              path: '/fix_qr_code',
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
            },
            {
              name: '列表添加列',
              path: '/table_two',
            },
            {
              name: '列表编辑列',
              path: '/table_three',
            },
            {
              name: '列表合计列',
              path: '/table_four',
            },
            {
              name: '列表合并',
              path: '/table_five',
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
            },
            {
              name: '表单验证',
              path: '/form_validation',
            },
            {
              name: '表单Cron(定时策略)',
              path: '/form_cron',
            },
            {
              name: '时间配置',
              path: '/form_set_config',
            },
            {
              name: '生成二维码',
              path: '/form_qrcode',
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
            },
            {
              name: '图形二',
              path: '/chart_two',
            },
            {
              name: '饼状图',
              path: '/chart_pie',
            },
            {
              name: '折线图',
              path: '/chart_line',
            },
            {
              name: '柱状图',
              path: '/chart_columnar',
            },
            {
              name: '环形图',
              path: '/chart_ring',
            },
            {
              name: '热力图',
              path: '/chart_hot',
            },
            {
              name: '图表池',
              path: '/chart_pool',
            },
            {
              name: '图表统计',
              path: '/chart_analysis',
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
            },
            {
              name: '消息查看',
              path: '/message_tabs',
            },
            {
              name: '信息拖拽',
              path: '/dialog_drag',
            },
            {
              name: '钱包信息',
              path: '/message_money',
            },
          ],
        },
        {
          name: '树形控件',
          path: '/tree_controls',
          children: [
            {
              name: '树形控件',
              path: '/tree_controls',
            },
          ],
        },
        {
          name: '错误处理',
          path: '/error_404',
          children: [
            {
              name: '404页面',
              path: '/error_404',
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
