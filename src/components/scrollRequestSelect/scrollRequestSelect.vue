<template>
  <el-select
    ref="select"
    v-model="val"
    :loading="loading"
    size="small"
    filterable
    remote
    reserve-keyword
    :clearable="!noClearable"
    :placeholder="$t(tip)"
    :remote-method="searchData"
    :multiple="multiple"
    :disabled="disabled"
    @change="change"
    class="scroll-request-select">
    <el-option
      v-for="item in options"
      :key="item[idKey]"
      :label="item[nameKey]"
      :value="item[idKey]">
      <slot :item="item"></slot>
    </el-option>
  </el-select>
</template>

<script>
import initData from './initData';

export default {
  name: 'scrollRequestSelect',
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    apiMethod: {
      type: String,
      request: true,
    },
    searchKey: {
      type: String,
      default: 'search',
    },
    accountUid: Boolean,
    merchantUid: Boolean,
    otherParams: {
      type: Object,
      default: function () {
        return {};
      },
    },
    autoClearVal: Boolean, // 当otherParams改变的时候是否清空val的值, 省市区组件一般要用
    tip: {
      type: String,
      default: '请选择',
    },
    idKey: {
      type: String,
      default: 'id',
    },
    nameKey: {
      type: String,
      default: 'name',
    },
    dataFormat: Function, // 自定义格式化数据
    initDataKey: {
      type: String,
      default: '',
    },
    createdNoRequest: Boolean, // search为空，是否可以请求，没有emptyNoRequest，search为空字符串就可以请求
    noSearch: Boolean, // 没有searchKey
    noCancalRequest: Boolean, // 不能取消请求
    multiple: Boolean,
    disabled: Boolean,
    handRequest: Boolean, // 手动请求，true的话，就是只能ref调用请求
    noClearable: Boolean,
  },
  data() {
    return {
      val: this.multiple ? [] : '',
      options: [],
      loading: false,
      scrollTimer: null,
      page: 1,
      page_size: 20,
      isRequest: true,
      loadingOption: {
        isSrollLoad: true,
        [this.idKey]: '加载中...',
        [this.nameKey]: '加载中...',
      },
      search: '',
      customData: [], // 用于外部form的修改
    };
  },
  watch: {
    value(val) {
      if (this.options.length) {
        if (this.multiple && this.val.join() !== val) {
          this.val = val === '' ? [] : val.split(',');
        }
        if (!this.multiple) {
          this.val = val;
        }
      }
    },
    val(val) {
      this.$emit('input', this.multiple ? val.join() : val);
    },
    otherParams: {
      handler(val, oldVal) {
        if (this.handRequest) {
          return;
        }
        let keys = Object.keys(val);
        let len = keys.length;
        let oldLen = Object.keys(oldVal).length;
        if (len !== oldLen) {
          console.log('scrollRequestSelect len request');
          this.getFirstOptions();
          return;
        }
        for (let i = 0; i < len; i++) {
          let key = keys[i];
          if (!oldVal.hasOwnProperty(key) || val[key] !== oldVal[key]) {
            console.log('scrollRequestSelect value request');
            this.getFirstOptions();
            return;
          }
        }
      },
      deep: true,
    },
  },
  created() {
    if (!this.createdNoRequest && !this.handRequest) {
      this.getFirstOptions();
    }
  },
  mounted() {
    let comSelf = this;
    const scrollFn = function (event) {
      event = event || window.event;
      if (event.preventDefault) {
        event.preventDefault();
      } else {
        event.returnValue = false;
      }
      let scrollElem = this;
      if (comSelf.scrollTimer !== null) {
        clearTimeout(comSelf.scrollTimer);
      }
      comSelf.scrollTimer = setTimeout(function () {
        if (Math.ceil(scrollElem.scrollHeight - scrollElem.scrollTop) - scrollElem.clientHeight < 20) {
          console.log('scroll getOptions');
          comSelf.getOptions();
        }
      }, 200);
    };
    this.$refs.select.$refs.popper.$el.querySelector('.el-select-dropdown__wrap').addEventListener('scroll', scrollFn, false);
    this.$on('hook:beforeDestroy', () => {
      console.log('hook:beforeDestroy');
      if (this.scrollTimer) {
        clearTimeout(this.scrollTimer);
        this.scrollTimer = null;
      }
      this.$refs.select.$refs.popper.$el.querySelector('.el-select-dropdown__wrap').removeEventListener('scroll', scrollFn, false);
    });
  },
  methods: {
    searchData(search = '') {
      if (!this.noSearch) {
        this.search = search;
        this.getFirstOptions();
      }
    },
    getFirstOptions() {
      if (this.autoClearVal) {
        this.val = this.multiple ? [] : '';
      }
      this.page = 1;
      this.isRequest = true;
      while (this.options.length) {
        this.options.pop();
      }
      this.getOptions();
    },
    getOptions() {
      console.log('getOptions');
      if (!this.isRequest) {
        return false;
      }
      if (this.page === 1) {
        this.loading = true;
      }
      let params = {
        page: this.page,
        page_size: this.page_size,
      };
      if (!this.noSearch) {
        params[this.searchKey] = this.search;
      }
      if (this.accountUid) {
        params.account_uid = this.$store.getters.userInfo.account_uid;
      }
      if (this.merchantUid) {
        params.merchant_uid = this.$store.getters.userInfo.merchant_uid;
      }
      Object.assign(params, this.otherParams);
      this.$api[this.apiMethod](params, !this.noCancalRequest)
        .then((data) => {
          data = data.data || [];
          if (this.dataFormat) {
            data.forEach((item) => {
              this.dataFormat(item); // dataFormat返回的是item
            });
          }
          // console.log('options: ', this.options);
          if (this.page === 1) {
            if (this.initDataKey && initData.hasOwnProperty(this.initDataKey)) {
              let searchInitData = initData[this.initDataKey].filter((item) => item[this.nameKey].indexOf(this.search) !== -1);
              if (searchInitData.length) {
                this.options.push(...searchInitData);
              }
            }
            if (this.customData.length) {
              let searchCustomData = this.customData.filter((item) => item[this.nameKey].indexOf(this.search) !== -1);
              if (searchCustomData.length) {
                this.options.push(...searchCustomData);
              }
            }
            this.loading = false;
            window.setTimeout(() => {
              if (this.multiple) {
                this.val = this.value === '' ? [] : this.value.split(',');
              } else {
                this.val = this.value;
              }
            }, 100);
          }
          // 检查自定义数据有没有和获取到的请求数据有重合
          if (data.length && this.customData.length) {
            for (let item of this.customData) {
              for (let [index, dataItem] of data.entries()) {
                if (dataItem[this.idKey] === item[this.idKey]) {
                  data.splice(index, 1);
                }
              }
            }
          }
          if (data.length < this.page_size) {
            if (this.options.length && this.options[this.options.length - 1].isSrollLoad) {
              this.options.pop();
            }
            this.options.push(...data);
            this.isRequest = false;
          } else {
            if (this.options.length === 0 || !this.options[this.options.length - 1].isSrollLoad) {
              this.options.push(...data, this.loadingOption);
            } else {
              this.options.splice(this.options.length - 1, 0, ...data);
            }
            this.page++;
          }
        })
        .catch((err) => {
          console.log('scrollRequestSelect error: ', err);
          if (this.page === 1) {
            this.loading = false;
          }
          if (this.options.length && this.options[this.options.length - 1].isSrollLoad) {
            this.options.pop();
          }
        });
    },
    change(val) {
      if (!this.$listeners.change) {
        return;
      }
      let item = this.options.find((item) => item[this.idKey] === val);
      this.$emit('change', item);
    },
  },
};
</script>

<style lang="scss" scoped>
  .scroll-request-select {
    width: 100%;
  }
</style>
