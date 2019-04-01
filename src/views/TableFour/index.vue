<template>
  <el-table :data="tableData6" border="" min-width="200" header-align="center" align="center" :summary-method="getSummaries" show-summary style="width: 100%; margin-top: 20px" :row-class-name="tableRowClassName">
    <el-table-column prop="id" label="ID" width="180" header-align="center" align="center" :render-header="renderHeader"></el-table-column>
    <el-table-column prop="name" label="姓名" min-width="100" header-align="center" align="center"></el-table-column>
    <el-table-column prop="amount1" label="数值 1（元）" min-width="100" header-align="center" align="center"></el-table-column>
    <el-table-column prop="amount2" label="数值 2（元）" min-width="100" header-align="center" align="center"></el-table-column>
    <el-table-column prop="amount3" label="数值 3（元）" min-width="100" header-align="center" align="center"></el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'TableFour',
  data() {
    return {
      tableData6: [{
        id: '12987122',
        name: '王小虎',
        amount1: '234',
        amount2: '3.2',
        amount3: '10',
      }, {
        id: '12987123',
        name: '王小未',
        amount1: '165',
        amount2: '4.43',
        amount3: 12,
      }, {
        id: '12987124',
        name: '王小虎',
        amount1: '324',
        amount2: '1.9',
        amount3: 9,
      }, {
        id: '12987125',
        name: '王小虎',
        amount1: '621',
        amount2: '2.2',
        amount3: 17,
      }, {
        id: '12987126',
        name: '王小二',
        amount1: '539',
        amount2: '4.1',
        amount3: 15,
      }],
    };
  },
  methods: {
    // 自定义
    getSummaries(params) {
      let ret = [];
      let { columns, data } = params;
      let getData = (key, index) => {
        let total = 0;
        data.forEach((item) => {
          total += (item[key] || 0) * 100;
        });
        total /= 100;
        // total = util.moneyFormat(total);
        ret[index] = total;
      };
      columns.forEach((item, index) => {
        let property = item.property;
        if (index !== 0) {
          getData(property, index);
        }
      });
      ret[0] = '总计';
      return ret;
    },
    // 默认
    // getSummaries(param) {
    //   const { columns, data } = param;
    //   const sums = [];
    //   columns.forEach((column, index) => {
    //     if (index === 0) {
    //       sums[index] = '总价';
    //       return;
    //     }
    //     const values = data.map(item => Number(item[column.property]));
    //     // console.log(values);
    //     if (!values.every(value => isNaN(value))) {
    //       console.log(values);
    //       sums[index] = values.reduce((prev, curr) => {
    //         const value = Number(curr);
    //         if (!isNaN(value)) {
    //           return prev + curr;
    //         }
    //         return prev;
    //       }, 0);
    //       sums[index] += ' 元';
    //     } else {
    //       sums[index] = 'N/A';
    //     }
    //   });
    //   return sums;
    // },
    // 提示
    // renderHeader(h) {
    //   return h('span', {
    //     style: {
    //       height: '23px',
    //     },
    //   }, [
    //     this.$t('ID'),
    //     h('el-tooltip', {
    //       props: {
    //         effect: 'dark',
    //         // content: 'Top Center 提示文字',
    //         placement: 'top',
    //       },
    //     }, [
    //       h('span', {
    //         slot: 'default',
    //         style: {
    //           display: 'inline-block',
    //           padding: '0 5px',
    //           color: '#ff0000',
    //           height: '23px',
    //           'font-size': '10px',
    //           'font-weight': 'bold',
    //         },
    //       }, '?'),
    //       h('span', {
    //         slot: 'content',
    //       }, '账号的ID号'),
    //     ]),
    //   ]);
    // },
    renderHeader(h) {
      return h('span', {}, [
        h('span', {}, 'ID'),
        h('el-popover', {
          props: {
            placement: 'top-start',
            // width: '100',
            trigger: 'hover',
            // content: '领先/落后品类=单店平均单量-该品类城市店均单量',
            content: '账号的ID号',
          },
        }, [
          h('i', {
            slot: 'reference',
            class: 'el-icon-question',
            style: {
              color: '#F9DA28',
            },
          }, ''),
        ]),
      ]);
    },
    // 列表背景颜色
    tableRowClassName({ row }) {
      if (row.name === '王小二') {
        return 'error';
      }
      if (row.name === '王小未') {
        return 'success';
      }
    },
  },
};
</script>

<style>
.el-table .warning {
  background: #ffffe6 !important;
}
.el-table .success {
  background: #eaffeb !important;
}
.el-table .error {
  background: #fdf2f2 !important;
}
</style>
