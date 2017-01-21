var webpack = require('webpack');
var path = require('path');

var config = {

	entry: './index.js',
	output: {
		path: 'public',
		filename: 'bundle.js',
		publicPath: '/'
	} ,
	module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: ['babel-loader'],
                 query: {
                     presets: ['es2015', 'react']
                 }
             }
         ]
     }

}

module.exports = config;