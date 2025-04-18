import{_ as i,c as a,o as n,a2 as h}from"./chunks/framework.DNzwJ2JK.js";const r=JSON.parse('{"title":"移动端支持","description":"","frontmatter":{},"headers":[],"relativePath":"guide/mobile-support.md","filePath":"guide/mobile-support.md"}'),l={name:"guide/mobile-support.md"};function p(t,s,e,k,E,g){return n(),a("div",null,s[0]||(s[0]=[h(`<h1 id="移动端支持" tabindex="-1">移动端支持 <a class="header-anchor" href="#移动端支持" aria-label="Permalink to &quot;移动端支持&quot;">​</a></h1><p>本套件支持使用 vw/vh 做为移动端的布局单位，并默认集成了 <a href="https://github.com/sexyHuang/postcss-px2vp" target="_blank" rel="noreferrer">postcss-px2vp</a> 插件。</p><p>使用也很简单，只需将根目录下 <code>postcss.config.js</code> 文件里的注释代码开启即可：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;postcss-px2vp&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 需要转换的单位，默认为&quot;px&quot;</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      unitToConvert: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 设计稿的视口宽度</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      viewportWidth: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">320</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 单位转换后保留的精度</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      unitPrecision: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 能转化为 vw 的属性列表</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      propList: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;*&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 希望使用的视口单位</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      viewportUnit: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;vw&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 字体使用的视口单位</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      fontViewportUnit: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;vw&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 需要忽略的 CSS 选择器，不会转为视口单位，使用原有的 px 等单位</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      selectorBlackList: [],</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 设置最小的转换数值，如果为 1 的话，只有大于 1 的值会被转换</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      minPixelValue: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 媒体查询里的单位是否需要转换单位</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      mediaQuery: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 是否直接更换属性值，而不添加备用属性</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      replace: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 忽略某些文件夹下的文件或特定文件，例如 &#39;node_modules&#39; 下的文件</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      exclude: [],</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    autoprefixer: {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>最后在开发中就可以直接使用 px 了，最终输出就是 vw 。</p>`,5)]))}const c=i(l,[["render",p]]);export{r as __pageData,c as default};
