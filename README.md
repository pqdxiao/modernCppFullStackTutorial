## 主页

## 开发说明

[可选] 开发工具:
vscode -- md编辑
github desktop -- git版本控制
fastergithub -- 加速github大陆连接

## 本地测试环境搭建

0. 运行依赖nodejs: https://nodejs.cn/download/
1. 检查nodejs安装是否成功: node -v# 在你的项目中安装
   ```
   yarn add -D vuepress@next

   # 新建一个 markdown 文件
   echo '# Hello VuePress' > README.md

   # 开始写作
   yarn vuepress dev

   # 构建静态文件
   yarn vuepress build
   ```
2. 成功会起web服务,可通过 127.0.0.1:端口号 访问

## QA

0. 源编译仓库地址:
   https://github.com/pqdxiao/modernCppFullStackTutorial.git
1. nodejs版本不匹配vue时候:
   $env:NODE_OPTIONS="--openssl-legacy-provider"
