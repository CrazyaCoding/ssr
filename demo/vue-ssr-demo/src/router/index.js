import Vue from 'vue';
import Router from 'vue-router';
const Index = () => import('./../app.vue');
const Home = () => import('./../view/home/index.vue');
const List = () => import('./../view/list/index.vue');
const Detail = () => import('./../view/detail/index.vue');

Vue.use(Router);

export function createRouter() {
	return new Router({
		mode: 'history',
		routes: [
			{
				path: '/',
				component: Index
			},
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