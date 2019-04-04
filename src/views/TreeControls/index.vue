<template>
  <div>
    <el-input v-if="data.length > 0" size="small" :placeholder="$t('输入关键字进行过滤')" v-model.trim="filterText" style="width: 200px;"></el-input>
    <div style="position: relative; min-height: 300px;">
      <blue-loading w="50px" h="50px" v-if="loading"></blue-loading>
      <div class="text-center" v-if="data.length > 0">
        <el-tree
          :data="data"
          show-checkbox
          node-key="id"
          :default-expanded-keys="expandedKeys"
          :default-checked-keys="checkedKeys"
          :props="defaultProps"
          class="tree"
          ref="tree"
          :filter-node-method="filterNode">
        </el-tree>
        <el-button :loading="submitLoad" type="primary" size="small" @click="submit">{{$t('提交')}}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
// import { NOSELECTSIGN } from '@config/base';

export default {
  name: 'TreeControls',
  data() {
    return {
      filterText: '',
      role_no: '',
      loading: false,
      submitLoad: false,
      data: [
        {
          id: 1,
          name: '一级 1',
          children: [{
            id: 4,
            name: '二级 1-1',
            children: [{
              id: 10,
              name: '三级 1-1-1',
            }, {
              id: 11,
              name: '三级 1-1-2',
            }],
          }],
        }, {
          id: 2,
          name: '一级 2',
          children: [{
            id: 5,
            name: '二级 2-1',
          }, {
            id: 6,
            name: '二级 2-2',
          }],
        }, {
          id: 3,
          name: '一级 3',
          children: [
            {
              id: 7,
              name: '二级 3-1',
            }, {
              id: 8,
              name: '二级 3-2',
            }, {
              id: 9,
              name: '二级 3-3',
              children: [{
                id: 12,
                name: '三级 3-3-1',
              }],
            },
          ],
        },
      ],
      checkedKeys: [],
      expandedKeys: [],
      defaultProps: {
        children: 'children',
        label: 'name',
      },
    };
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    },
  },
  created() {
    // let role_no = this.$route.query.role_no;
    // if (role_no) {
    //   this.role_no = role_no;
    //   this.getRoleUrl(this.role_no);
    // }
  },
  methods: {
    filterNode(value, data) {
      if (!value) {
        return true;
      }
      return data.name.indexOf(value) !== -1;
    },
    // getRoleUrl(role_no) {
    //   this.loading = true;
    //   this.$api.role_getRoleAuthTable({
    //     data: {
    //       role_no,
    //     },
    //     opts: {
    //       timeout: 30 * 1000,
    //     },
    //   })
    //     .then((data) => {
    //       data = data.data;
    //       this.data = data;
    //       this.checkedKeys = [];
    //       this.setCheckedKeys();
    //       this.loading = false;
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       this.$message.error(this.$t('获取数据失败'));
    //       this.loading = false;
    //     });
    // },
    // setCheckedKeys() {
    //   for (let oneNav of this.data) { // 遍历一级导航栏
    //     let oneNavId = oneNav.id;
    //     let oneNavChildren = oneNav.children || [];
    //     let twoCheckedKeys = [];

    //     if (oneNavChildren.length === 0 && oneNav.role_no !== NOSELECTSIGN) {
    //       this.checkedKeys.push(oneNavId);
    //       continue;
    //     }

    //     for (let twoNav of oneNavChildren) { // 遍历二级导航栏
    //       let twoNavId = twoNav.id;
    //       let twoNavChildren = twoNav.children || [];
    //       let threeCheckedKeys = [];

    //       if (twoNavChildren.length === 0 && twoNav.role_no !== NOSELECTSIGN) {
    //         this.checkedKeys.push(twoNavId);
    //         continue;
    //       }

    //       for (let threeNav of twoNavChildren) { // 遍历三级导航栏
    //         let threeNavRoleUid = threeNav.role_no;
    //         let threeNavId = threeNav.id;

    //         if (threeNavRoleUid !== NOSELECTSIGN) {
    //           threeCheckedKeys.push(threeNavId);
    //           this.checkedKeys.push(threeNavId);
    //         }
    //       }

    //       if (threeCheckedKeys.length === twoNavChildren.length) {
    //         twoCheckedKeys.push(twoNavId);
    //         this.checkedKeys.push(twoNavId);
    //       }
    //       if (threeCheckedKeys.length > 0) {
    //         this.expandedKeys.push(twoNavId);
    //       }
    //     }

    //     if (twoCheckedKeys.length !== 0 && twoCheckedKeys.length === oneNavChildren.length) {
    //       this.checkedKeys.push(oneNavId);
    //     }
    //     if (twoCheckedKeys.length > 0) {
    //       this.expandedKeys.push(oneNavId);
    //     }
    //   }
    // },
    submit() {
      // if (this.submitLoad || !this.role_no) {
      //   return;
      // }
      let urls = this.$refs.tree.getCheckedKeys();
      console.log('urls', urls);
      // this.submitLoad = true;
      // this.$api.role_updateRoleAuth({
      //   role_no: this.role_no,
      //   urls: this.getUrls(this.$refs.tree.getCheckedKeys()),
      // }).then(() => {
      //   this.submitLoad = false;
      //   this.$message.success(this.$t('授权成功'));
      //   this.getRoleUrl(this.role_no);
      // }).catch(() => {
      //   this.$message.error(this.$t('授权失败'));
      //   this.submitLoad = false;
      // });
    },
    // getUrls(checkedKeys) {
    //   checkedKeys = JSON.parse(JSON.stringify(checkedKeys));
    //   let urls = [];
    //   for (let oneNav of this.data) { // 遍历一级导航栏
    //     let oneNavId = oneNav.id;
    //     let oneNavChildren = oneNav.children || [];
    //     let twoNum = 0;

    //     if (oneNavChildren.length === 0 && checkedKeys.indexOf(oneNavId) !== -1) {
    //       urls.push(oneNavId);
    //       continue;
    //     }

    //     for (let twoNav of oneNavChildren) { // 遍历二级导航栏
    //       let twoNavId = twoNav.id;
    //       let twoNavChildren = twoNav.children || [];
    //       let threeNum = 0;

    //       for (let threeNav of twoNavChildren) { // 遍历三级导航栏
    //         let threeNavId = threeNav.id;
    //         let threeIdx = checkedKeys.indexOf(threeNavId);
    //         if (threeIdx !== -1) {
    //           threeNum += 1;
    //           urls.push(threeNavId);
    //           checkedKeys.splice(threeIdx, 1);
    //         }
    //       }

    //       if (threeNum > 0) {
    //         twoNum += 1;
    //         urls.push(twoNavId);
    //       }
    //     }

    //     if (twoNum > 0) {
    //       urls.push(oneNavId);
    //     }
    //   }
    //   return urls;
    // },
  },
};
</script>

<style lang="scss" scoped>
// .tree {}
</style>
