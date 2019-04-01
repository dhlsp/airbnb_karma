<template>
  <el-row class="img-upload-item">
    <el-upload
      :action="$store.getters.imgUploadUrl"
      :on-success="imgUploadSuccess"
      :on-error="imgUploadError"
      :before-upload="beforeImgUpload"
      :show-file-list="false"
      >
      <img v-if="imageUrl" :src="getImageUrl" ref="img">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <div v-if="imageUrl !== ''" class="img-upload-zoom" @click="showImg">
      <i class="el-icon-zoom-in"></i>
    </div>
    <div class="img-upload-text">{{text}}</div>
  </el-row>
</template>

<script>
import openImg from '@components/viewPhoto';

export default {
  name: 'imgUploadItem',
  props: {
    value: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      imageUrl: '',
    };
  },
  computed: {
    getImageUrl() {
      return this.$store.getters.imgBaseUrl + this.imageUrl;
    },
  },
  watch: {
    value(val) {
      if (val === '') {
        this.imageUrl = '';
      } else if (val !== this.imageUrl) {
        this.imageUrl = val;
      }
    },
  },
  methods: {
    imgUploadSuccess(res) {
      let path = res.data.path;
      this.imageUrl = path;
      this.$emit('input', path);
    },
    imgUploadError() {
      this.$message.error('上传图片失败！');
    },
    beforeImgUpload(file) {
      let type = ['image/png', 'image/jpeg', 'image/jpg'];
      const isImg = type.indexOf(file.type) !== -1;

      if (!isImg) {
        this.$message.error('上传图片只能是jpeg或png或jpg格式!');
      }
      return isImg;
    },
    showImg() {
      // 不用在组件外或组件内写v-view
      let e = {};
      e.currentTarget = this.$vnode.elm.parentNode;
      e.target = this.$refs.img;
      openImg(e); // 手动触发
    },
  },
};
</script>

<style lang="scss" scoped>
.img-upload-item {
  display: inline-block;
  margin: 10px 10px 0 0;
}

img {
  width: 130px;
  height: 130px;
  display: block;
}

.img-upload-text {
  font-size: 12px;
  line-height: 20px;
  text-align: center;
}

.img-upload-zoom {
  display: inline-block;
  position: absolute;
  top: 1px;
  right: 1px;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  width: 25px;
  height: 25px;
  color: #000000;
  background-color: #ffffff;
  cursor: pointer;
  border-radius: 50%;
}
</style>
