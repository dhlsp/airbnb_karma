<template>
  <div>
    <el-table :data="tableData" border>
      <el-table-column v-if="checkList[0] === 'A'" label="目标一" header-align="center" align="center">
        <el-table-column v-if="checkOneList[0] === 'A'" prop="id" label="编号" min-width="150" header-align="center" align="center"></el-table-column>
        <el-table-column v-if="checkOneList[1] === 'A'" prop="name" label="名称" min-width="150" header-align="center" align="center"></el-table-column>
        <el-table-column v-if="checkOneList[2] === 'A'" prop="wareName" label="仿真软件名称" min-width="150" header-align="center" align="center"></el-table-column>
        <el-table-column v-if="checkOneList[3] === 'A'" prop="type" label="类型" min-width="150" header-align="center" align="center"></el-table-column>
      </el-table-column>
      <el-table-column v-if="checkList[1] === 'A'" label="目标二" header-align="center" align="center">
        <el-table-column v-if="checkTwoList[0] === 'A'" prop="createTime" label="创建时间" min-width="150" header-align="center" align="center"></el-table-column>
        <el-table-column v-if="checkTwoList[1] === 'A'" prop="createUser" label="创建者" min-width="150" header-align="center" align="center"></el-table-column>
      </el-table-column>
      <el-table-column v-if="checkList[2] === 'A'" label="目标三" header-align="center" align="center">
        <el-table-column v-if="checkThreeList[0] === 'A'" prop="changeTime" label="修改时间" min-width="150" header-align="center" align="center"></el-table-column>
        <el-table-column v-if="checkThreeList[1] === 'A'" prop="changeUser" label="修改者" min-width="150" header-align="center" align="center"></el-table-column>
      </el-table-column>
      <el-table-column v-if="checkList[3] === 'A'" label="目标四" header-align="center" align="center">
        <el-table-column v-if="checkFourList[0] === 'A'" prop="updateTime" label="更新时间" min-width="150" header-align="center" align="center"></el-table-column>
      </el-table-column>
      <el-table-column v-if="checkFourList[1] === 'A'" fixed="right" label="操作" min-width="200" header-align="center" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="delSubmit(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div style="padding: 20px">
      <el-button-group class="equip-operation-btn" style="float: right">
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
                <div v-if="index === 0 && checkList[0] === 'A'" style="padding-left: 20px;">
                  <div v-for="(item1, index1) in labelOneData" :key="index1">
                    <el-checkbox :label="item1.label" true-label="A" false-label="B" v-model="checkOneList[index1]" checked=""></el-checkbox>
                  </div>
                </div>
                <div v-if="index === 1 && checkList[1] === 'A'" style="padding-left: 20px;">
                  <div v-for="(item2, index2) in labelTwoData" :key="index2">
                    <el-checkbox :label="item2.label" true-label="A" false-label="B" v-model="checkTwoList[index2]" checked=""></el-checkbox>
                  </div>
                </div>
                <div v-if="index === 2 && checkList[2] === 'A'" style="padding-left: 20px;">
                  <div v-for="(item3, index3) in labelThreeData" :key="index3">
                    <el-checkbox :label="item3.label" true-label="A" false-label="B" v-model="checkThreeList[index3]" checked=""></el-checkbox>
                  </div>
                </div>
                <div v-if="index === 3 && checkList[3] === 'A'" style="padding-left: 20px;">
                  <div v-for="(item4, index4) in labelFourData" :key="index4">
                    <el-checkbox :label="item4.label" true-label="A" false-label="B" v-model="checkFourList[index4]" checked=""></el-checkbox>
                  </div>
                </div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-button>
      </el-button-group>

      <div>
        checkList: {{checkList}}
        <br>
        checkOneList: {{checkOneList}}
        <br>
        checkTwoList: {{checkTwoList}}
        <br>
        checkThreeList: {{checkThreeList}}
        <br>
        checkFourList: {{checkFourList}}
      </div>
    </div>

    <!-- <el-button-group class="equip-operation-btn" style="float: right">
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
              <div v-if="index === 0 && checkList[0] === 'A'" style="padding-left: 20px;">
                <div v-for="(item1, index1) in labelOneData" :key="index1">
                  <el-checkbox :label="item1.label" true-label="A" false-label="B" v-model="checkOneList[index1]" checked=""></el-checkbox>
                </div>
              </div>
              <div v-if="index === 1 && checkList[1] === 'A'" style="padding-left: 20px;">
                <div v-for="(item2, index2) in labelTwoData" :key="index2">
                  <el-checkbox :label="item2.label" true-label="A" false-label="B" v-model="checkTwoList[index2]" checked=""></el-checkbox>
                </div>
              </div>
              <div v-if="index === 2 && checkList[2] === 'A'" style="padding-left: 20px;">
                <div v-for="(item3, index3) in labelThreeData" :key="index3">
                  <el-checkbox :label="item3.label" true-label="A" false-label="B" v-model="checkThreeList[index3]" checked=""></el-checkbox>
                </div>
              </div>
              <div v-if="index === 3 && checkList[3] === 'A'" style="padding-left: 20px;">
                <div v-for="(item4, index4) in labelFourData" :key="index4">
                  <el-checkbox :label="item4.label" true-label="A" false-label="B" v-model="checkFourList[index4]" checked=""></el-checkbox>
                </div>
              </div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-button>
    </el-button-group>

    <div style="padding-top: 10px;padding-left: 10px">
      checkList: {{checkList}}
      <br>
      checkOneList: {{checkOneList}}
      <br>
      checkTwoList: {{checkTwoList}}
      <br>
      checkThreeList: {{checkThreeList}}
      <br>
      checkFourList: {{checkFourList}}
    </div> -->

  </div>
</template>

<script>
export default {
  name: 'TableSelectCheckbox',
  data() {
    return {
      checkList: [],
      checkOneList: [],
      checkTwoList: [],
      checkThreeList: [],
      checkFourList: [],
      labelData: [
        {
          label: '目标一',
        }, {
          label: '目标二',
        }, {
          label: '目标三',
        }, {
          label: '目标四',
        },
      ],
      labelOneData: [
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
        },
      ],
      labelTwoData: [
        {
          label: '创建时间',
          props: 'createTime',
        }, {
          label: '创建者',
          props: 'createUser',
        },
      ],
      labelThreeData: [
        {
          label: '修改时间',
          props: 'changeTime',
        }, {
          label: '修改者',
          props: 'changeUser',
        },
      ],
      labelFourData: [
        {
          label: '更新时间',
          props: 'update',
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
  watch: {
    'checkOneList': {
      handler(val) {
        const res = new Map();
        let len = val.filter((val) => !res.has(val) && res.set(val, 1));
        if (len.length === 1 && len[0] === 'B') {
          this.checkList[0] = 'B';
          console.log('this.checkList[0]', this.checkList[0]);
        }
        // console.log(val.filter((val) => !res.has(val) && res.set(val, 1)));
      },
    },
    'checkTwoList': {
      handler(val) {
        const res = new Map();
        let len = val.filter((val) => !res.has(val) && res.set(val, 1));
        if (len.length === 1 && len[0] === 'B') {
          this.checkList[1] = 'B';
        }
      },
    },
    'checkThreeList': {
      handler(val) {
        const res = new Map();
        let len = val.filter((val) => !res.has(val) && res.set(val, 1));
        if (len.length === 1 && len[0] === 'B') {
          this.checkList[2] = 'B';
        }
      },
    },
    'checkFourList': {
      handler(val) {
        const res = new Map();
        let len = val.filter((val) => !res.has(val) && res.set(val, 1));
        if (len[0] === 'B') {
          this.checkList[3] = 'B';
        }
      },
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
