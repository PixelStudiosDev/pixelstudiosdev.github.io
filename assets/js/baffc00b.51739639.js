"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7523],{7494:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=s(4848),i=s(8453);const r={},c="Placeholder Task",o={id:"epicachievements/configuration/tasks/placeholder",title:"Placeholder Task",description:"This task allows EpicAchievements to integrate with basically any other plugin that has some PlaceholderAPI placeholders.",source:"@site/docs/epicachievements/configuration/tasks/placeholder.md",sourceDirName:"epicachievements/configuration/tasks",slug:"/epicachievements/configuration/tasks/placeholder",permalink:"/epicachievements/configuration/tasks/placeholder",draft:!1,unlisted:!1,editUrl:"https://github.com/PixelStudiosDev/pixelstudiosdev.github.io/edit/master/docs/epicachievements/configuration/tasks/placeholder.md",tags:[],version:"current",lastUpdatedAt:172615497e4,frontMatter:{},sidebar:"epicachievements",previous:{title:"Command Task",permalink:"/epicachievements/configuration/tasks/command"},next:{title:"Categories",permalink:"/epicachievements/configuration/categories"}},a={},l=[{value:"Placeholders that output integer numbers",id:"placeholders-that-output-integer-numbers",level:2},{value:"Placeholders that output text",id:"placeholders-that-output-text",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"placeholder-task",children:"Placeholder Task"}),"\n",(0,n.jsxs)(t.p,{children:["This task allows EpicAchievements to integrate with basically any other plugin that has some ",(0,n.jsx)(t.a,{href:"https://www.spigotmc.org/resources/placeholderapi.6245/",children:"PlaceholderAPI"})," placeholders. ",(0,n.jsx)("br",{}),"\nThe in-game editor doesn't allow you to set all the necessary properties, so editing the configurations manually is highly recommended."]}),"\n",(0,n.jsx)(t.h2,{id:"placeholders-that-output-integer-numbers",children:"Placeholders that output integer numbers"}),"\n",(0,n.jsxs)(t.p,{children:["The configuration is essentially the same as for other task types. It's necessary to set the ",(0,n.jsx)(t.code,{children:"placeholder"})," property."]}),"\n",(0,n.jsx)(t.p,{children:"Example configuration:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",metastring:'title="achievements/survival/achievements.yml"',children:'lumberjack:\n  type: PLACEHOLDER\n  placeholder: "%auraskills_foraging%"\n  name: "Professional Lumberjack"\n  description:\n  - "&fCut down trees!"\n  tiers:\n    1:\n      required-amount: 1\n      points: 10\n    2:\n      required-amount: 2\n      points: 15\n    3:\n      required-amount: 3\n      points: 20\n'})}),"\n",(0,n.jsx)(t.h2,{id:"placeholders-that-output-text",children:"Placeholders that output text"}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["Due to internal limitations, these achievements are limited to only ",(0,n.jsx)(t.strong,{children:"1"})," tier."]})}),"\n",(0,n.jsxs)(t.p,{children:["You can use one of the operators below to test the placeholder. It's necessary to set the ",(0,n.jsx)(t.code,{children:"placeholder"})," property."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Operator"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"EQUALS"})}),(0,n.jsx)(t.td,{children:"Checks if the output matches the specified value."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"EQUALS_IGNORE_CASE"})}),(0,n.jsx)(t.td,{children:"Checks if the output matches the specified value, ignoring case."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"NOT_EQUALS"})}),(0,n.jsx)(t.td,{children:"Checks if the output does not match the specified value."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"NOT_EQUALS_IGNORE_CASE"})}),(0,n.jsx)(t.td,{children:"Checks if the output does not match the specified value, ignoring case."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"CONTAINS"})}),(0,n.jsx)(t.td,{children:"Checks if the output contains the specified value as a substring."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"STARTS_WITH"})}),(0,n.jsx)(t.td,{children:"Checks if the output begins with the specified value."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"ENDS_WITH"})}),(0,n.jsx)(t.td,{children:"Checks if the output ends with the specified value."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"REGEX"})}),(0,n.jsx)(t.td,{children:"Checks if the output matches the specified regular expression."})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"Example configuration:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",metastring:'title="achievements/survival/achievements.yml"',children:"first-nap:\n  type: PLACEHOLDER\n  placeholder: '%player_is_sleeping%'\n  name: \"First Nap\"\n  description:\n  - '&fSleep for the first time!'\n  tiers:\n    1:\n      placeholder:\n        operator: EQUALS\n        value: \"yes\"\n      points: 10\n      rewards: []\n"})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>o});var n=s(6540);const i={},r=n.createContext(i);function c(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);