<template>
  <div class="">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>tab选项卡</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <el-tabs v-model="message">
        <el-tab-pane :label="`未读消息(${form.unread.length})`" name="first">
          <el-table :data="form.unread" :show-header="false" style="width: 100%;">
            <el-table-column>
              <template slot-scope="scope">
                <span class="message-title">{{scope.row.title}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="date" width="180"></el-table-column>
            <el-table-column width="120">
              <template slot-scope="scope">
                <el-button type="primary" size="small" @click="handleRead(scope.$index)">标为已读</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="handle-row">
            <el-button :disabled="form.unread.length === 0" type="primary" size="small" @click="handleAllRead()">全部标为已读</el-button>
          </div>
        </el-tab-pane>

        <el-tab-pane :label="`已读消息(${form.read.length})`" name="second">
          <template v-if="message === 'second'">
            <el-table :data="form.read" :show-header="false" style="width: 100%;">
            <el-table-column>
              <template slot-scope="scope">
                <span class="message-title">{{scope.row.title}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="date" width="180"></el-table-column>
            <el-table-column width="120">
              <template slot-scope="scope">
                <el-button type="danger" size="small" @click="handleDel(scope.$index)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="handle-row">
            <el-button :disabled="form.read.length === 0" type="danger" size="small" @click="handleAllDel()">全部删除</el-button>
          </div>
          </template>
        </el-tab-pane>

        <el-tab-pane :label="`回收站(${form.recycle.length})`" name="third">
          <template v-if="message === 'third'">
            <el-table :data="form.recycle" :show-header="false" style="width: 100%;">
            <el-table-column>
              <template slot-scope="scope">
                <span class="message-title">{{scope.row.title}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="date" width="180"></el-table-column>
            <el-table-column width="120">
              <template slot-scope="scope">
                <el-button type="warning" size="small" @click="handleRecycle(scope.$index)">还原</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="handle-row">
            <el-button :disabled="form.recycle.length === 0" type="danger" size="small" @click="handleAllRecycle()">清空回收站</el-button>
          </div>
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageTabs',
  data() {
    return {
      message: 'first',
      showHeader: false,
      form: {
        unread: [{
          date: '2018-04-19 20:00:00',
          title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
        }, {
          date: '2018-04-19 21:00:00',
          title: '今晚12点整发大红包，先到先得',
        }],
        read: [{
          date: '2018-04-19 20:00:00',
          title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
        }],
        recycle: [{
          date: '2018-04-19 20:00:00',
          title: '今晚12点整发大红包，先到先得',
        }, {
          date: '2019-01-19 21:00:00',
          title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
        }],
      },
    };
  },
  methods: {
    handleRead(index) {
      const item = this.form.unread.splice(index, 1);
      console.log(item);
      this.form.read = item.concat(this.form.read);
    },
    handleAllRead() {
      const item = this.form.unread.splice('');
      this.form.read = item.concat(this.form.read);
    },
    handleDel(index) {
      const item = this.form.read.splice(index, 1);
      console.log(item);
      this.form.recycle = item.concat(this.form.recycle);
    },
    handleAllDel() {
      const item = this.form.read.splice('');
      this.form.recycle = item.concat(this.form.recycle);
    },
    handleRecycle(index) {
      const item = this.form.recycle.splice(index, 1);
      console.log(item);
      this.form.read = item.concat(this.form.read);
    },
    handleAllRecycle() {
      const item = this.form.recycle.splice('');
      this.form.read = item.concat(this.form.read);
    },
  },
};
</script>

<style scoped>
.message-title {
  cursor: pointer;
}
.handle-row {
  margin-top: 30px;
}
</style>
