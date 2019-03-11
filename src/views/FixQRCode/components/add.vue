<template>
  <el-dialog :title="$t('新建二维码')" :visible.sync="isOpen" custom-class="small">
    <el-form ref="form" :rules="formRules" :model="formData" label-width="100px">
      <el-form-item :label="$t('数量')" prop="count">
        <el-input size="small" v-model.trim="formData.count"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="level-center">
      <el-button :loading="loading" size="small" type="primary" @click="submit">{{$t('提交')}}</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { validateNormalInteger } from '@js/check';

export default {
  name: 'add',
  props: {
    openDialog: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
      formData: {
        count: '1',
      },
      loading: false,
    };
  },
  watch: {
    isOpen(val) {
      this.$emit('update:openDialog', val);
    },
    openDialog(val) {
      this.isOpen = val;
      if (!val) {
        this.formData.count = '1';
      }
    },
  },
  computed: {
    formRules() {
      return {
        count: [
          {
            validator: validateNormalInteger,
            trigger: 'blur',
          },
        ],
      };
    },
  },
  methods: {
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          if (this.loading) {
            return;
          }
          this.loading = true;
          console.log('this.formData', this.formData);
          this.loading = false;
          // this.$api.qrCode_create(this.formData)
          //   .then(() => {
          //     this.loading = false;
          //     this.isOpen = false;
          //     this.$emit('search');
          //   })
          //   .catch((err) => {
          //     this.$message.error(this.$t(err.msg));
          //     this.loading = false;
          //   });
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
