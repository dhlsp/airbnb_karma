<template>
  <el-select
    v-model="val"
    size="small"
    class="no-request-select"
    :placeholder="tip"
    :disabled="disabled"
    clearable>
    <el-option
      v-for="item in options"
      :key="item.id"
      :label="item.name"
      :value="item.id">
      <slot :item="item"></slot>
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: 'noRequestSelect',
  inject: ['noRequestSelectData'],
  props: {
    name: {
      type: String,
      request: true,
    },
    value: {
      type: [String, Number],
      required: true,
    },
    tip: {
      type: String,
      default: '请选择',
    },
    disabled: Boolean,
  },
  data() {
    let options = this.noRequestSelectData ? this.noRequestSelectData[this.name] : [];
    return {
      val: '',
      options,
    };
  },
  watch: {
    value(val) {
      this.val = val;
    },
    val(val) {
      this.$emit('input', val);
    },
  },
  created() {
    this.val = this.value;
  },
};
</script>

<style lang="scss" scoped>
.no-request-select {
  width: 100%;
}
</style>
