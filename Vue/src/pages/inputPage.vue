<template>
  <!-- <div>录入页 -->
  <!-- <input type="button" value="跳转" @click="$router.push({path:'./output'})"> -->
  <!-- <span @click="$router.push({path:'./output'})">跳转结果页</span> -->
  <!-- </div> -->
  <form novalidate v-submit="doSubmit">
    <div class="row">
      <label>姓名</label>
      <ep-input v-model="params.personName" v-valid-required></ep-input>
    </div>
    <div class="row">
      <label>出生年月</label>
      <ep-calendar v-model="params.birthDate"></ep-calendar>
    </div>
    <div class="row">
      <label>国籍</label>
      <ep-select v-model="params.nation" :list="selectList.nations"></ep-select>
    </div>
    <div class="row">
      <label>是否自贸区</label>
      <ep-radio v-model="params.isFTA"></ep-radio>
    </div>
    <div class="btn-list">
      <input type="button" @click="doReset()" value="重置" class="btn btn-reset" />
      <input type="submit" value="提交" class="btn btn-submit" />
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
        params:{
          personName: "疾风剑豪-亚索",
          birthDate: "19980215",
          nation: "A",
          isFTA: false,
        },
        selectList: {
          nations: {
            A: "艾欧尼亚",
            B: "诺克萨斯",
            C: "弗雷尔卓德",
            D: "恕瑞玛",
            E: "德玛西亚",
            F: "暗影岛",
            G: "祖安",
        },
      },
    };
  },
  methods: {
    doSubmit() {
      this.$router.push({
        name:"output",
        params:{
          paramsData: this.params,
        }
      })
    },
    doReset() {
      console.warn("表单重置");
    },
  },
};
</script>
<style lang="scss" scoped>
form {
  width: 295px;
  padding: 10px 0;
  &.ep-invalid div.btn-list > .btn.btn-submit {
    background-color: red;
  }
  div {
    &.row {
      & > label {
        width: 6em;
        display: inline-block;
        text-align: right;
      }
      line-height: 1.6em;
    }
    &.btn-list {
      text-align: center;
      margin-top: 14px;
      & > .btn {
        padding: 3px 10px;
        border-radius: 6px;
        color: white;
        &.btn-submit {
          background-color: rgb(25, 186, 235);
        }
        &.btn-reset {
          background-color: rgb(214, 210, 204);
        }
      }
    }
  }
}
</style>