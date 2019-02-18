<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px" class="form-main">
      <el-form-item label="参数" v-for="(item, index) of form.settle_keys" :key="index" :prop="'settle_keys.' + index" :rules="{required: true, message: '参数不能为空', trigger: 'blur'}">
        <el-row>
          <el-col :span="19">
            <el-input size="small" v-model.trim="form.settle_keys[index]"></el-input>
          </el-col>
          <el-col :span="4" :offset="1">
            <el-button type="danger" size="small" @click="del(form.settle_keys, index)">删除</el-button>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="medium" @click="submit">提交</el-button>
        <el-button type="primary" size="medium" @click="add(form.settle_keys)">新增</el-button>
        <!-- <el-button size="medium" @click="reset('form.settle_keys')">重置</el-button> -->
      </el-form-item>
    </el-form>
    <!-- <el-form :model="form" ref="form" label-width="100px" class="form-main">
      <el-form-item v-for="(domain, index) in form.domains" :label="'域名' + index" :key="domain.key" :prop="'domains.' + index + '.value'" :rules="{
          required: true, message: '域名不能为空', trigger: 'blur'
        }">
        <el-input v-model="domain.value"></el-input><el-button @click.prevent="removeDomain(domain)">删除</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="addDomain">新增域名</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form> -->
  </div>
</template>

<script>
export default {
  name: 'FormValidation',
  data() {
    return {
      form: {
        settle_keys: [''],
        domains: [{
          value: '',
        }],
      },
    };
  },
  methods: {
    // submitForm() {
    //   this.$refs.form.validate((valid) => {
    //     if (valid) {
    //       // alert('submit!');
    //     } else {
    //       console.log('error submit!!');
    //       return false;
    //     }
    //   });
    // },
    // resetForm() {
    //   this.$refs.form.resetFields();
    // },
    // removeDomain(item) {
    //   console.log(item);
    //   let index = this.form.domains.indexOf(item);
    //   if (index !== -1) {
    //     this.form.domains.splice(index, 1);
    //   }
    // },
    // addDomain() {
    //   this.form.domains.push({
    //     value: '',
    //     key: Date.now(),
    //   });
    // },

    add(arr) {
      arr.push('');
    },
    del(arr, i) {
      if (arr.length > 1) {
        arr.splice(i, 1);
      }
    },
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          console.log('this.form.settle_keys', this.form.settle_keys);
          // alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    reset() {
      console.log('1', this.form.settle_keys);
      // this.$refs.form.resetFields();
      this.$refs.form.resetFields();
      console.log('2', this.form.settle_keys);
    },
  },
};
</script>

<style lang="scss">
.form-main {
  display: inline-block;
  width: 500px;
  position: relative;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
