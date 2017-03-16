/*
* @Author: zhonghua
* @Date:   2017-03-11 16:19:53
* @Last Modified by:   zhonghua
* @Last Modified time: 2017-03-16 16:19:34
*/
var htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //访问内置的插件
const autoprefixer = require('autoprefixer');
var path = require("path");
module.exports = {
	entry: {
		main:'./src/app.js'/*,
		a: './src/script/a.js'*/
	},
	output:{
		path: './dist',
		filename: 'js/[name].bundle.js'
	},
	module:{
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: path.resolve(__dirname, 'src'),
				exclude: path.resolve(__dirname, 'node_modules/'),
				query:{
					presets: ['latest']
				}
			},
			{
				test: /\.css$/,
				loader:'style-loader!css-loader?importLoaders=1!postcss-loader'
				/*loader:[
					 'style-loader',
					   'css-loader',
						'postcss-loader'
				]*/
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			/*{
				test: /\.(png|jpg|gif|svg)$/i,
				loader: 'file-loader',
				query:{
					name: 'assets/[name]-[hash:5].[ext]'
				}
			},*/
			{
				test: /\.(png|jpg|gif|svg)$/i,
				loaders: [
					'url-loader?limit=900000&name=assets/[name]-[hash:5].[ext]',
					'image-webpack-loader'
				]
			},
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!postcss-loader!less-loader'
			},
			{
				test: /\.tpl$/,
				loader: 'ejs-loader'
			}
		]

	},
	/*postcss: [
		require('autoprefixer')({
			broswers: ['last 5 versions']
		})
	],*/
	plugins: [
		new htmlWebpackPlugin({
			template: 'index.html',
			filename: 'index.html',
			inject: 'body',
			title: 'webpack is very good'/*,
			date: new Date()*/
		}),
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss: function(){
					return [autoprefixer];
				}
			}
		})
	]
}
