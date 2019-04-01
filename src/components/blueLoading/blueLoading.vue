<template>
  <div class="mask">
    <div class="loader" :style="{width: w, height: h}">
      <svg class="circular" viewBox="25 25 50 50">
        <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
      </svg>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// 必须设置父元素的position: relative;和min-height: 300px;
export default {
  name: 'blueLoading',
  props: {
    w: {
      type: String,
      default: '20px',
    },
    h: {
      type: String,
      default: '20px',
    },
  },
};
</script>

<style lang="scss" scoped>
.mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 11;
  background: #eeeeee;
  opacity: 0.8;
}

.loader {
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /*background-color: #219ffd;*/
}
.loader:before {
  content: "";
  display: block;
  padding-top: 100%;
}

.circular {
  -webkit-animation: rotate 2s linear infinite;
  animation: rotate 2s linear infinite;
  height: 100%;
  -webkit-transform-origin: center center;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.path {
  stroke: #409EFF;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  -webkit-animation: dash 1.5s ease-in-out infinite;
    // color 6s ease-in-out infinite;
  animation: dash 1.5s ease-in-out infinite;
  stroke-linecap: round;
}

@-webkit-keyframes rotate {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes rotate {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-webkit-keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}
@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}
// @-webkit-keyframes color {
//   100%,
//   0% {
//     stroke: #409EFF;
//   }
//   40% {
//     stroke: #409EFF;
//   }
//   66% {
//     stroke: #409EFF;
//   }
//   80%,
//   90% {
//     stroke: #409EFF;
//   }
// }
// @keyframes color {
//   100%,
//   0% {
//     stroke: #409EFF;
//   }
//   40% {
//     stroke: #409EFF;
//   }
//   66% {
//     stroke: #409EFF;
//   }
//   80%,
//   90% {
//     stroke: #409EFF;
//   }
// }
</style>
