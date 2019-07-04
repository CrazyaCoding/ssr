const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

const env = process.env.NODE_ENV;

module.exports = {
	target: 'node',
	mode: 'development',
	entry: {
		app: path.join(__dirname, '../src/entry-server.js')
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/dist/',
		filename: 'server-bundle.js',
		libraryTarget: 'commonjs2'
	},
	module: {
		noParse: /es6-promise\.js$/,
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new VueLoaderPlugin()
	]
}