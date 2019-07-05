const Vue = require('vue');
const express = require('express');
const server = express();
const createRenderer = require('vue-server-renderer').createRenderer;
// const app = require('./dist/server-bundle.js').default;
const createApp = require('./dist/server-bundle.js').default;

const renderer = createRenderer({
	template: require('fs').readFileSync('./index.template.html', 'utf-8')
});

server.use(express.static('dist')); // 为了让client-bundle.js能够被加载 所以页面上引用的client-bundle.js是直接引用 没有加地址

server.get('*', (req, res) => {
	const context = {
		title: 'hello',
		meta: `<meta charset="utf-8">`
	};
	const app = createApp({
		url: req.url
	});

	renderer.renderToString(app, context, (err, html) => {
		if (err) {
			res.status(500).end('Internal Server Error')
			return;
		}
		res.send(html);
	})
});


server.listen(8080, () => {
	console.log(`server statrt at localhost:8080`);
});