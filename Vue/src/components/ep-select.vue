<template>
  <div class="select-root-view">
    <input readonly  ref="myinput" type="text" @click="isOpen=!isOpen" />
      <ul v-show="isOpen">
        <li
          @click="isOpen=false; doSelect(key)"
          v-for="(value,key) in list"
          :key="key"
        >{{key}} - {{value}}</li>
      </ul>
  </div>
</template>
<script>
export default {
  props: ["value", "list"],
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    doSelect(key) {
      this.$emit("input", key);
      this.$refs.myinput.value = key + " - " + this.list[key];
    },
  },
  mounted() {
    this.$refs.myinput.value = this.value + " - " + this.list[this.value];
  },
};
</script>
<style lang="scss" scoped>
.select-root-view {
  display: inline-block;
  position: relative;
  & > input {
    cursor: pointer;
  }
  & > ul {
    position: absolute;
    width: 100%;
    background: #e9eff1;
    z-index: 1;
    & > li {
      padding: 10px;
      cursor: pointer;
      &:hover {
        background-color:rgb(153, 153, 248);
      }
    }
  }
}
</style>