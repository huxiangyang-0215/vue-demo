<template>
    <div class="input-root-view">
        <input ref="myValue" type="text" :value="value" @input="doit()">
    </div>
</template>
<script>
export default {
    props:["value"],
    methods:{
        doit(){
            this.$emit("input",this.$refs.myValue.value);
        }
    }
}
</script>
<style lang="scss">
.input-root-view {
  display: inline-block;
  &.ep-invalid > input {
    border: 1px solid red;
    outline: none;
  }
}
</style>