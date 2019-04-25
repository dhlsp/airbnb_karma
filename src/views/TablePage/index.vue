<template>
  <div>
    <el-table v-loading="loadTableData" :data="tableData" border>
      <el-table-column prop="file_name" :label="$t('文件名')" min-width="200" header-align="center" align="center"></el-table-column>
      <el-table-column prop="size" :label="$t('文件大小(KB)')" min-width="200" header-align="center" align="center"></el-table-column>
      <el-table-column fixed="right" :label="$t('操作')" min-width="100" header-align="center" align="center">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-download" size="small" @click="download(scope.row)">{{$t('下载')}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <m-pagination ref="page" :total="total" @handleFn="handleFn"></m-pagination>
  </div>
</template>

<script>
// import util, { downloadFile } from '@js/util';

// 一次性返回所有列表的保存变量
let allData = [];

export default {
  name: 'TablePage',
  data() {
    return {
      page: 1,
      // page_size: this.$store.getters.pagination.page_size,
      page_size: 9,
      isRefresh: false,
      loadTableData: false,
      tableData: [],
      total: 0,
    };
  },
  created() {
    this.getTableData();
  },
  beforeDestroy() {
    allData = null;
  },
  methods: {
    search() {
      this.isRefresh = true;
      this.$refs.page.setData(1);
    },
    getTableData() {
      this.loadTableData = true;
      let data = [{
        file_name: '1',
      }, {
        file_name: '2',
      }, {
        file_name: '3',
      }, {
        file_name: '4',
      }, {
        file_name: '5',
      }, {
        file_name: '6',
      }, {
        file_name: '7',
      }, {
        file_name: '8',
      }, {
        file_name: '9',
      }, {
        file_name: '10',
      }, {
        file_name: '11',
      }, {
        file_name: '12',
      }];
      allData = data;
      console.log(allData);
      this.tableData = data.slice(0, this.page_size);
      this.total = data.length;
      this.loadTableData = false;
      // this.$api.monthKnot_getMonthBills({})
      //   .then((data) => {
      //     this.loadTableData = false;
      //     data = data.data || [];
      //     data.forEach((item) => {
      //       item.size = util.isNumeric(item.size) ? util.toFixed(item.size / 1024, 2) : 0;
      //     });
      //     allData = data;
      //     this.tableData = data.slice(0, this.page_size);
      //     this.total = data.length;
      //   })
      //   .catch(() => {
      //     this.tableData = [];
      //     this.loadTableData = false;
      //   });
    },
    download() {},
    // download(row) {
    //   if (row.file_name) {
    //     let params = {
    //       file_name: row.file_name,
    //     };
    //     this.$api.monthKnot_downloadMonthBills({
    //       data: params,
    //       opts: {
    //         responseType: 'blob',
    //       },
    //     }, true)
    //       .then((data) => {
    //         downloadFile(`${row.file_name}`, data);
    //       })
    //       .catch(() => {
    //         this.$message.error(this.$t('下载失败'));
    //       });
    //   }
    // },
    handleFn(obj) {
      if (obj.hasOwnProperty('page')) {
        this.page = obj.page;
      }
      if (obj.hasOwnProperty('page_size')) {
        this.page_size = obj.page_size;
      }
      let start = (this.page - 1) * this.page_size;
      let end = this.page * this.page_size;
      if (!this.isRefresh) {
        console.log('start, end', start, end);
        this.tableData = allData.slice(start, end);
      } else {
        this.getTableData();
        this.isRefresh = false;
      }
    },
  },
};
</script>
