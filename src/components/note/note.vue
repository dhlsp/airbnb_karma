<template>
  <div class="note">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'note',
};
</script>

<style lang="scss" scoped>
.note {
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #eee;
  border-left-width: 4px;
  border-left-color: #f0ad4e;
  border-radius: 4px;
}
</style>
