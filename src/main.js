import Vue from 'vue'
import App from './App.vue'
import {
  Dialog,
  Table,
  TableColumn,
  ColorPicker,
  Message
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.prototype.$message = Message;
Vue.use(Dialog);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(ColorPicker);
new Vue({
  render: h => h(App),
}).$mount('#app')
