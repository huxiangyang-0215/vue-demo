import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import inputPage from './pages/inputPage.vue';
import outputPage from './pages/outputPage.vue';

var router=new VueRouter({
    routes:[{
        // 录入页
        name:"input",
        path:"/input",
        component:inputPage
    },{
        // 结果页
        name:"output",
        path:"/output",
        component:outputPage
    },{
        path:"/*",
        redirect:"/input"
    }]
});
export default router;