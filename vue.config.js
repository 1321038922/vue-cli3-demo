/**
 * Created by guoguanrong on 2019/3/19
 * 项目配置详情
 */
const path = require('path')
 
function resolve(dir) {
    return path.join(__dirname, dir)
}

const conf = require('./config/projectConfig')
const projectName = require('./config/project')
module.exports = {
  pages: conf.pages,
  lintOnSave: true,
  publicPath: "./",
  outputDir: projectName.name,
  devServer: {
    overlay: {
      warnings: true,
      errors: false
    }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: projectName.name,
    resolve: {
      // 根据当前运行项目生成自定义查找路径
      alias: {
        '@': resolve('src/projects/' + projectName.name)
      }
    }
  },
}
