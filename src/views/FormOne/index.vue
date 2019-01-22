<template>
  <div>
    <el-form label-width="150px" class="form-main">
      <!-- <blue-loading v-show="form" w="50px" h="50px"></blue-loading> -->
      <el-form-item label="活动名称">
        <el-input size="small" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动经费">
        <el-input size="small" v-model="form.money">
          <template slot="append">元</template>
        </el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <!-- 下拉宽的默认选择 -->
        <no-request-select name="citySelect" v-model="form.regions" tip="区域"></no-request-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="活动开启">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源">
        <el-radio-group v-model="form.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="level-center">
      <el-button size="small" type="primary" @click="onSubmit">提交</el-button>
    </div>
  </div>
</template>

<script>
import data from './components/data';

export default {
  name: 'FormOne',
  provide() {
    return {
      noRequestSelectData: data,
    };
  },
  data() {
    return {
      form: {
        name: '',
        money: '',
        regions: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
    };
  },
  methods: {
    onSubmit() {
      console.log('this.form', this.form);
    },
  },
};
</script>

<style lang="scss">
.form-main {
  display: inline-block;
  width: 700px;
  position: relative;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.line {
  text-align: center;
}
</style>
