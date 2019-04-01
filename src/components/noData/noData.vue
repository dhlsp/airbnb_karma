<template>
  <p class="no-data">
    {{$t(text)}}
  </p>
</template>

<script>
export default {
  name: 'noData',
  props: {
    text: {
      type: String,
      default: '暂无数据',
    },
  },
};
</script>

<style lang="scss" scoped>
.no-data {
  height: 100px;
  font-size: 14px;
  line-height: 100px;
  text-align: center;
}
</style>

