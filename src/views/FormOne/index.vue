<template>
  <div>
    <el-form label-width="150px" class="form-main">
      <!-- <blue-loading v-show="form" w="50px" h="50px"></blue-loading> -->
      <el-form-item :label="$t('活动名称')">
        <el-input size="small" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动经费">
        <el-input size="small" v-model="form.money">
          <template slot="append">元</template>
        </el-input>
      </el-form-item>
      <el-form-item :label="$t('活动编号')">
          <el-input v-model.trim="form.org_req_no" size="small" :placeholder="$t('请求单号')">
            <el-button slot="append" @click="createRandomNum">随机生成</el-button>
          </el-input>
        </el-form-item>
      <el-form-item label="活动区域">
        <!-- 下拉宽的默认选择 -->
        <no-request-select name="citySelect" v-model="form.regions" tip="区域"></no-request-select>
      </el-form-item>
      <el-form-item label="活动联级">
        <el-cascader placeholder="输入关键字" :options="options" filterable="" change-on-select class="cascader-select" :show-all-levels="false" clearable></el-cascader>
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
      options: [{
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          children: [{
            value: 'yizhi',
            label: '一致',
          }, {
            value: 'fankui',
            label: '反馈',
          }, {
            value: 'xiaolv',
            label: '效率',
          }, {
            value: 'kekong',
            label: '可控',
          }],
        }, {
          value: 'daohang',
          label: '导航',
          children: [{
            value: 'cexiangdaohang',
            label: '侧向导航',
          }, {
            value: 'dingbudaohang',
            label: '顶部导航',
          }],
        }],
      }, {
        value: 'zujian',
        label: '组件',
        children: [{
          value: 'basic',
          label: 'Basic',
          children: [{
            value: 'layout',
            label: 'Layout 布局',
          }, {
            value: 'color',
            label: 'Color 色彩',
          }, {
            value: 'typography',
            label: 'Typography 字体',
          }, {
            value: 'icon',
            label: 'Icon 图标',
          }, {
            value: 'button',
            label: 'Button 按钮',
          }],
        }, {
          value: 'form',
          label: 'Form',
          children: [{
            value: 'radio',
            label: 'Radio 单选框',
          }, {
            value: 'checkbox',
            label: 'Checkbox 多选框',
          }, {
            value: 'input',
            label: 'Input 输入框',
          }, {
            value: 'input-number',
            label: 'InputNumber 计数器',
          }, {
            value: 'select',
            label: 'Select 选择器',
          }, {
            value: 'cascader',
            label: 'Cascader 级联选择器',
          }, {
            value: 'switch',
            label: 'Switch 开关',
          }, {
            value: 'slider',
            label: 'Slider 滑块',
          }, {
            value: 'time-picker',
            label: 'TimePicker 时间选择器',
          }, {
            value: 'date-picker',
            label: 'DatePicker 日期选择器',
          }, {
            value: 'datetime-picker',
            label: 'DateTimePicker 日期时间选择器',
          }, {
            value: 'upload',
            label: 'Upload 上传',
          }, {
            value: 'rate',
            label: 'Rate 评分',
          }, {
            value: 'form',
            label: 'Form 表单',
          }],
        }, {
          value: 'data',
          label: 'Data',
          children: [{
            value: 'table',
            label: 'Table 表格',
          }, {
            value: 'tag',
            label: 'Tag 标签',
          }, {
            value: 'progress',
            label: 'Progress 进度条',
          }, {
            value: 'tree',
            label: 'Tree 树形控件',
          }, {
            value: 'pagination',
            label: 'Pagination 分页',
          }, {
            value: 'badge',
            label: 'Badge 标记',
          }],
        }, {
          value: 'notice',
          label: 'Notice',
          children: [{
            value: 'alert',
            label: 'Alert 警告',
          }, {
            value: 'loading',
            label: 'Loading 加载',
          }, {
            value: 'message',
            label: 'Message 消息提示',
          }, {
            value: 'message-box',
            label: 'MessageBox 弹框',
          }, {
            value: 'notification',
            label: 'Notification 通知',
          }],
        }, {
          value: 'navigation',
          label: 'Navigation',
          children: [{
            value: 'menu',
            label: 'NavMenu 导航菜单',
          }, {
            value: 'tabs',
            label: 'Tabs 标签页',
          }, {
            value: 'breadcrumb',
            label: 'Breadcrumb 面包屑',
          }, {
            value: 'dropdown',
            label: 'Dropdown 下拉菜单',
          }, {
            value: 'steps',
            label: 'Steps 步骤条',
          }],
        }, {
          value: 'others',
          label: 'Others',
          children: [{
            value: 'dialog',
            label: 'Dialog 对话框',
          }, {
            value: 'tooltip',
            label: 'Tooltip 文字提示',
          }, {
            value: 'popover',
            label: 'Popover 弹出框',
          }, {
            value: 'card',
            label: 'Card 卡片',
          }, {
            value: 'carousel',
            label: 'Carousel 走马灯',
          }, {
            value: 'collapse',
            label: 'Collapse 折叠面板',
          }],
        }],
      }, {
        value: 'ziyuan',
        label: '资源',
        children: [{
          value: 'axure',
          label: 'Axure Components',
        }, {
          value: 'sketch',
          label: 'Sketch Templates',
        }, {
          value: 'jiaohu',
          label: '组件交互文档',
        }],
      }],
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
        org_req_no: '',
      },
    };
  },
  created() {
    this.createRandomNum();
  },
  methods: {
    onSubmit() {
      console.log('this.form', this.form);
    },
    createRandomNum() {
      this.form.org_req_no = '';
      let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      // let possible = '0123456789';
      for (let i = 0; i < 20; i++) {
        this.form.org_req_no += possible.charAt(Math.floor(Math.random() * possible.length));
      }
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
.cascader-select {
  width: 100%;
}
</style>
