import{_ as e,o as i,c as a,a as n}from"./app-999404d4.js";const d={},s=n(`<h2 id="主页" tabindex="-1"><a class="header-anchor" href="#主页" aria-hidden="true">#</a> 主页</h2><h2 id="开发说明" tabindex="-1"><a class="header-anchor" href="#开发说明" aria-hidden="true">#</a> 开发说明</h2><p>[可选] 开发工具: vscode -- md编辑 github desktop -- git版本控制 fastergithub -- 加速github大陆连接</p><h2 id="本地测试环境搭建" tabindex="-1"><a class="header-anchor" href="#本地测试环境搭建" aria-hidden="true">#</a> 本地测试环境搭建</h2><ol start="0"><li>运行依赖nodejs: https://nodejs.cn/download/</li><li>检查nodejs安装是否成功: node -v# 在你的项目中安装<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn add -D vuepress@next

# 新建一个 markdown 文件
echo &#39;# Hello VuePress&#39; &gt; README.md

# 开始写作
yarn vuepress dev

# 构建静态文件
yarn vuepress build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>成功会起web服务,可通过 127.0.0.1:端口号 访问</li></ol><h2 id="qa" tabindex="-1"><a class="header-anchor" href="#qa" aria-hidden="true">#</a> QA</h2><ol start="0"><li>源编译仓库地址: https://github.com/pqdxiao/modernCppFullStackTutorial.git</li><li>nodejs版本不匹配vue时候: $env:NODE_OPTIONS=&quot;--openssl-legacy-provider&quot;</li></ol>`,7),l=[s];function r(t,o){return i(),a("div",null,l)}const u=e(d,[["render",r],["__file","index.html.vue"]]);export{u as default};
