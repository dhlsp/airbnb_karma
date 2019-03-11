<template>
  <el-dialog :title="$t('预览')" :visible.sync="isOpen" custom-class="small">
    <el-row class="text-center">
      <img v-show="!showLoad" :src="imgBase64" alt="图片" width="200" height="200" />
    </el-row>
    <!-- <el-row class="loading" v-show="showLoad">
      <blue-loading v-show="showLoad" w="50px" h="50px"></blue-loading>
    </el-row> -->
  </el-dialog>
</template>

<script>
import QRCode from 'qrcode';

export default {
  name: 'preview',
  props: {
    openDialog: {
      type: Boolean,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
      showLoad: true,
      imgBase64: '',
    };
  },
  watch: {
    src(val) {
      if (val) {
        QRCode.toDataURL(val)
          .then((url) => {
            console.log('url', url);
            this.imgBase64 = url;
            this.showLoad = false;
          });
      }
    },
    isOpen(val) {
      this.$emit('update:openDialog', val);
    },
    openDialog(val) {
      this.isOpen = val;
      this.showLoad = val;
    },
  },
};
</script>

<style lang="scss" scoped>
.loading {
  position: relative;
  min-height: 200px;
}
</style>
