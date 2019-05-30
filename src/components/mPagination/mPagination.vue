<template>
  <el-row class="pagination">
    <el-pagination
      @size-change="handleSizeChange"
      :page-sizes="$store.getters.pagination.page_sizes"
      @current-change="toPage"
      :current-page.sync="mPage"
      :page-size="mPageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </el-row>
</template>

<script>
export default {
  name: 'mPagination',
  props: {
    total: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      // 默认页码是1，每页数量是10
      mPage: 1,
      mPageSize: this.$store.getters.pagination.page_size,
    };
  },
  watch: {
    total(val) {
      if (this.mPage > 1) {
        let maxPage = Math.ceil(val / this.mPageSize);
        if (maxPage < this.mPage) {
          this.$emit('handleFn', {
            page_size: this.mPageSize,
            page: maxPage,
          });
        }
      }
    },
  },
  methods: {
    handleSizeChange(page_size) {
      this.mPage = 1; // 改变每页的数据条数，就重置到第一页
      this.$emit('handleFn', {
        page_size,
        page: 1,
      });
    },
    toPage(page) {
      this.$emit('handleFn', { page });
    },
    setData(page) {
      this.mPage = page;
      this.toPage(page);
    },
  },
};
</script>
