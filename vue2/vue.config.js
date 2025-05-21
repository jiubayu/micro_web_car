const path = require('path');
const { name } = require('./package');
const packageName = name;
function resolve(dir) {
  return path.join(__dirname, dir);
}

const port = 9004;

module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true, // 打包出来的文件会带有hash信息
  publicPath: 'http://localhost:9004',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    disableHostCheck: true,
    port,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  // 自定义webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    output: {
      // 把子应用打包成 umd 库格式
      // libraryTarget: 'umd',
      // library: 'vue2', // window.vue2获取到打包的内容
      // jsonpFunction: `webpackJsonp_${name}`,
      filename: 'vue2.js',
      // library: `${packageName}-[name]`,
      library: `${packageName}`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${packageName}`,
    },
  },
};
