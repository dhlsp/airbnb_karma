<template>
  <div>
    <el-button size="medium" type="primary" @click="addDemo">添加行</el-button>

    <el-table :data="tableData" @current-change="handleCurrentChange" ref="demoTable" highlight-current-row border class="tb-edit" style="width: 100%">
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="name" label="姓名" min-width="200" header-align="center" align="center">
        <template slot-scope="scope">
          <el-input size="mini" v-model="scope.row.name" placeholder="请输入内容"></el-input>
          <span>{{scope.row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="isSB" label="学生" width="80" header-align="center" align="center">
        <template slot-scope="scope">
          <el-checkbox size="mini" v-model="scope.row.isSB"></el-checkbox>
          <span>{{({true:"是",false:"否"})[scope.row.isSB]}}</span>
        </template>
      </el-table-column>
      <!-- <el-table-column prop="sex" label="性别" width="80">
        <template slot-scope="scope">
          <el-select v-model="scope.row.sex" placeholder="请选择" size="mini">
            <el-option label="男" :value="1"></el-option>
            <el-option label="女" :value="0"></el-option>
          </el-select>
          <span>{{({1:"男",0:"女"})[scope.row.sex]}}</span>
        </template>
      </el-table-column> -->
      <el-table-column prop="name" label="年龄" width="150" header-align="center" align="center">
        <template slot-scope="scope">
          <el-input type="number" v-model="scope.row.age" size="mini" controls-position="right" :min="1" :max="100"></el-input>
          <span>{{scope.row.age}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="日期" min-width="200" header-align="center" align="center">
        <template slot-scope="scope">
          <el-date-picker size="mini" v-model="scope.row.date" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd">
          </el-date-picker>
          <span>{{scope.row.date}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="地址" min-width="200" header-align="center" align="center">
        <template slot-scope="scope">
          <el-input size="mini" v-model="scope.row.address" placeholder="请输入内容"></el-input>
          <span>{{scope.row.address}}</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" min-width="200" header-align="center" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleSubmit(scope.$index, scope.row)">保存</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    {{JSON.stringify(tableData)}}
  </div>
</template>

<script>
export default {
  name: 'TableThree',
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        age: 18,
        sex: 1,
        isSB: true,
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-04',
        sex: 1,
        name: '王小虎',
        isSB: true,
        age: 18,
        address: '上海市普陀区金沙江路 1517 弄',
      }],
      form: {
        date: '',
        sex: 1,
        name: '',
        age: 18,
        isSB: true,
        address: '',
      },
      currentRow: null,
    };
  },
  methods: {
    addDemo() {
      let d = {
        date: '',
        sex: 1,
        name: '',
        age: 18,
        isSB: true,
        address: '',
      };
      this.tableData.push(d);
      setTimeout(() => { this.$refs.demoTable.setCurrentRow(d); }, 10);
    },
    handleSubmit() {
      setTimeout(() => { this.$refs.demoTable.setCurrentRow(this.form); }, 10);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    handleDelete(index) {
      this.tableData.splice(index, 1);
    },
  },
};
</script>

<style>
.tb-edit .el-input {
  display: none;
}
.tb-edit .current-row .el-input {
  display: block;
}
.tb-edit .current-row .el-input+span {
  display: none;
}
</style>
