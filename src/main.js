import Vue from 'vue';
import { Layout, Menu, Icon } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App';
import router from './router'

Vue.component(Icon.name, Icon);
Vue.component(Layout.name, Layout);
Vue.component(Layout.Header.name, Layout.Header);
Vue.component(Layout.Content.name, Layout.Content);
Vue.component(Layout.Sider.name, Layout.Sider);
Vue.component(Menu.name, Menu);
Vue.component(Menu.Item.name, Menu.Item);

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App)
}).$mount('#app');
