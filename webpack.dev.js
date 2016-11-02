// 使用require 导入webpack
var webpack = require('webpack')
// 声明webpack提供的提取文件公共部分的对象; output 是对应输出项配置 （即入口文件最终要生成什么名字的文件、存放到哪里）
var html = require('html-webpack-plugin')

var config = {}
// 页面入口文件配置
config.entry = ["./src/app.js"]

// 入口文件输出配置
config.output = {
    path: "./n-build/static",    // 输出文件的保存路径
    publicPath: "/static/",
    filename: "build.js"    // 输出文件的名称
}

// 配置模块加载器
config.module = {
    loaders: [
        {
            test: /\.vue$/,
            loader: 'vue'
        },
        {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        },
        {
            test: /\.(png|jpg|gif|ttf|eot|svg|woff)$/,
            loader: "file"
        },
        {
            test: /\.json(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url"
        }
    ]
}

// 配置代理，用于与后端接口
config.devServer = {
    proxy: {
        '/**.ajax': {
            target: 'http://localhost:8080',
            secure: false
        }
    }
}

config.vue = {
    loaders: {
        js: 'babel'
    }
}

module.exports = config