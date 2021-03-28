import Vue from 'vue';
import { Layout, Menu, Icon, List, Row, Col, Button, Card } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App';
import store from './store';
import router from './router';

Vue.component(Icon.name, Icon);
Vue.component(Layout.name, Layout);
Vue.component(Layout.Header.name, Layout.Header);
Vue.component(Layout.Content.name, Layout.Content);
Vue.component(Layout.Footer.name, Layout.Footer);
Vue.component(Layout.Sider.name, Layout.Sider);
Vue.component(List.name, List);
Vue.component(List.Item.name, List.Item);
Vue.component(Menu.name, Menu);
Vue.component(Menu.Item.name, Menu.Item);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Button.name, Button);
Vue.component(Card.name, Card);


Vue.config.productionTip = false;

new Vue({
	store,
	router,
	render: (h) => h(App)
}).$mount('#app');
