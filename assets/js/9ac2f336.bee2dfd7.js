"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3660],{5064:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var t=e(4848),o=e(8453);const s={},a="Ranks Config",r={id:"guilds/configuration/rank-config",title:"Ranks Config",description:"File location",source:"@site/docs/guilds/configuration/rank-config.md",sourceDirName:"guilds/configuration",slug:"/guilds/configuration/rank-config",permalink:"/guilds/configuration/rank-config",draft:!1,unlisted:!1,editUrl:"https://github.com/PixelStudiosDev/pixelstudiosdev.github.io/edit/master/docs/guilds/configuration/rank-config.md",tags:[],version:"current",lastUpdatedAt:172044558e4,frontMatter:{},sidebar:"guilds",previous:{title:"Quests Config",permalink:"/guilds/configuration/quests-config"},next:{title:"Commands and Permissions",permalink:"/guilds/commands-and-permissions"}},c={},d=[{value:"File location",id:"file-location",level:2},{value:"Editing the file",id:"editing-the-file",level:2}];function l(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"ranks-config",children:"Ranks Config"}),"\n",(0,t.jsx)(i.h2,{id:"file-location",children:"File location"}),"\n",(0,t.jsxs)(i.p,{children:["The main configuration file is located in ",(0,t.jsx)(i.code,{children:"plugins/Guilds/ranks.yml"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"editing-the-file",children:"Editing the file"}),"\n",(0,t.jsx)(i.p,{children:"Here you can find all the information regarding the configuration of the file:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-yaml",metastring:'title="ranks.yml"',children:"guilds:\n  #Settings of default ranks (on guild create)\n  ranks:\n    #Rank name\n    master:\n      #Rank display name\n      displayName: Guild Master\n\n      #Rank permissions\n      #Set [ ] for any permissions\n      #Permissions: modify-name, modify-motd, modify-tag, change-ranks, finder-options, officer-chat, kick, mute, invite, log, stats, party, settings, change-discord\n      permissions:\n        - modify-name\n        - modify-motd\n        - modify-tag\n        - change-ranks\n        - finder-options\n        - officer-chat\n        - kick\n        - mute\n        - invite\n        - log\n        - stats\n        - party\n        - settings\n        - change-discord\n\n      #Rank priority (min 0)\n      priority: 6\n      \n      #Is default?\n      default: false\n      \n      #Is master?\n      master: true\n    \n    #other ranks...\n"})})]})}function u(n={}){const{wrapper:i}={...(0,o.R)(),...n.components};return i?(0,t.jsx)(i,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},8453:(n,i,e)=>{e.d(i,{R:()=>a,x:()=>r});var t=e(6540);const o={},s=t.createContext(o);function a(n){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function r(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:a(n.components),t.createElement(s.Provider,{value:i},n.children)}}}]);