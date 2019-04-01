<template>
  <video-player class="video-player-box"
                :options="playerOptions"
                :playsinline="true"
                customEventName="customstatechangedeventname">
  </video-player>
</template>

<script>
import 'video.js/dist/video-js.css';
import { videoPlayer } from 'vue-video-player';

export default {
  name: 'mVideo',
  props: {
    src: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      playerOptions: {
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [],
        poster: '',
      },
    };
  },
  watch: {
    src: {
      handler() {
        this.setSources();
      },
      deep: true,
    },
  },
  created() {
    this.setSources();
  },
  methods: {
    setSources() {
      let baseSrc = '';
      if (process.env.NODE_ENV === 'development') {
        baseSrc = location.origin + '/' + this.$store.getters.imgBaseUrl;
      } else if (process.env.NODE_ENV === 'production') {
        baseSrc = this.$store.getters.imgBaseUrl;
      }
      let sources = this.src.filter((item) => item !== '' && item !== '/').map((item) => {
        let fileSuffix = /\.(\w+)$/.exec(item)[1];
        return {
          type: `video/${fileSuffix}`,
          src: baseSrc + item,
        };
      });
      this.playerOptions.sources = sources;
    },
  },
  components: {
    videoPlayer,
  },
};
</script>

<style lang="scss">
.video-js {
  width: 300px !important;
  height: 150px !important;
}
.video-js .vjs-big-play-button {
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%);
}
</style>
