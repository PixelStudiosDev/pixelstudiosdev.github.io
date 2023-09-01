"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[862],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(t),c=a,k=d["".concat(s,".").concat(c)]||d[c]||u[c]||o;return t?r.createElement(k,l(l({ref:n},m),{},{components:t})):r.createElement(k,l({ref:n},m))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6658:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:3},l="Commands and Permissions",i={unversionedId:"wool-wars/commands-and-permissions",id:"wool-wars/commands-and-permissions",title:"Commands and Permissions",description:"Player Commands",source:"@site/docs/wool-wars/commands-and-permissions.md",sourceDirName:"wool-wars",slug:"/wool-wars/commands-and-permissions",permalink:"/wool-wars/commands-and-permissions",draft:!1,editUrl:"https://github.com/PixelStudiosDev/pixelstudiosdev.github.io/edit/master/docs/wool-wars/commands-and-permissions.md",tags:[],version:"current",lastUpdatedAt:1693604178,formattedLastUpdatedAt:"Sep 1, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"woolwars",previous:{title:"Installation",permalink:"/wool-wars/installation"},next:{title:"Creating an Arena",permalink:"/wool-wars/configuration/creating-an-arena"}},s={},p=[{value:"Player Commands",id:"player-commands",level:2},{value:"Admin Commands",id:"admin-commands",level:2},{value:"Other Permissions",id:"other-permissions",level:2}],m={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"commands-and-permissions"},"Commands and Permissions"),(0,a.kt)("h2",{id:"player-commands"},"Player Commands"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"/woolwars join <arena>/<group>/random")," ",(0,a.kt)("br",null),"\nJoin an arena or group of arenas. ",(0,a.kt)("br",null),"\nPermission: ",(0,a.kt)("inlineCode",{parentName:"p"},"woolwars.join"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"/woolwars leave")," ",(0,a.kt)("inlineCode",{parentName:"p"},"/leave")," ",(0,a.kt)("br",null),"\nLeave the current arena. ",(0,a.kt)("br",null),"\nPermission: ",(0,a.kt)("inlineCode",{parentName:"p"},"woolwars.leave"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"/woolwars arenas")," ",(0,a.kt)("br",null),"\nOpen the arenas menu. ",(0,a.kt)("br",null),"\nPermission: ",(0,a.kt)("inlineCode",{parentName:"p"},"woolwars.arenas"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"/woolwars stats")," ",(0,a.kt)("br",null),"\nOpen the statistics menu. ",(0,a.kt)("br",null),"\nPermission: ",(0,a.kt)("inlineCode",{parentName:"p"},"woolwars.stats")))),(0,a.kt)("h2",{id:"admin-commands"},"Admin Commands"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"/woolwars forcestart")," ",(0,a.kt)("br",null),"\nForce start the game. ",(0,a.kt)("br",null),"\nPermission: ",(0,a.kt)("inlineCode",{parentName:"p"},"woolwars.forcestart"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"/woolwars setup <arena>")," ",(0,a.kt)("br",null),"\nSetup a new arena. ",(0,a.kt)("br",null),"\nPermission: ",(0,a.kt)("inlineCode",{parentName:"p"},"woolwars.admin"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"/woolwars setlobby")," ",(0,a.kt)("br",null),"\nSet the lobby location. ",(0,a.kt)("br",null),"\nPermission: ",(0,a.kt)("inlineCode",{parentName:"p"},"woolwars.admin"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"/woolwars reload")," ",(0,a.kt)("br",null),"\nReload the plugin. ",(0,a.kt)("br",null),"\nPermission: ",(0,a.kt)("inlineCode",{parentName:"p"},"woolwars.admin")))),(0,a.kt)("h2",{id:"other-permissions"},"Other Permissions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"woolwars.bypass")," ",(0,a.kt)("br",null),"\nBypass the command blocker.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"woolwars.playagain")," ",(0,a.kt)("br",null),"\nAllow the player to play again after a game.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"woolwars.forcestart")," ",(0,a.kt)("br",null),"\nAllow the player to force start the game."))))}u.isMDXComponent=!0}}]);