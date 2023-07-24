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
