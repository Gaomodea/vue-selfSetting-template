
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, './src/main.js'), // 配置要文件打包文件
  output: {   // 配置要输出的文件
    path: path.join(__dirname, './dist'), // 配置打包好的文件存放路径
    filename: 'bundle.js'    // 配置打包好的文件名
  },
  plugins: [    // 用来配置所用到的插件，通常以对象形式配置
    new HtmlWebpackPlugin({ // 创建一个在内存中生成HTML页面的插件
      template: path.join(__dirname, './src/index.html'), // 模板页面的地址
      filename: 'index.html'     // 生成的内存页面的文件名,默认打开index页面
    })
  ],
  module: {     // 配置和第三方模块有关的节点
    rules: [    // 这里用来配置第三方loader 解析规则
      {test: /\.css$/, use: ['style-loader', 'css-loader']},  // 用来配置.css文件的解析规则
      {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},  // 配置.less文件解析规则
      {test: /\.less$/, use: ['style-loader', 'css-loader', 'sass-loader']},  // 配置.scss文件解析规则
      {test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=1000&name=[hash:8]-[name].[ext]'}, // 配置引用路径的解析规则（图片路径）
      {test: /\.(svg|ttf|eot|woff|woff2)$/, use: 'url-loader'}, // 配置字体文件路径解析规则
      {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},    // 配置babel对js语法的转换规则
      {test: /\.vue/, use: 'vue-loader'}  // 配置vue模板解析规则
    ]
  }
}