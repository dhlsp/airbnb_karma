<template>
  <el-row>
    <el-form :inline="true" :model="formData" label-width="0px">
      <el-form-item label="">
        <el-input size="small" v-model.trim="formData.search" @keyup.enter.native="search"></el-input>
      </el-form-item>
      <el-form-item label="">
        <!-- <date-range :startTime.sync="formData.start_time" :endTime.sync="formData.end_time"></date-range> -->
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" size="small" icon="el-icon-search" @click="search">{{$t('搜索')}}</el-button>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" size="small" @click="add">{{$t('新建二维码')}}</el-button>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" size="small" @click="manyDownload">{{$t('批量下载')}}</el-button>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" size="small" @click="manyRegistration">{{$t('批量登记')}}</el-button>
      </el-form-item>
      <el-form-item label="">
        <el-button type="danger" size="small" @click="manyDel">{{$t('批量删除')}}</el-button>
      </el-form-item>
    </el-form>
    <!-- <tabs v-model="formData.qr_status" type="qrStatuSelect" @search="search"></tabs> -->
    <el-table v-loading="loadTableData" :data="tableData" @selection-change="handleSelectionChange" border>
      <el-table-column type="selection" width="55" header-align="center" align="center"></el-table-column>
      <el-table-column prop="qr_code" :label="$t('二维码序列号')" min-width="200" header-align="center" align="center"></el-table-column>
      <el-table-column v-if="formData.qr_status === '2'" prop="register_acc_name" :label="$t('登记操作人')" width="250" header-align="center" align="center"></el-table-column>
      <el-table-column v-if="formData.qr_status === '2'" prop="register_time" :label="$t('登记时间')" width="250" header-align="center" align="center" :formatter="formatter"></el-table-column>
      <el-table-column v-if="formData.qr_status === '3'" prop="bind_merc_name" :label="$t('绑定商户')" width="250" header-align="center" align="center"></el-table-column>
      <el-table-column v-if="formData.qr_status === '3'" prop="bind_acc_name" :label="$t('绑定操作人')" width="250" header-align="center" align="center"></el-table-column>
      <el-table-column v-if="formData.qr_status === '3'" prop="bind_time" :label="$t('绑定时间')" width="250" header-align="center" align="center" :formatter="formatter"></el-table-column>
      <el-table-column :label="$t('创建时间')" prop="create_time" min-width="170" header-align="center" align="center" :formatter="formatter"></el-table-column>
      <el-table-column fixed="right" :label="$t('操作')" min-width="280" header-align="center" align="center">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="preview(scope.row)">{{$t('预览')}}</el-button>
          <el-button v-if="formData.qr_status !== '1'" type="primary" size="small" @click="download(scope.row)">{{$t('下载')}}</el-button>
          <el-button v-if="formData.qr_status === '1'" type="primary" size="small" @click="registration(scope.row)">{{$t('登记')}}</el-button>
          <el-button v-if="formData.qr_status === '2'" type="primary" size="small" @click="cancelRegistration(scope.row)">{{$t('取消登记')}}</el-button>
          <el-button v-if="formData.qr_status !== '3'" type="danger" size="small" @click="del(scope.row)">{{$t('删除')}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <m-pagination ref="page" :total="total" @handleFn="handleFn"></m-pagination>
    <add :openDialog.sync="openDialog" @search="getTableData"></add>
    <preview :openDialog.sync="openPreviewDialog" :src="qr_code_url"></preview>
  </el-row>
</template>

<script>
// import { downloadFile } from '@js/util';
import { parseTime } from '@filters';
import add from './components/add';
import preview from './components/preview';

export default {
  name: 'FixQRCode',
  data() {
    return {
      openDialog: false,
      openPreviewDialog: false,
      formData: {
        qr_status: '1',
        search: '',
        start_time: '',
        end_time: '',
        page: 1,
        page_size: 10,
      },
      loadTableData: false,
      tableData: [
        {
          qr_code: '12312',
        },
      ],
      total: 0,
      qrArr: [],
      qr_code_url: '',
    };
  },
  created() {
    this.getTableData();
  },
  methods: {
    search() {
      console.log('this.formData', this.formData);
      this.$refs.page.setData(1);
    },
    getTableData() {
      this.loadTableData = true;
      console.log('getTableData : this.formData', this.formData);
      this.loadTableData = false;
      // this.$api.qrCode_selectQrCodes(this.formData, true)
      //   .then((data) => {
      //     this.loadTableData = false;
      //     this.tableData = data.data || [];
      //     this.total = data.total;
      //   })
      //   .catch(() => {
      //     this.tableData = [];
      //     this.loadTableData = false;
      //   });
    },
    handleFn(obj) {
      Object.assign(this.formData, obj);
      this.getTableData();
    },
    add() {
      this.openDialog = true;
    },
    preview({ qr_code_url }) {
      console.log('qr_code_url', qr_code_url);
      // this.qr_code_url = qr_code_url;
      this.qr_code_url = '1235';
      this.openPreviewDialog = true;
    },
    manyDownload() {
      if (this.formData.qr_status === '1') {
        this.$message.error(this.$t('未登记不能下载'));
        return;
      }
      this.download({ qr_code: this.qrArr.map((item) => item.qr_code).join() });
    },
    download({ qr_code }) {
      if (qr_code === '') {
        this.$message.error(this.$t('请选择要下载的二维码'));
        return;
      }
      console.log('qr_code', qr_code);
      // this.$api.qrCode_download({
      //   data: {
      //     qr_code,
      //   },
      //   opts: {
      //     responseType: 'blob',
      //   },
      // }, true)
      //   .then((content) => {
      //     const timeStamp = new Date().getTime();
      //     downloadFile(`${timeStamp}.zip`, content);
      //   })
      //   .catch((err) => {
      //     console.log('err: ', err);
      //     this.$message.error(this.$t('下载失败'));
      //   });
    },
    manyRegistration() {
      this.registration({ qr_uid: this.qrArr.map((item) => item.qr_uid).join() });
    },
    registration({ qr_uid }) {
      if (qr_uid === '') {
        this.$message.error(this.$t('请选择要登记的二维码'));
        return;
      }
      const h = this.$createElement;
      this.$msgbox({
        title: '登记',
        message: h('p', null, [
          h('span', null, '确定要登记？'),
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = '执行中...';
            // let params = {
            //   qr_uid,
            //   account_uid: this.$store.getters.userInfo.account_uid,
            // };
            // this.$api.qrCode_register(params).then(() => {
            //   this.getTableData();
            //   this.$message.success('登记成功');
            //   instance.confirmButtonLoading = false;
            //   done();
            // }).catch(() => {
            //   instance.confirmButtonLoading = false;
            //   done();
            // });
          } else {
            done();
          }
        },
      }).catch(() => {});
    },
    cancelRegistration({ qr_uid }) {
      if (qr_uid === '') {
        this.$message.error(this.$t('请选择要取消登记的二维码'));
        return;
      }
      const h = this.$createElement;
      this.$msgbox({
        title: '取消登记',
        message: h('p', null, [
          h('span', null, '确定要取消登记？'),
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = '执行中...';
            // let params = {
            //   qr_uid,
            // };
            // this.$api.qrCode_cancel(params).then(() => {
            //   this.getTableData();
            //   this.$message.success('取消登记成功');
            //   instance.confirmButtonLoading = false;
            //   done();
            // }).catch(() => {
            //   instance.confirmButtonLoading = false;
            //   done();
            // });
          } else {
            done();
          }
        },
      }).catch(() => {});
    },
    del({ qr_uid }) {
      if (qr_uid === '') {
        this.$message.error(this.$t('请选择要删除的二维码'));
        return;
      }
      const h = this.$createElement;
      this.$msgbox({
        title: '删除',
        message: h('p', null, [
          h('span', null, '确定要删除？'),
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = '执行中...';
            // let params = {
            //   qr_uid,
            // };
            // this.$api.qrCode_delQrCode(params).then(() => {
            //   this.getTableData();
            //   this.$message.success('删除成功');
            //   instance.confirmButtonLoading = false;
            //   done();
            // }).catch(() => {
            //   instance.confirmButtonLoading = false;
            //   done();
            // });
          } else {
            done();
          }
        },
      }).catch(() => {});
    },
    manyDel() {
      this.del({ qr_uid: this.qrArr.map((item) => item.qr_uid).join() });
    },
    handleSelectionChange(val) {
      this.qrArr = val;
    },
    formatter(row, column, cellValue) { // eslint-disable-line
      return parseTime(cellValue);
    },
  },
  components: {
    add,
    preview,
  },
};
</script>

<style lang="scss" scoped>
</style>
