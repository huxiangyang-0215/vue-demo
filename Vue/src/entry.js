import Vue from 'vue';
// 引入主页面
import App from './App.vue';
// 引入路由配置文件
import router from './router';

// 引入公共指令
import './directives/index.js'

// 引入公共组件
import './components/index.js'

// 引入公共样式
import '@yelloxing/normalize.css'

// 创建根vue实例对象
new Vue({
    // 挂载点
    el:document.getElementById('root'),
    // router:router,
    // 路由
    router,
    // render:function(createElement){
    //     return createElement(App);
    // }
    // 主页面
    render:createElement=>createElement(App)
})