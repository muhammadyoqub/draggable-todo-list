import Vue from 'vue'
import App from './App.vue'
// import draggable from "vuedraggable";
import ElementUI from "element-ui";

Vue.config.productionTip = false;
new Vue({

    render: h => h(App),
}).$mount('#app');
// Vue.use(draggable);
Vue.use(ElementUI);