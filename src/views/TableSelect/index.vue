<template>
  <div class="app-container">
    <div style="margin: 10px;">
      <el-button slot="small" type="primary" @click="change"><i class="el-icon-s-tools">设置</i></el-button>
    </div>
    <div class="filter-container" v-show="filter">
      <el-checkbox-group v-model="checkboxVal">
        <el-checkbox label="apple">
          apple
        </el-checkbox>
        <el-checkbox label="banana">
          banana
        </el-checkbox>
        <el-checkbox label="orange">
          orange
        </el-checkbox>
        <el-checkbox label="strawberry">
          strawberry
        </el-checkbox>
        <el-checkbox label="watermelon">
          watermelon
        </el-checkbox>
      </el-checkbox-group>
    </div>

    <el-table :key="key" :data="tableData" border fit highlight-current-row style="width: 100%">
      <el-table-column prop="name" label="水果名称" min-width="100" />
      <el-table-column v-for="fruit in formThead" :key="fruit" :label="fruit" min-width="150">
        <template slot-scope="scope">
          {{ scope.row[fruit] }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
const defaultFormThead = ['apple', 'banana'];

export default {
  data() {
    return {
      filter: false,
      tableData: [
        {
          name: '水果01',
          apple: '苹果-10',
          banana: '香蕉-10',
          orange: '橘子-10',
          strawberry: '草莓-10',
          watermelon: '西瓜-10',
        },
        {
          name: '水果02',
          apple: '苹果-20',
          banana: '香蕉-20',
          orange: '橘子-20',
          strawberry: '草莓-20',
          watermelon: '西瓜-20',
        },
      ],
      key: 1, // table key
      formTheadOptions: ['apple', 'banana', 'orange', 'strawberry', 'watermelon'],
      checkboxVal: defaultFormThead, // checkboxVal
      formThead: defaultFormThead, // 默认表头
    };
  },
  watch: {
    checkboxVal(valArr) {
      this.formThead = this.formTheadOptions.filter(i => valArr.indexOf(i) >= 0);
      this.key = this.key + 1; // 为了保证table 每次都会重渲
    },
  },
  methods: {
    change() {
      if (this.filter === true) {
        this.filter = false;
      } else {
        this.filter = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.filter-container {
  padding: 10px;
}
</style>>
