"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6661],{8551:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>a});var t=i(4848),d=i(8453);const s={},l="Using the Guilds API",r={id:"guilds/developer-api/enable",title:"Using the Guilds API",description:"- Add Guilds as soft/hard dependency in your plugin.yml:",source:"@site/docs/guilds/developer-api/enable.md",sourceDirName:"guilds/developer-api",slug:"/guilds/developer-api/enable",permalink:"/guilds/developer-api/enable",draft:!1,unlisted:!1,editUrl:"https://github.com/PixelStudiosDev/pixelstudiosdev.github.io/edit/master/docs/guilds/developer-api/enable.md",tags:[],version:"current",lastUpdatedAt:172615497e4,frontMatter:{},sidebar:"guilds",previous:{title:"Getting Started",permalink:"/guilds/developer-api/dependency"},next:{title:"Working with Guilds API",permalink:"/guilds/developer-api/guilds-api"}},o={},a=[];function u(e){const n={code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"using-the-guilds-api",children:"Using the Guilds API"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Add ",(0,t.jsx)(n.code,{children:"Guilds"})," as soft/hard dependency in your ",(0,t.jsx)(n.code,{children:"plugin.yml"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="plugin.yml"',children:"softdepend: [Guilds]\n# or\ndepend: [Guilds]\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Check if the plugin is enabled on the server: ",(0,t.jsx)("br",{}),"\n(You don't need to do this if you added ",(0,t.jsx)(n.code,{children:"Guilds"})," as hard dependency)"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="ExamplePlugin.java"',children:'@Override\npublic void onEnable() {\n    if (!getServer().getPluginManager().isPluginEnabled("Guilds")) {\n        getLogger().severe("Guilds not found! Disabling...");\n        getServer().getPluginManager().disablePlugin(this);\n        return;\n    }\n    \n    // Other Code\n}\n'})})]})}function c(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>r});var t=i(6540);const d={},s=t.createContext(d);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);