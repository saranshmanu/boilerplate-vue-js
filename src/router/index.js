/* eslint-disable no-unused-vars */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Default from '../layouts/Default.vue';
import Dashboard from '../layouts/Dashboard.vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			component: Dashboard,
			children: [
				{
					path: '',
          /** The views are declared in the children property */
					component: Home
				}
			]
		},
    {
			path: '/about',
			component: Dashboard,
			children: [
				{
					path: '',
          /** A way to use lazy loading */
					component: () => import('../views/About.vue')
				}
			]
		}
	]
});

export default router;
