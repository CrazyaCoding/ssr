import Vue from 'vue';
import App from './app.vue';

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
	const app = new Vue({
		render: h => h(App)
	});
	return { app }
};