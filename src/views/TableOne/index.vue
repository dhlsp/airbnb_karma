<template>
  <div>
    <el-row>
      <el-col>
        <el-table v-loading="loadTableData" :data="tableData" border>
          <el-table-column prop="name" label="姓名" min-width="150" header-align="center" align="center"></el-table-column>
          <el-table-column prop="sex" label="性别" min-width="150" header-align="center" align="center"></el-table-column>
          <el-table-column prop="age" label="年龄" min-width="150" header-align="center" align="center"></el-table-column>
          <el-table-column prop="address" label="地址" min-width="150" header-align="center" align="center"></el-table-column>
          <el-table-column prop="detailed" label="详细信息" min-width="150" header-align="center" align="center"></el-table-column>
          <el-table-column prop="school" label="学校" min-width="150" header-align="center" align="center"></el-table-column>
          <el-table-column fixed="right" label="操作" min-width="200" header-align="center" align="center">
            <template slot-scope="scope">
              <el-button size="mini" type="primary" @click="handleSubmit(scope.row, scope.$index)">确定</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>

      <br>{{tableData}}
      <br>{{rowLoad}}

      <el-col>
        <el-table :data="rowLoad" border>
          <el-table-column prop="name" label="姓名" min-width="150" header-align="center" align="center"></el-table-column>
          <el-table-column prop="sex" label="性别" min-width="150" header-align="center" align="center"></el-table-column>
          <el-table-column prop="age" label="年龄" min-width="150" header-align="center" align="center"></el-table-column>
          <el-table-column prop="address" label="地址" min-width="150" header-align="center" align="center"></el-table-column>
          <el-table-column prop="detailed" label="详细信息" min-width="150" header-align="center" align="center"></el-table-column>
          <el-table-column prop="school" label="学校" min-width="150" header-align="center" align="center"></el-table-column>
          <el-table-column fixed="right" label="操作" min-width="200" header-align="center" align="center">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="delSubmit(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: 'TableOne',
  data() {
    return {
      loadTableData: false,
      tableData: [{
        name: '小胡',
        sex: '男',
        age: '20',
        address: '广东',
        detailed: '250',
        school: '小学',
      }, {
        name: '崔楠',
        sex: '女',
        age: '55',
        address: '广东',
        detailed: '55',
        school: '大学',
      }],
      rowLoad: [],
    };
  },
  methods: {
    handleSubmit(row, index) {
      console.log(row);
      this.rowLoad.push(row);
      console.log(this.rowLoad);
      this.tableData.splice(index, 1);
    },
    delSubmit(index, row) {
      this.tableData.push(row);
      this.rowLoad.splice(index, 1);
    },
  },
};
</script>
