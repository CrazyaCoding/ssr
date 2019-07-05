import Vue from 'vue';
import Router from 'vue-router';
import Home from './../view/home/index.vue';
import List from './../view/list/index.vue';
import Detail from './../view/detail/index.vue';

Vue.use(Router);

export function createRouter() {
	return new Router({
		mode: 'history',
		routes: [
			{
				path: '/home',
				component: Home
			},
			{
				path: '/list',
				component: List
			},
			{
				path: '/detail',
				component: Detail
			}
		]
	});
}