<template>
  <div class="app-wrapper" :class="{hideSidebar: isActive}">
    <max-header></max-header>
    <div class="app-wrapper">
      <sidebar class="sidebar-container"></sidebar>
      <div class="main-container">
        <p-header></p-header>
        <el-row class="main">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from './components/sidebar';
import pHeader from './components/pHeader';
import maxHeader from './components/maxHeader';

export default {
  name: 'layout',
  computed: {
    isActive() {
      return this.$store.getters.sidebar.opened;
    },
  },
  components: {
    sidebar,
    pHeader,
    maxHeader,
  },
};
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
.main-container {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  .main {
    flex: 1;
    box-sizing: border-box;
    padding: 10px;
    font-size: 14px;
    overflow-y: auto;
    overflow-x: hidden;
  }
}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
  .app-wrapper {
    display: flex;
    flex-direction: column;
    background: #ffffff;
  }
</style>
