import Vue from 'vue';
import App from './app.vue';
import { createRouter } from './router/index';
/* 不可用的一段代码 我也不知道为啥
 new Vue({
	el: '#app',
	components: { App },
	template: '<App/>'
}); */

/* new Vue({
	render: h => h(App)
}).$mount('#app'); */


export function createApp() {
	const router = createRouter();
	const app = new Vue({
		router,
		render: h => h(App)
	});
	return { app, router }
};