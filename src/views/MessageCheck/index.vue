<template>
  <el-row>
    <div class="marquee">
      <div class="marquee_title">
        <span>最新消息</span>
      </div>
      <div class="marquee_box">
        <ul class="marquee_list" :class="{marquee_top:animate}">
          <li v-for="(item, index) in marqueeList" :key="index">
            <span>{{item.name}}</span>
            <span>在</span>
            <span class="red"> {{item.city}}</span>
            <span>杀敌</span>
            <span class="red"> {{item.amount}}</span>
            <span>万</span>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <el-form label-width="150px" class="form-main">
        <el-form-item label="Slider滑块">
          <el-slider v-model="formData.num" show-input></el-slider>
        </el-form-item>
        <el-form-item label="Rate评分">
          <el-rate v-model="formData.rate" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" show-text></el-rate>
        </el-form-item>
      </el-form>
    </div>
    <note>
      <el-row style="text-align: left;font-size: 18px;">
        <el-col>操作说明</el-col>
        <el-col>1、申请商户号</el-col>
        <el-col>2、查询状态</el-col>
        <el-col>3、修改外部商户号</el-col>
      </el-row>
    </note>
  </el-row>
</template>

<script>
export default {
  name: 'MessageCheck',
  data() {
    return {
      animate: false,
      marqueeList: [
        {
          name: '1军',
          city: '北京',
          amount: '10',
        },
        {
          name: '2军',
          city: '上海',
          amount: '20',
        },
        {
          name: '3军',
          city: '广州',
          amount: '30',
        },
        {
          name: '4军',
          city: '重庆',
          amount: '40',
        },
      ],
      formData: {
        num: 20,
        rate: null,
      },
    };
  },
  created() {
    setInterval(this.showMarquee, 2000);
  },
  methods: {
    showMarquee() {
      this.animate = true;
      setTimeout(() => {
        this.marqueeList.push(this.marqueeList[0]);
        this.marqueeList.shift();
        this.animate = false;
      }, 500);
    },
  },
};
</script>

<style scoped>
ul, li, span {
  margin: 0;
  padding: 0;
  display: flex;
  box-sizing: border-box;
}
.marquee {
  width: 100%;
  height: 50px;
  align-items: center;
  color: #3A3A3A;
  background-color: #b3effe;
  display: flex;
  box-sizing: border-box;
}

.marquee_title {
  padding: 10px 20px 0px;
  height: 30px;
  font-size: 14px;
  border-right: 1px solid #d8d8d8;
  align-items: center;
}

.marquee_box {
  display: block;
  position: relative;
  width: 60%;
  height: 30px;
  overflow: hidden;
}

.marquee_list {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}
.marquee_top {
  transition: all 0.5s;
  margin-top: -30px
}

.marquee_list li {
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  padding-left: 20px;
}

.marquee_list li span {
  padding: 0 2px;
}

.red {
  color: #FF0101;
}

.form-main {
  display: inline-block;
  width: 700px;
  position: relative;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
