---
home: true
heroImage: https://s1.ax1x.com/2023/07/20/pCHeVoD.jpg
actionText: 快速开始 →
actionLink: /md/guide/guide-overview.md
features:
- title: 夯实基础
  details: 不积跬步无以至千里, 仰望星空还需脚踏实地
- title: 构建体系
  details: 告别碎片化学习，逐步完善自己的知识体系
- title: 后端开发
  details: 以C++开发为主, 业余学习前端知识
---
![](https://img.shields.io/badge/c++-学习路线-brightgreen.svg)
![](https://img.shields.io/badge/数据库-MySQL,ElasticSearch,Redis-green.svg)
![](https://img.shields.io/badge/微服务-Docker,k8s,Istio-yellow.svg)
![](https://img.shields.io/badge/面试题-100+-orange.svg)
![](https://img.shields.io/badge/中间件-ZeroMQ-blue.svg)
![](https://img.shields.io/badge/读书笔记-muduo-red.svg)

# C++ 全栈知识体系

> 一个记录C++知识的学习网站！
>
> 包含内容: C++(基础、函数、知识点、IO框架、新特性), 算法, 数据库(MySQL、ElasticSearch、Redis), 编程四大件, 架构, 微服务, 中间件(ZeroMQ、Dubbo、Consul、Logstash、Kong), 工具, 部署(Docker、k8s、Istio), 项目(开源项目、学习项目、个人项目), 面试, 读书笔记, 文章, 成长, 前端学习, 日常使用 ...

网站地址：

github链接：

相互学习交流方式:

* QQ交流群： (网站错误反馈————欢迎批评指正😉)
* 微信公众号: 直接搜: 或者 可以扫下面图片

## 项目背景

C++ 知识碎片化, 容易遗忘, 想建立一个博客记录学习的知识内容, 便于定期回顾, 更新新知识以及补充对原有知识内容的扩展。

## 项目展示

## 开发说明

[可选] 开发工具:
vscode -- md编辑
github desktop -- git版本控制
fastergithub -- 加速github大陆连接

## 本地测试环境搭建

0.运行依赖nodejs:https://nodejs.cn/download/


1.检查nodejs安装是否成功: node -v
2.安装vuepress: npm install -D vuepress 受限大陆局域网可能较慢
3.运行npm run docs:dev
4.成功会起web服务,可通过 127.0.0.1:端口号 访问

## QA

0. 源编译仓库地址:
   https://github.com/pqdxiao/modernCppFullStackTutorial.git
   1.nodejs版本不匹配vue时候:
   $env:NODE_OPTIONS="--openssl-legacy-provider"
