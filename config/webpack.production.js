/* global __dirname */

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
new webpack.optimize.DedupePlugin()

const configDev = require('./webpack.dev.js')

module.exports = Object.assign(configDev, {
	entry: './src/website/app.js',
	output: {
		path: './dist-website/',
		filename: 'app.js'
	},
	devtool: undefined,
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new CopyWebpackPlugin([
			{ context: './src/website/static/', from: '**/*', to: './' },
		]),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
			},
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
			},
		}),
		new webpack.optimize.DedupePlugin(),
	],
});
