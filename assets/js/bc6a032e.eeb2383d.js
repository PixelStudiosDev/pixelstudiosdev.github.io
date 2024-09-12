"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7469],{5918:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var o=r(4848),i=r(8453);const s={title:"Developer API",sidebar_position:13},t="Getting Started",l={id:"wool-wars/developer-api",title:"Developer API",description:"- Add the WoolWars dependency in your project:",source:"@site/docs/wool-wars/developer-api.md",sourceDirName:"wool-wars",slug:"/wool-wars/developer-api",permalink:"/wool-wars/developer-api",draft:!1,unlisted:!1,editUrl:"https://github.com/PixelStudiosDev/pixelstudiosdev.github.io/edit/master/docs/wool-wars/developer-api.md",tags:[],version:"current",lastUpdatedAt:172615497e4,sidebarPosition:13,frontMatter:{title:"Developer API",sidebar_position:13},sidebar:"woolwars",previous:{title:"PlaceholderAPI",permalink:"/wool-wars/placeholders/placeholderapi"}},a={},d=[{value:"Maven",id:"maven",level:3},{value:"Gradle",id:"gradle",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Add the WoolWars dependency in your project:"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"maven",children:"Maven"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:"<repository>\n    <id>jitpack.io</id>\n    <url>https://jitpack.io</url>\n</repository>\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>com.github.CubeCrafter</groupId>\n    <artifactId>WoolWars</artifactId>\n    <version>Tag</version>\n    <scope>provided</scope>\n</dependency>\n"})}),"\n",(0,o.jsx)(n.h3,{id:"gradle",children:"Gradle"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-groovy",children:"repositories {\n    maven { url 'https://jitpack.io' }\n}\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-groovy",children:"dependencies {\n    compileOnly 'com.github.CubeCrafter:WoolWars:Tag'\n}\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Replace ",(0,o.jsx)(n.code,{children:"Tag"})," with the version number. You can find the available versions in the ",(0,o.jsx)(n.a,{href:"https://github.com/CubeCrafter/WoolWars/releases/",children:"Releases"})," page."]})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Add ",(0,o.jsx)(n.code,{children:"WoolWars"})," as soft/hard dependency in your ",(0,o.jsx)(n.code,{children:"plugin.yml"}),":"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="plugin.yml"',children:"softdepend: [WoolWars]\n# or\ndepend: [WoolWars]\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Check if the plugin is enabled on the server: ",(0,o.jsx)("br",{}),"\n(You don't need to do this if you added ",(0,o.jsx)(n.code,{children:"WoolWars"})," as hard dependency)"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",metastring:'title="ExamplePlugin.java"',children:'@Override\npublic void onEnable() {\n    if (!getServer().getPluginManager().isPluginEnabled("WoolWars")) {\n        getLogger().severe("WoolWars not found! Disabling...");\n        getServer().getPluginManager().disablePlugin(this);\n        return;\n    }\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>l});var o=r(6540);const i={},s=o.createContext(i);function t(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);