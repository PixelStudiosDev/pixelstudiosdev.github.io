"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[650],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=p(a),c=r,k=s["".concat(d,".").concat(c)]||s[c]||u[c]||l;return a?n.createElement(k,o(o({ref:t},m),{},{components:a})):n.createElement(k,o({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5981:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={},o="Internal Placeholders",i={unversionedId:"wool-wars/placeholders/internal-placeholders",id:"wool-wars/placeholders/internal-placeholders",title:"Internal Placeholders",description:"The following placeholders only work in the scoreboard and in some GUIs and messages.",source:"@site/docs/wool-wars/placeholders/internal-placeholders.md",sourceDirName:"wool-wars/placeholders",slug:"/wool-wars/placeholders/internal-placeholders",permalink:"/wool-wars/placeholders/internal-placeholders",draft:!1,editUrl:"https://github.com/cubecrafter/cubecrafter.github.io/edit/master/docs/wool-wars/placeholders/internal-placeholders.md",tags:[],version:"current",lastUpdatedAt:1684678236,formattedLastUpdatedAt:"May 21, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Default Config Files",permalink:"/wool-wars/default-config-files"},next:{title:"PlaceholderAPI",permalink:"/wool-wars/placeholders/placeholderapi"}},d={},p=[{value:"General Placeholders",id:"general-placeholders",level:3},{value:"In-Game Placeholders",id:"in-game-placeholders",level:3}],m={toc:p},s="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"internal-placeholders"},"Internal Placeholders"),(0,r.kt)("p",null,"The following placeholders only work in the scoreboard and in some GUIs and messages."),(0,r.kt)("h3",{id:"general-placeholders"},"General Placeholders"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{prefix}")),(0,r.kt)("td",{parentName:"tr",align:null},"Get the plugin prefix (configurable in messages.yml)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{date}")),(0,r.kt)("td",{parentName:"tr",align:null},"Get the current date")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{count_<group>}")),(0,r.kt)("td",{parentName:"tr",align:null},"Get the amount of players playing in the specified group")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{count_total}")),(0,r.kt)("td",{parentName:"tr",align:null},"Get the total amount of players playing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{wins}")),(0,r.kt)("td",{parentName:"tr",align:null},"Get the player wins")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{losses}")),(0,r.kt)("td",{parentName:"tr",align:null},"Get the player losses")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{games_played}")),(0,r.kt)("td",{parentName:"tr",align:null},"Get the number of games played")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{kills}")),(0,r.kt)("td",{parentName:"tr",align:null},"Get the player kills")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{deaths}")),(0,r.kt)("td",{parentName:"tr",align:null},"Get the player deaths")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{wool_placed}")),(0,r.kt)("td",{parentName:"tr",align:null},"Get the amount of wool placed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{blocks_broken}")),(0,r.kt)("td",{parentName:"tr",align:null},"Get the amount of blocks broken")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{powerups_collected}")),(0,r.kt)("td",{parentName:"tr",align:null},"Get the amount of powerups collected")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{win_streak}")),(0,r.kt)("td",{parentName:"tr",align:null},"Get the player win streak")))),(0,r.kt)("h3",{id:"in-game-placeholders"},"In-Game Placeholders"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{time_formatted}")),(0,r.kt)("td",{parentName:"tr",align:null},"Get the time formatted")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{time}")),(0,r.kt)("td",{parentName:"tr",align:null},"Get the time in seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{id}")),(0,r.kt)("td",{parentName:"tr",align:null},"Get the arena ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{displayname}")),(0,r.kt)("td",{parentName:"tr",align:null},"Get the arena display name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{round}")),(0,r.kt)("td",{parentName:"tr",align:null},"Get the current round")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{group}")),(0,r.kt)("td",{parentName:"tr",align:null},"Get the arena group")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{state}")),(0,r.kt)("td",{parentName:"tr",align:null},"Get the arena state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{win_points}")),(0,r.kt)("td",{parentName:"tr",align:null},"Get the amount of points needed to win")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{players}")),(0,r.kt)("td",{parentName:"tr",align:null},"Get the amount of players in the arena")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{max_players}")),(0,r.kt)("td",{parentName:"tr",align:null},"Get the maximum amount of players in the arena")))))}u.isMDXComponent=!0}}]);