<template>
  <div>
    <el-table border>
      <el-table-column label="目标一" header-align="center" align="center">
        <el-table-column prop="id" label="编号" min-width="150" header-align="center" align="center"></el-table-column>
        <el-table-column prop="name" label="名称" min-width="150" header-align="center" align="center"></el-table-column>
        <el-table-column prop="wareName" label="仿真软件名称" min-width="150" header-align="center" align="center"></el-table-column>
        <el-table-column prop="type" label="类型" min-width="150" header-align="center" align="center"></el-table-column>
      </el-table-column>
      <el-table-column label="目标二" header-align="center" align="center">
        <el-table-column prop="createTime" label="创建时间" min-width="150" header-align="center" align="center"></el-table-column>
        <el-table-column prop="createUser" label="创建者" min-width="150" header-align="center" align="center"></el-table-column>
      </el-table-column>
      <el-table-column label="目标三" header-align="center" align="center">
        <el-table-column prop="changeTime" label="修改时间" min-width="150" header-align="center" align="center"></el-table-column>
      </el-table-column>
      <el-table-column label="目标四" header-align="center" align="center">
        <el-table-column prop="changeUser" label="修改者" min-width="150" header-align="center" align="center"></el-table-column>
      </el-table-column>
      <el-table-column fixed="right" label="操作" min-width="200" header-align="center" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="delSubmit(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
export default {
  name: 'TableSelectCheckbox',
  data() {
    return {};
  },
  methods: {
    delSubmit() {},
  },
};
</script>

<style scoped>

</style>
