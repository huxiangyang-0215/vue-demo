<template>
    <div>
        <!-- <input type="button" value="跳转" @click="$router.push({path:'./input'})"> -->
        <!-- <span @click="$router.push({path:'./input'})">跳转录入页</span> -->
        {{$route.params.paramsData}}
    </div>
</template>