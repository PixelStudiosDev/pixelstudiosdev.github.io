"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9831],{8466:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var i=t(4848),s=t(8453);const o={},r="Quests Config",u={id:"guilds/configuration/quests-config",title:"Quests Config",description:"File location",source:"@site/docs/guilds/configuration/quests-config.md",sourceDirName:"guilds/configuration",slug:"/guilds/configuration/quests-config",permalink:"/guilds/configuration/quests-config",draft:!1,unlisted:!1,editUrl:"https://github.com/PixelStudiosDev/pixelstudiosdev.github.io/edit/master/docs/guilds/configuration/quests-config.md",tags:[],version:"current",lastUpdatedAt:1719307448e3,frontMatter:{},sidebar:"guilds",previous:{title:"Menu Config",permalink:"/guilds/configuration/menu-config"},next:{title:"Ranks Config",permalink:"/guilds/configuration/rank-config"}},a={},l=[{value:"File location",id:"file-location",level:2},{value:"Editing the file",id:"editing-the-file",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"quests-config",children:"Quests Config"}),"\n",(0,i.jsx)(n.h2,{id:"file-location",children:"File location"}),"\n",(0,i.jsxs)(n.p,{children:["The main configuration file is located in ",(0,i.jsx)(n.code,{children:"plugins/Guilds/quests.yml"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"editing-the-file",children:"Editing the file"}),"\n",(0,i.jsx)(n.p,{children:"Here you can find all the information regarding the configuration of the file:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="levels.yml"',children:"quests:\n  \n  #Quests Settings\n  settings:\n    \n    #Reset day of the week\n    #List: Sunday = 1, Monday = 2, Tuesday = 3, Wednesday = 4, Thursday = 5, Friday = 6, Saturday = 7\n    reset-day: 6\n    \n    #Reset time of the day\n    #Format: HH:mm:ss\n    reset-time: '02:00:00'\n    \n    #Quests reset format\n    reset-format: '{hours}hours, {minutes}minutes'\n    \n    #Quests tiers based on guilds experience\n    #Format: 'required:reward'\n    tiers:\n      - 25:50000\n      - 100:50000\n      - 500:50000\n      - 1500:50000\n    \n    #Tier format\n    #You can user internal quests placeholders\n    tier-format: '&7Tier {quest_tier}: &6{quest_progress}&7/{quest_required}'\n\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>u});var i=t(6540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);