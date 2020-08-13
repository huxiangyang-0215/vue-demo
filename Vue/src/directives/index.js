import Vue from 'vue';

// 表单提交
import vSubmit from './v-submit'; Vue.directive('submit', vSubmit);


// 表单校验
// 必输
import vValidRequired from './v-valid-required';
Vue.directive('ValidRequired', vValidRequired);