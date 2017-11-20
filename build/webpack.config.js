// webpack.config.js
var utils = require('./utils');
var vueLoaderConfig = require('./vue-loader.conf');
module.exports = {
  // This is the "main" file which should include all other modules
  entry: './src/index.js',
  // Where should the compiled file go?
  output: {
    filename: 'bundle.js'
  },
  resolve: {
  alias: {
    vue: 'vue/dist/vue.js'
  }
},
  module: {
    // Special compilation rules
    loaders: [
      {
        // Ask webpack to check: If this file ends with .js, then apply some transforms
        test: /\.js$/,
        // Transform it with babel
        loader: 'babel-loader',
        // don't transform node_modules folder (which don't need to be compiled)
        exclude: /node_modules/
      },
      {
        // Ask webpack to check: If this file ends with .vue, then apply some transforms
        test: /\.vue$/,
        // don't transform node_modules folder (which don't need to be compiled)
        // exclude: /(node_modules|bower_components)/,

        loader: 'vue-loader',
        options: vueLoaderConfig
        // Transform it with vue


    },
    {
      test: /\.css$/,
      loader: 'css-loader'
    },
    {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'file-loader?name=public/fonts/[name].[ext]'
    }
  ]
},
devServer: {
       port: 8081
   }
}