<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-table size="mini" :data="master_user.data" border style="width: 100%" highlight-current-row>
          <el-table-column type="index"></el-table-column>
          <el-table-column v-for="(v, i) in master_user.columns" :key="i" :prop="v.field" :label="v.title" :width="v.width">
            <template slot-scope="scope">
              <span v-if="scope.row.isSet">
                <el-input size="mini" placeholder="请输入内容" v-model="master_user.sel[v.field]"></el-input>
              </span>
              <span v-else>{{scope.row[v.field]}}</span>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" min-width="300" header-align="center" align="center">
            <template slot-scope="scope">
              <el-button type="primary" @click="pwdChange(scope.row,scope.$index,true)">{{scope.row.isSet?'保存':"修改"}}</el-button>
              <el-button type="danger" v-if="!scope.row.isSet" @click="del(scope.row,scope.$index,false)">删除</el-button>
              <el-button type="danger" v-else @click="pwdChange(scope.row,scope.$index,false)">取消</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="24">
        <div class="el-table-add-row" style="width: 99.2%;" @click="addMasterUser()"><span>+ 添加</span></div>
      </el-col>
    </el-row>
    <br>{{master_user.data}}
  </div>
</template>

<script>
export default {
  name: 'TableTwo',
  data() {
    return {
      count: 1,
      timeStr: new Date(),
      master_user: {
        sel: null,
        columns: [
          { field: 'type', title: '远程类型', width: 120 },
          { field: 'addport', title: '连接地址', width: 150 },
          { field: 'user', title: '登录用户', width: 120 },
          { field: 'pwd', title: '登录密码', width: 220 },
          { field: 'info', title: '其他信息' },
        ],
        data: [{
          type: '2016-05-04',
          user: '王小虎',
          addport: '上海市普陀区金沙江路 1517 弄',
          pwd: '1',
          info: '456',
        }, {
          type: '2016-05-01',
          user: '王小虎',
          addport: '上海市普陀区金沙江路 1519 弄',
          pwd: '1',
          info: '456',
        }],
      },
    };
  },
  methods: {
    get() {
      return ((+new Date()) + '_' + (this.count++));
    },
    // 读取表格数据
    readMasterUser() {
      this.master_user.data.map(i => {
        i.id = this.get();
        console.log('表格id', i.id);
        i.isSet = false;
        console.log('表格i', i);
        return i;
      });
    },
    // 添加账号
    addMasterUser() {
      for (let i of this.master_user.data) {
        if (i.isSet) {
          this.$message.warning('请先保存当前编辑项');
        }
      }
      let j = { id: 0, 'type': '', 'addport': '', 'user': '', 'pwd': '', 'info': '', 'isSet': true };
      this.master_user.data.push(j);
      console.log('添加账号this.master_user.data', this.master_user.data);
      this.master_user.sel = JSON.parse(JSON.stringify(j));
      console.log('添加账号this.master_user.sel', this.master_user.sel);
    },
    // 修改
    pwdChange(row, index, cg) {
      // 点击修改，判断是否已经保存所有操作
      for (let i of this.master_user.data) {
        if (i.isSet && i.id !== row.id) {
          this.$message.warning('请先保存当前编辑项');
          return;
        }
      }
      // 是否取消操作
      if (!cg) {
        console.log('是否取消操作:this.master_user.sel', this.master_user.sel);
        console.log('是否取消操作:this.master_user.sel.id', this.master_user.sel.id);
        if (!this.master_user.sel.id) {
          console.log('是否取消操作:index', index);
          this.master_user.data.splice(index, 1);
          console.log('是否取消操作:this.master_user.data', this.master_user.data);
        }
      }
      // 提交数据
      if (row.isSet) {
        console.log('提交数据：row.isSet', row.isSet);
        console.log('提交数据：this.master_user.sel', this.master_user.sel);
        let data = JSON.parse(JSON.stringify(this.master_user.sel));
        console.log('提交数据：data', data);
        // this.master_user.data.push(data);
        console.log('提交数据：data', this.master_user.data);
        // for (let k in data) console.log(k);
        this.$message({
          type: 'success',
          message: '保存成功！',
        });
        // 重新读取表格
        this.readMasterUser();
        row.isSet = false;
      } else {
        this.master_user.sel = JSON.parse(JSON.stringify(row));
        row.isSet = true;
      }
    },
  },
  components: {
    aa: {
      template: '<div>a</div>',
      created() {
        console.log('aa created');
      },
      destroyed() {
        console.log('aa destroyed');
      },
    },
    bb: {
      template: '<div>bbb</div>',
      created() {
        console.log('bb created');
      },
      destroyed() {
        console.log('bb destroyed');
      },
    },
    cc: {
      template: '<div>ccc</div>',
      created() {
        console.log('cc created');
      },
      destroyed() {
        console.log('cc destroyed');
      },
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  cursor: pointer;
}
.el-table-add-row {
  margin-top: 10px;
  width: 100%;
  height: 34px;
  border: 1px dashed #c1c1cd;
  border-radius: 3px;
  cursor: pointer;
  justify-content: center;
  display: flex;
  line-height: 34px;
}
</style>
