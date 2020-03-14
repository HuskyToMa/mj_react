# mj_react

标准的react模板，内置多个模块，可减少搭建成本以及时间

## axios

`src/common`中存在http.js文件，内涵简单的针对封装，以及使用redux-thunk的http请求封装

## less/scss

可以使用less也可以使用scss，同时支持模块化，只需要在名称处做修改

模块化： index.module.scss | index.module.less
非模块化： index.scss | index.less

`src/style`文件夹中存在common文件，可以定义一些less或者scss的通用样式

## antd

使用了antd4.0

## react生态

包含了redux以及react-router

redux封装在`src/redux`文件中
react-router封装在`src/router`文件夹中

## config文件夹

这里面有4个配置文件，分别对应为

antd.theme.js：antd的样式设置
devConfig.js：开发环境的webpack配置
preConfig.js：预生产环境的webpack配置
proConfig.js：生产环境的webpack配置
