import { createApp } from './main';
export default context => {
	return new Promise((resolve, reject) => {
		const { app, router} = createApp();
		router.push(context.url);

		router.onReady(() => {
			const matchedComponents = router.getMatchedComponents();
			// 匹配不到路由，执行reject函数，并返回404
			if (!matchedComponents.length) {
				reject({code: 404});
			}
			// 这里返回的app用于服务端渲染页面
			resolve(app)
		}, reject);
	});
}