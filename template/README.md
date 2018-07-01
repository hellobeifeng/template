# vue-starter-kit
一个用于快速搭建前端vue工程的脚手架

## 一、基本使用
### 介绍

使用的主要的技术如下
- webpack 3.10
- express 4.16
- vue 2.5
- vuex 3.0
- vue-router 3.0
- axios


### 如何使用

执行下面命令，以当前脚手架为模板创建vue单页应用项目

https://github.com/hellobeifeng/template

    npm i -g vue-cli

    vue init hellobeifeng/template#vue-starter myprojectname

### 执行命令介绍

    npm run build    | 执行构建，产出编译后的文件
    npm run dev      | 使用 webpack-dev-server 运行开发环境
    npm run lint     | 对 src/ 目录下的 js 和 vue文件，执行 eslint 校验
    npm run lint-fix | 用于快速修复上一步的 eslint 错误

## 二、目录结构

  `tree -I '*git|*node_modules'`



## 目前支持功能如下

- [x] 使用自定义 webpack 配置文件 ，支持区分 开发模式 和 构建模式:sparkles:
- [x] 开发环境使用 webpack-dev-server 支持自动打开浏览器、模块热重载等
- [x] 支持 eslint 校验, 对js vue 文件，会在文件保存后，其他module rule生效前检查，如果出错中止后续行为，提高效率
- [x] 支持 editorconfig 的
- [x] 集成了 vuex 和 vue-router 并通过一个TODO应用实现最佳实践
- [x] 支持 precommit git hook
- [x] 预制了自定义的弹窗组件、Loading组件、tab切换组件
- [x] 预设了对 css / jsx / vue / stylus 文件和主流图片类型的文件以及图标字体文件编译支持
- [x] 支持设置项目 favicon.ico

## 关于如何正确持续引入图标
    - 1、在iconfont 网站创建工程，将中意的图标添加进入工程
    - 2、下载该工程至本地，解压压缩包，打开文件夹
    - 3、复制文件夹中四个字体文件并覆盖项目中`src/assets/fonts/`中的对应文件
    - 4.1、如果是首次引入字体文件，将文件夹内 css文件改名为`.styl`后缀复制到`src/assets/styles`文件夹内；
    - 4.2、如果不是首次引入而是向项目追加字体文件，则将下载的然后复制修改 css文件中第6行base64，替换掉对应文件的对应内容
    - 5、开始使用`<div class="icon-left"></div>`

## TODO

- proxy流程
- icon流程
- bus-auth
- 自定义组件
- util.js - ?? 合并一下
- webpack-chunkname 懒加载这个没起作用


- babel-polyfill babel-runtime fastclick
