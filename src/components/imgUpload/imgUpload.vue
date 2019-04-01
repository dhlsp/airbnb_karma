<template>
  <el-row>
    <el-upload
      :action="$store.getters.imgUploadUrl"
      :on-success="imgUploadSuccess"
      :on-error="imgUploadError"
      :before-upload="beforeImgUpload"
      :show-file-list="false"
      :limit="$store.getters.imgMaxUploadNum"
      :multiple="!isUploadVideo">
      <el-button size="small" type="primary"><i class="el-icon-upload upload"></i>{{$t('点击上传')}}</el-button>
    </el-upload>
    <el-row v-if="!isUploadVideo" v-view>
      <div class="remove-img" v-for="(item, index) in imgArr" :key="index">
        <i class="el-icon-circle-close" @click="removeImg(index)"></i>
        <img-item :src="item" :alt="imgAlt+'('+index+')'"></img-item>
      </div>
    </el-row>
    <el-row v-if="isUploadVideo && imgArr.length !== 0">
      <el-row class="video">
        <m-video :src="imgArr"></m-video>
      </el-row>
    </el-row>
  </el-row>
</template>

<script>
import mVideo from '@components/mVideo';

export default {
  name: 'imgUpload',
  props: {
    value: {
      type: String,
      default: '',
    },
    imgAlt: {
      type: String,
      default: '图片',
    },
  },
  data() {
    return {
      imgArr: [],
      isUploadVideo: false,
    };
  },
  // computed: {
  //   getVideos() {
  //     return this.imgArr.map((item) => this.$store.getters.imgBaseUrl + item);
  //   },
  // },
  watch: {
    value(val) {
      this.amendImgArr(val);
    },
    imgArr(val) {
      let valStr = val.join();
      if (valStr !== this.value) {
        this.$emit('input', valStr);
      }
    },
    imgAlt: {
      handler() {
        this.isVideoWhiteNames();
      },
      immediate: true,
    },
  },
  created() {
    this.amendImgArr(this.value);
  },
  methods: {
    amendImgArr(val) {
      if (this.imgArr.join() === val) {
        return;
      }
      if (val === '') {
        this.imgArr = [];
        return;
      }
      this.imgArr = val.split(',').filter((item) => item !== '/');
    },
    imgUploadSuccess(res) {
      let path = res.data.path;
      if (this.isUploadVideo) {
        this.imgArr = [path];
      } else {
        this.imgArr.push(path);
      }
    },
    imgUploadError() {
      if (this.isUploadVideo) {
        this.$message.error('上传视频失败！');
      } else {
        this.$message.error('上传图片失败！');
      }
    },
    beforeImgUpload(file) {
      if (this.isUploadVideo) {
        if (this.isVideo(file)) {
          return true;
        }
        this.$message.error('请上传视频');
        return false;
      }
      let type = ['image/png', 'image/jpeg', 'image/jpg'];
      let isImg = type.indexOf(file.type) !== -1;
      if (!isImg) {
        this.$message.error('上传图片只能是jpeg或png或jpg格式!');
      }
      return isImg;
    },
    isVideo(file) {
      let is = /(\.|\/)(3gp|flv|rmvb|mp4|wmv|avi|mkv|mp3|wav)$/i.exec(file.type);
      return is !== null;
    },
    isVideoWhiteNames() {
      // const videoWhiteNames = [ // video名字白名单
      //   '视频认证',
      //   '验证视频',
      // ];
      // this.isUploadVideo = videoWhiteNames.indexOf(this.imgAlt) !== -1;
      this.isUploadVideo = /视频/.test(this.imgAlt);
    },
    removeImg(index) {
      this.imgArr.splice(index, 1);
    },
  },
  components: {
    mVideo,
  },
};
</script>

<style lang="scss" scoped>
.upload {
  margin-right: 5px;
}
.remove-img {
  position: relative;
  display: inline-block;
  margin: 5px 15px 0 0;

  i {
    position: absolute;
    top: -10px;
    right: -10px;
    font-size: 20px;
    color: #409EFF;
    z-index: 1;
    background-color: #ffffff;
    border-radius: 50%;
    cursor: pointer;
  }

  i:hover {
    color: #94c4f1;
  }
}
.video {
  display: inline-block;
  margin-top: 10px;
}
</style>
