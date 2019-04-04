<template>
  <div>
    <el-alert
      title="成功提示的文案"
      type="success"
      :description="description"
      show-icon>
    </el-alert>
    <el-alert
      title="消息提示的文案"
      type="info"
      :description="description"
      show-icon>
    </el-alert>
    <el-alert
      title="警告提示的文案"
      type="warning"
      :description="description"
      show-icon>
    </el-alert>
    <el-alert
      title="错误提示的文案"
      type="error"
      :description="description"
      show-icon>
    </el-alert>
    <el-alert
      title="错误提示的文案"
      type="error"
      center
      :closable="false"
      :description="description"
      show-icon>
    </el-alert>
    <div style="padding: 10px;text-align: center;">
      <el-button :plain="true" @click="open2">成功</el-button>
      <el-button :plain="true" @click="open3">警告</el-button>
      <el-button :plain="true" @click="open">消息</el-button>
      <el-button :plain="true" @click="open4">错误</el-button>
    </div>
    <div style="padding: 10px;text-align: center;">
      <el-button :plain="true" @click="openMessage">消息</el-button>
      <el-button :plain="true" @click="openSuccessful">成功</el-button>
      <el-button :plain="true" @click="openWarning">警告</el-button>
      <el-button :plain="true" @click="openError">错误</el-button>
    </div>
    <div>
      <el-button :plain="true" @click="openHTML">使用 HTML 片段</el-button>
      <el-button type="text" @click="openBox">点击打开 Message Box</el-button>
      <el-button @click="openAlert">点击打开</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlertWarning',
  data() {
    return {
      description: '文字说明文字说明文字说明文字说明文字说明文字说明',
    };
  },
  methods: {
    openMessage() {
      this.$message({
        showClose: true,
        message: '这是一条消息提示',
      });
    },
    openSuccessful() {
      this.$message({
        showClose: true,
        message: '恭喜你，这是一条成功消息',
        type: 'success',
      });
    },
    openWarning() {
      this.$message({
        showClose: true,
        message: '警告哦，这是一条警告消息',
        type: 'warning',
      });
    },
    openError() {
      this.$message({
        showClose: true,
        message: '错了哦，这是一条错误消息',
        type: 'error',
      });
    },
    open() {
      this.$message('这是一条消息提示');
    },
    open2() {
      this.$message({
        message: '恭喜你，这是一条成功消息',
        type: 'success',
      });
    },
    open3() {
      this.$message({
        message: '警告哦，这是一条警告消息',
        type: 'warning',
      });
    },
    open4() {
      this.$message.error('错了哦，这是一条错误消息');
    },

    openHTML() {
      this.$message({
        dangerouslyUseHTMLString: true,
        message: '<strong>这是 <i>HTML</i> 片段</strong>',
      });
    },
    openBox() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!',
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除',
        });
      });
    },

    openAlert() {
      const h = this.$createElement;
      this.$msgbox({
        title: '消息',
        message: h('p', null, [
          h('span', null, '内容可以是 '),
          h('i', { style: 'color: teal' }, 'Vue测试'),
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = '执行中...';
            setTimeout(() => {
              done();
              setTimeout(() => {
                instance.confirmButtonLoading = false;
              }, 300);
            }, 3000);
          } else {
            done();
          }
        },
      }).then(action => {
        this.$message({
          type: 'info',
          message: 'action: ' + action,
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.el-alert {
  margin: 10px;
}
</style>
