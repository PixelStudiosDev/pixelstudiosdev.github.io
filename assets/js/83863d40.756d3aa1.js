"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2383],{6995:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=s(4848),r=s(8453);const o={sidebar_position:3},t="Proxy Mode",l={id:"guilds/installation/proxy-mode",title:"Proxy Mode",description:"The plugin requires REDIS and a MySQL or MongoDB database to work in proxy mode.",source:"@site/docs/guilds/installation/proxy-mode.md",sourceDirName:"guilds/installation",slug:"/guilds/installation/proxy-mode",permalink:"/guilds/installation/proxy-mode",draft:!1,unlisted:!1,editUrl:"https://github.com/PixelStudiosDev/pixelstudiosdev.github.io/edit/master/docs/guilds/installation/proxy-mode.md",tags:[],version:"current",lastUpdatedAt:1731352532e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"guilds",previous:{title:"Spigot",permalink:"/guilds/installation/spigot"},next:{title:"Main Config",permalink:"/guilds/configuration/main-config"}},d={},c=[{value:"Installing Redis",id:"installing-redis",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"proxy-mode",children:"Proxy Mode"}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsxs)(n.p,{children:["The plugin requires ",(0,i.jsx)(n.strong,{children:"REDIS"})," and a ",(0,i.jsx)(n.strong,{children:"MySQL"})," or ",(0,i.jsx)(n.strong,{children:"MongoDB"})," database to work in proxy mode. ",(0,i.jsx)("br",{}),"\nIf you don't have a REDIS server, you can use the plugin in standalone mode."]})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Download the latest version of the plugin from ",(0,i.jsx)(n.a,{href:"https://www.spigotmc.org/resources/110931/",children:"SpigotMC"}),"\nor ",(0,i.jsx)(n.a,{href:"https://polymart.org/r/2915",children:"Polymart"})," or ",(0,i.jsx)(n.a,{href:"https://builtbybit.com/resources/27980/",children:"BuiltByBit"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Put the downloaded jar file in your ",(0,i.jsx)(n.strong,{children:"Proxy"}),"'s and in ALL your ",(0,i.jsx)(n.strong,{children:"Spigot"})," servers ",(0,i.jsx)(n.code,{children:"plugins"})," folder."]}),"\n",(0,i.jsx)(n.li,{children:"Restart your proxy and your servers."}),"\n",(0,i.jsxs)(n.li,{children:["In each server set in the Guilds config file (",(0,i.jsx)(n.code,{children:"plugins/Guilds/config.yml"}),") ",(0,i.jsx)(n.code,{children:"guilds.settings.bungeecord.enabled"}),"\nto ",(0,i.jsx)(n.code,{children:"true"})]}),"\n",(0,i.jsxs)(n.li,{children:["Set ",(0,i.jsx)(n.strong,{children:"Database"})," credentials in all ",(0,i.jsx)(n.strong,{children:"Spigot"})," servers in the config files"]}),"\n",(0,i.jsxs)(n.li,{children:["Install and configure ",(0,i.jsx)(n.strong,{children:"Redis"}),". Check the ",(0,i.jsx)(n.a,{href:"#installing-redis",children:"Installing Redis"})," section for more information."]}),"\n",(0,i.jsx)(n.li,{children:"Restart your servers."}),"\n",(0,i.jsx)(n.li,{children:"Enjoy the plugin!"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"installing-redis",children:"Installing Redis"}),"\n",(0,i.jsxs)(n.p,{children:["Here there are some information about the installation of Redis. ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["All servers in the same machine:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Install and configure Redis in your machine"}),"\n",(0,i.jsx)(n.li,{children:"Set the Redis credentials in all servers in the config file"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Servers in different machines:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Choose a machine to host the Redis server"}),"\n",(0,i.jsx)(n.li,{children:"Install and configure Redis in the chosen machine"}),"\n",(0,i.jsx)(n.li,{children:"Set the Redis credentials in all servers in the config file"}),"\n",(0,i.jsx)(n.li,{children:"Make sure the Redis server is accessible from all servers"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.p,{children:"Let's assume the following IP addresses for the three machines:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Machine 1"})," (where Redis will be installed): ",(0,i.jsx)(n.code,{children:"192.168.1.100"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Machine 2"})," (connecting to Redis on Machine 1): ",(0,i.jsx)(n.code,{children:"192.168.1.101"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Machine 3"})," (connecting to Redis on Machine 1): ",(0,i.jsx)(n.code,{children:"192.168.1.102"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["We will install Redis on ",(0,i.jsx)(n.strong,{children:"Machine 1"})," and configure it. ",(0,i.jsx)("br",{}),"\nMake sure that the Redis server is accessible from all machines, setting a password for major security. ",(0,i.jsx)("br",{}),"\nThen, we will set the Redis credentials in the config files of the servers on ALL machines to connect to the Redis server on ",(0,i.jsx)(n.strong,{children:"Machine 1"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["In all servers we'll have a similar configuration in the ",(0,i.jsx)(n.code,{children:"config.yml"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"redis:\n  host: 192.168.1.100\n  port: 6379\n  username: ''\n  password: 'Your_Password'\n  \nguilds:\n  settings:\n    bungeecord:\n      enabled: true\n\n# Other configurations...\n"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Make sure to replace ",(0,i.jsx)(n.code,{children:"Your_Password"})," with the password you set for the Redis server. ",(0,i.jsx)("br",{}),"\nIf you chose a username for the Redis server, make sure to set it in the ",(0,i.jsx)(n.code,{children:"username"})," field."]})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>l});var i=s(6540);const r={},o=i.createContext(r);function t(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);