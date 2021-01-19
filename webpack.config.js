const path = require('path');
const entries = require('./build/entries');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

function resolve(args) {
  return path.resolve(__dirname, args);
}

const enteryData = {};
const htmlPlugins = [];
entries.forEach(elem => {
  enteryData[elem.name] = resolve(`src/${elem.name}/main.ts`);
  htmlPlugins.push(
    new HtmlWebpackPlugin({
      template: resolve('public/index.html'),
      favicon: resolve('public/favicon.ico'),
      filename: `${elem.name}.html`,
      title: elem.name,
      chunks: [elem.name]
    })
  );
});

module.exports = {
  entry: enteryData,
  output: {
    filename: '[name].bundle.js',
    path: resolve('dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: ['\.vue$'] 
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: ['file-loader']
      },
      {
        test: /\.(mp3|mp4)$/,
        use: ['file-loader']
      },
    ]
  },
  resolve: {
    alias: {
      '@': resolve('src'),
      'root': resolve('.'),
    },
    extensions: [".ts", ".js", ".vue"]
  },
  plugins: [
    ...htmlPlugins,
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ]
}
