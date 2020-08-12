<template>
    <div>
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