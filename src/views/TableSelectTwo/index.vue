<template>
  <div>
    <el-button-group class="equip-operation-btn">
      <el-button size="small">
        <i class="el-icon-refresh"></i>
      </el-button>
      <el-button size="small">
        <i class="el-icon-s-grid"></i>
        <el-dropdown trigger="click" :hide-on-click="false">
          <i class="el-icon-arrow-down el-icon--right"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item,index) in labelData" :key="index">
              <el-checkbox :label="item.label" true-label="A" false-label="B" v-model="checkList[index]" checked=""></el-checkbox>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-button>
    </el-button-group>

    <div style="padding-bottom: 10px">
      {{checkList}}
    </div>

    <el-table :data="tableData" border>
      <el-table-column v-if="checkList[0] === 'A'" prop="id" label="编号" min-width="150" header-align="center" align="center"></el-table-column>
      <el-table-column v-if="checkList[1] === 'A'" prop="name" label="名称" min-width="150" header-align="center" align="center"></el-table-column>
      <el-table-column v-if="checkList[2] === 'A'" prop="wareName" label="仿真软件名称" min-width="150" header-align="center" align="center"></el-table-column>
      <el-table-column v-if="checkList[3] === 'A'" prop="type" label="类型" min-width="150" header-align="center" align="center"></el-table-column>
      <el-table-column v-if="checkList[4] === 'A'" prop="createTime" label="创建时间" min-width="150" header-align="center" align="center"></el-table-column>
      <el-table-column v-if="checkList[5] === 'A'" prop="createUser" label="创建者" min-width="150" header-align="center" align="center"></el-table-column>
      <el-table-column v-if="checkList[6] === 'A'" prop="changeTime" label="修改时间" min-width="150" header-align="center" align="center"></el-table-column>
      <el-table-column v-if="checkList[7] === 'A'" prop="changeUser" label="修改者" min-width="150" header-align="center" align="center"></el-table-column>
      <el-table-column v-if="checkList[8] === 'A'" fixed="right" label="操作" min-width="200" header-align="center" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="delSubmit(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'TableSelectTwo',
  data() {
    return {
      checkList: [],
      labelData: [
        {
          label: '编号',
          props: 'id',
        }, {
          label: '名称',
          props: 'name',
        }, {
          label: '仿真软件名称',
          props: 'wareName',
        }, {
          label: '类型',
          props: 'type',
        }, {
          label: '创建时间',
          props: 'createTime',
        }, {
          label: '创建者',
          props: 'createUser',
        }, {
          label: '修改时间',
          props: 'changeTime',
        }, {
          label: '修改者',
          props: 'changeUser',
        }, {
          label: '操作',
        },
      ],

      tableData: [{
        id: '1',
        name: '战三',
        wareName: '远程软件',
        type: '运行',
        createTime: '2019-9-10',
        createUser: 'admin',
        changeTime: '2019-10-10',
        changeUser: '李四',
      }],
    };
  },
  // 监听多选框的选中状态
  computed: {
    datas() {
      let arr = [];
      let i;
      if (i in this.checkList) {
        arr.push(this.checkList[i]);
      }

      let data = [];
      for (let i = 0; i < arr.length; i++) {
        let j = {};
        j.check = arr[i];
        data.push(j);
      }

      this.labelData.forEach((item, index) => {
        item.check = arr[index];
      });

      data = this.labelData;
      return data;
    },
  },
  methods: {
    delSubmit() {},
  },
};
</script>

<style scoped>
.equip-operation-btn {
  padding: 10px 0;
}
button.el-button--small, .el-button--small.is-round {
  height: 32px;
}
</style>
