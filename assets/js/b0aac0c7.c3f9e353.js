"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5252],{218:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var s=t(4848),a=t(8453);const i={},o="Command Task",c={id:"epicachievements/configuration/tasks/command",title:"Command Task",description:"This task triggers when a player executes a command.",source:"@site/docs/epicachievements/configuration/tasks/command.md",sourceDirName:"epicachievements/configuration/tasks",slug:"/epicachievements/configuration/tasks/command",permalink:"/epicachievements/configuration/tasks/command",draft:!1,unlisted:!1,editUrl:"https://github.com/PixelStudiosDev/pixelstudiosdev.github.io/edit/master/docs/epicachievements/configuration/tasks/command.md",tags:[],version:"current",lastUpdatedAt:172615497e4,frontMatter:{},sidebar:"epicachievements",previous:{title:"Advancement Task",permalink:"/epicachievements/configuration/tasks/advancement"},next:{title:"Placeholder Task",permalink:"/epicachievements/configuration/tasks/placeholder"}},r={},m=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"command-task",children:"Command Task"}),"\n",(0,s.jsxs)(n.p,{children:["This task triggers when a player executes a command. ",(0,s.jsx)("br",{}),"\nThe in-game editor doesn't allow you to set all the necessary properties, so editing the configurations manually is highly recommended."]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["These achievements are limited to only ",(0,s.jsx)(n.strong,{children:"1"})," tier."]})}),"\n",(0,s.jsxs)(n.p,{children:["It's necessary to set the ",(0,s.jsx)(n.code,{children:"command"})," property. ",(0,s.jsx)(n.a,{href:"https://regex101.com/",children:"RegEx"})," is supported."]}),"\n",(0,s.jsx)(n.p,{children:"Example configuration:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="achievements/survival/achievements.yml"',children:'mayor:\n  type: COMMAND\n  # Matches any town name  \n  command: "^town create .+$"  \n  name: "Mayor"\n  description:\n    - "&fCreate your own town!"\n  tiers:\n    1:\n      required-amount: 1\n      points: 10\n'})})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(6540);const a={},i=s.createContext(a);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);