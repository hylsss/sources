// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from '@/store/index'
import router from '@/router/basic'
import axios from 'axios'
import BasicUtils from '@/api/BasicUtils'
import 'lib-flexible'
import func from '@/func/basic'
Vue.config.productionTip = false
Vue.prototype.func = func
// import 'vue-easytable/libs/themes-base/index.css'
// import {VTable,VPagination} from 'vue-easytable'
// Vue.component(VTable.name,VTable)
// Vue.component(VPagination.name,VPagination)
let basicUserToken = null;
if (process.env.NODE_ENV === 'development') {
    require("!style-loader!css-loader!less-loader!../../assets/css/dev.less");
    // basicUserToken = "notoken";
}

new Vue({
    el: '#page',
    router,
    store,
    data: function() {
        return {

        }
    },
    mounted: function() {
        document.getElementById("loading").style.display = 'none';
        document.getElementById("page").style.display = 'block';
    },
    methods: {
        ctximg(url) {
            return BasicUtils.ctximg(url);
        }
    }
});
