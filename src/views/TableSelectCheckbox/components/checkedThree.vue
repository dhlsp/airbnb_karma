<template>
  <div class="hello">
    <div>
      <ul v-for="(child,index) in children" :key="index">
        <li style="float:left;list-style:none">{{child.label}}</li>
      </ul>
    </div>
    <br>
    <div style="margin-left:10px">
      <div>
        <el-checkbox v-model="checkall" @change="changeAll">全选</el-checkbox>
      </div>
      <el-checkbox v-model="checkedcitys" v-for="(group,index) in model" :label="group" :key="index" @change="changeSecond(checkedcitys)">
        <div @mouseover="overShow(index)" @mouseout="outHide(index)">
          {{group.label}}
          <div v-if="index===showIndex" style="z-index:222;position:absolute;border:1px solid #8E8E8E;background:#fff;width:50px;height:80px;margin-left:25px;margin-top:-20px">
            <el-checkbox v-model="children" v-for="(child,item) in group.children" :label="child" :key="item" @change="changeThird(child)">
              {{child.label}}
            </el-checkbox>
          </div>
        </div>
      </el-checkbox>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkall: false,
      children: [],
      model: [
        {
          label: 'A组',
          children: [
            {
              father: 'A组',
              label: 'a1',
            }, {
              father: 'A组',
              label: 'a2',
            }, {
              father: 'A组',
              label: 'a3',
            },
          ],
        }, {
          label: 'B组',
          children: [
            {
              father: 'B组',
              label: 'b1',
            }, {
              father: 'B组',
              label: 'b2',
            }, {
              father: 'B组',
              label: 'b3',
            },
          ],
        }, {
          label: 'C组',
          children: [
            {
              father: 'C组',
              label: 'c1',
            }, {
              father: 'C组',
              label: 'c2',
            }, {
              father: 'C组',
              label: 'c3',
            },
          ],
        }, {
          label: 'D组',
          children: [
            {
              father: 'D组',
              label: 'd1',
            }, {
              father: 'D组',
              label: 'd2',
            },
          ],
        },
      ],
      checkedcitys: [],
      checkchild: false,
      showIndex: -1,
    };
  },
  methods: {
    changeAll(val) {
      this.checkedcitys = val ? this.model : [];
      this.changeSecond(this.checkedcitys);
    },
    changeSecond(val) {
      let arr = [];
      let checkedCount = Object.keys(val).length;
      this.children = checkedCount > 0 ? this.children : [];
      for (let i = 0; i < checkedCount; i++) {
        arr = arr.concat(val[i].children);
        this.children = arr;
      }
      // 全选
      this.checkall = checkedCount === this.model.length;
    },
    changeThird(children) {
      let father = '';
      let hehe = [];
      if (children.length > 0) {
        children.forEach(item => {
          father = item.father;
        });
        this.model.forEach(item => {
          if (item.label === father) {
            // debugger
            if (item.children.length === children.length) {
              hehe.push(item);
            }
          }
        });
      } else {
        this.checkedcitys = [];
      }
      // if(this.model[val].children.length===this.children.length){
      //   console.log(this.children,'1')
      //   console.log(this.model[val],'2')
      // }else{

      // }
      // console.log(this.model[val].children.length===this.children.length)
      // let checkedCount = Object.keys(val).length
      // if(checkedCount === this.children.length){
      //   this.checkedcitys = this.model[val];
      // }
      // this.model[val] = 全选;
    },
    overShow(node) {
      this.showIndex = node;
    },
    outHide(node) {
      console.log(node);
      this.showIndex = -1;
    },
  },
};
</script>

<style scoped>
.el-checkbox + .el-checkbox {
  display: block;
  margin: 0;
}
</style>
