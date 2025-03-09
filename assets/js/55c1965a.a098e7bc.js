"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9914],{5537:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(6540),a=n(8215),s=n(5627),i=n(6347),l=n(372),o=n(604),c=n(1861),u=n(8749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=h(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,d]=m({queryString:n,groupId:a}),[f,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),v=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),x(e)}),[d,x,s]),tabValues:s}}var x=n(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(4848);function g(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),a=l[n].value;a!==r&&(c(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{o.push(e)},onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,b.jsx)(g,{...t,...e}),(0,b.jsx)(j,{...t,...e})]})}function k(e){const t=(0,x.A)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(t))}},6116:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"epicachievements/configuration/tasks/placeholder","title":"Placeholder Task","description":"This task allows EpicAchievements to integrate with basically any other plugin that has some PlaceholderAPI placeholders.","source":"@site/docs/epicachievements/configuration/03-tasks/placeholder.mdx","sourceDirName":"epicachievements/configuration/03-tasks","slug":"/epicachievements/configuration/tasks/placeholder","permalink":"/epicachievements/configuration/tasks/placeholder","draft":false,"unlisted":false,"editUrl":"https://github.com/PixelStudiosDev/pixelstudiosdev.github.io/edit/master/docs/epicachievements/configuration/03-tasks/placeholder.mdx","tags":[],"version":"current","lastUpdatedAt":1741522682000,"frontMatter":{},"sidebar":"epicachievements","previous":{"title":"Command Task","permalink":"/epicachievements/configuration/tasks/command"},"next":{"title":"Conditions","permalink":"/epicachievements/configuration/conditions"}}');var a=n(4848),s=n(8453),i=n(5537),l=n(9329);const o={},c="Placeholder Task",u={},d=[{value:"Placeholders that output integers",id:"placeholders-that-output-integers",level:2},{value:"Placeholders that output text",id:"placeholders-that-output-text",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"placeholder-task",children:"Placeholder Task"})}),"\n",(0,a.jsxs)(t.p,{children:["This task allows EpicAchievements to integrate with basically any other plugin that has some ",(0,a.jsx)(t.a,{href:"https://www.spigotmc.org/resources/placeholderapi.6245/",children:"PlaceholderAPI"})," placeholders. ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(t.h2,{id:"placeholders-that-output-integers",children:"Placeholders that output integers"}),"\n",(0,a.jsx)(t.p,{children:"The configuration is essentially the same as the other task types:"}),"\n",(0,a.jsx)(t.p,{children:"Example configuration:"}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(l.A,{value:"new",label:"v2.0",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",metastring:'title="achievements/survival/tiered.yml" showLineNumbers',children:'lumberjack:\n  type: PLACEHOLDER\n  settings:\n    # Placeholder to be tested:\n    placeholder: "%auraskills_foraging%"\n  name: "Professional Lumberjack"\n  description:\n    - "&fCut down trees!"\n  tiers:\n    1:\n      required-amount: 1\n      rewards:\n        - type: points\n          amount: 10\n    2:\n      required-amount: 2\n      rewards:\n        - type: points\n          amount: 15\n    3:\n      required-amount: 3\n      rewards:\n        - type: points\n          amount: 20\n'})})}),(0,a.jsx)(l.A,{value:"old",label:"v1.0",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",metastring:'title="achievements/survival/achievements.yml"',children:'lumberjack:\n  type: PLACEHOLDER\n  placeholder: "%auraskills_foraging%"\n  name: "Professional Lumberjack"\n  description:\n    - "&fCut down trees!"\n  tiers:\n    1:\n      required-amount: 1\n      points: 10\n    2:\n      required-amount: 2\n      points: 15\n    3:\n      required-amount: 3\n      points: 20\n'})})})]}),"\n",(0,a.jsx)(t.h2,{id:"placeholders-that-output-text",children:"Placeholders that output text"}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsxs)(t.p,{children:["These achievements are limited to only ",(0,a.jsx)(t.strong,{children:"1"})," tier."]})}),"\n",(0,a.jsx)(t.p,{children:"You can use one of the operators below to test the placeholder:"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Operator"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"EQUALS"})}),(0,a.jsx)(t.td,{children:"Checks if the output matches the specified value."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"EQUALS_IGNORE_CASE"})}),(0,a.jsx)(t.td,{children:"Checks if the output matches the specified value, ignoring case."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"NOT_EQUALS"})}),(0,a.jsx)(t.td,{children:"Checks if the output does not match the specified value."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"NOT_EQUALS_IGNORE_CASE"})}),(0,a.jsx)(t.td,{children:"Checks if the output does not match the specified value, ignoring case."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"CONTAINS"})}),(0,a.jsx)(t.td,{children:"Checks if the output contains the specified value as a substring."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"STARTS_WITH"})}),(0,a.jsx)(t.td,{children:"Checks if the output begins with the specified value."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"ENDS_WITH"})}),(0,a.jsx)(t.td,{children:"Checks if the output ends with the specified value."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"REGEX"})}),(0,a.jsx)(t.td,{children:"Checks if the output matches the specified regular expression."})]})]})]}),"\n",(0,a.jsx)(t.p,{children:"Example configuration:"}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(l.A,{value:"new",label:"v2.0",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",metastring:'title="achievements/survival/challenges.yml" showLineNumbers',children:'first-nap:\n  type: PLACEHOLDER\n  settings:\n    placeholder: "%player_is_sleeping%"\n    operator: EQUALS\n    value: "yes"\n  name: "First Nap"\n  description:\n    - \'&fSleep for the first time!\'\n  tiers:\n    1:\n      required-amount: 1\n      rewards:\n        - type: points\n          amount: 10\n'})})}),(0,a.jsx)(l.A,{value:"old",label:"v1.0",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",metastring:'title="achievements/survival/achievements.yml"',children:"first-nap:\n  type: PLACEHOLDER\n  placeholder: '%player_is_sleeping%'\n  name: \"First Nap\"\n  description:\n    - '&fSleep for the first time!'\n  tiers:\n    1:\n      placeholder:\n        operator: EQUALS\n        value: \"yes\"\n      points: 10\n      rewards: []\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(6540);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}},9329:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var r=n(8215);const a={tabItem:"tabItem_Ymn6"};var s=n(4848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:n,children:t})}}}]);