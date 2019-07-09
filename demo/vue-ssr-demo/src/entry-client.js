import { createApp } from './main';

const { app, router, store } = createApp();

if (window.__INITIAL_STATE__) {
	store.replaceState(window.__INITIAL_STATE__);
}

router.onReady(() => {
	app.$mount('#app');
	// 添加路由钩子函数，用于处理asyncData
	// 在初始化resolve后执行
	// 以便我们不会二次预取已有的数据
	router.beforeResolve((to, from , next) => {
		console.log('123');
		const matched = router.getMatchedComponents(to)
		const prevMatched = router.getMatchedComponents(from)
	
		// we only care about non-previously-rendered components,
		// so we compare them until the two matched lists differ
		let diffed = false
		const activated = matched.filter((c, i) => {
		  return diffed || (diffed = (prevMatched[i] !== c))
		})
	
		if (!activated.length) {
		  return next()
		}
	
		// this is where we should trigger a loading indicator if there is one
		Promise.all(activated.map(c => {
		  if (c.asyncData) {
			alert('fetch data in client side')
			return c.asyncData({ store, route: to })
		  }
		})).then(() => {
		  // stop loading indicator
		  next()
		}).catch(next)
	  })
});