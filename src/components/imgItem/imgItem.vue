<template>
  <div class="img-item">
    <a href="javascript:;" class="img-main">
      <img ref="img" :src="imgSrc" class="img-responsive" width="130" height="100" :alt="alt">
      <div class="img-mask" @click="emitImgClick">
        <span class="img-animate img-from-top">
          <!-- <img class="img-responsive" :src="zoomImg" alt="放大图片"> -->
          <i class="img-responsive el-icon-zoom-in"></i>
        </span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'imgItem',
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      imgSrc: '',
    };
  },
  created() {
    this.getImgUrl();
  },
  methods: {
    getImgUrl() {
      let imgBaseUrl = this.$store.getters.imgBaseUrl;
      let error = imgBaseUrl + 'undefined';
      this.imgSrc = require('../../assets/imgs/imgitemload.gif');
      if (
        this.src === ''
        || this.src === imgBaseUrl
        || this.src === 'undefined'
        || this.src === undefined
        || this.src === error
      ) {
        this.imgSrc = require('../../assets/imgs/defaultImg.svg');
      } else if (this.src.indexOf('http') !== -1) {
        this.imgLoad(this.src);
      } else {
        this.imgLoad(imgBaseUrl + this.src);
      }
    },
    emitImgClick() {
      // v-view 写在组件外
      this.$refs.img.click();
    },
    imgLoad(src) {
      let img = new Image();
      let clearImg = () => {
        img = null;
      };
      img.onload = () => {
        this.imgSrc = src;
        clearImg();
      };
      img.onerror = () => {
        this.imgSrc = require('../../assets/imgs/defaultImg.svg');
        clearImg();
      };
      img.src = src;
    },
  },
};
</script>

<style lang="scss" scoped>
.img-item {
  display: inline-block;
  width: 130px;
  height: 100px;
}

.img-item a {
  text-decoration: none;
  position: relative;
  display: inline-block;
  vertical-align: top;
  font-weight: 300;
  overflow: hidden;
  transition: 0.5s all ease;
  color: #337ab7;
  background-color: transparent;
}

.img-item .img-responsive {
  display: block;
  // max-width: 100%;
  // height: auto;
  vertical-align: middle;
  border: 0;
  font-size: 30px;
  color: #ffffff;
}

.img-item div {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  text-align: center;
  overflow: hidden;
}

.img-item span {
  position: absolute;
  top: -100%;
  left: 40%;
  transition: all 0.5s;
  visibility: hidden;
  text-align: center;
  // position: absolute;
  // top: -100%;
  // left: 41%;
}

.img-mask:hover {
  background: rgba(95, 158, 160, 0.68);
  transition: 0.5s all;
}

.img-main:hover .img-from-top {
  top: 38%;
}

.img-main:hover .img-animate {
  visibility: visible;
}
</style>
