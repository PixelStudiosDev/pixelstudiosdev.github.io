"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[230],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4422:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:2},a="Installation",l={unversionedId:"guilds/installation",id:"guilds/installation",title:"Installation",description:"Spigot",source:"@site/docs/guilds/installation.md",sourceDirName:"guilds",slug:"/guilds/installation",permalink:"/guilds/installation",draft:!1,editUrl:"https://github.com/PixelStudiosDev/pixelstudiosdev.github.io/edit/master/docs/guilds/installation.md",tags:[],version:"current",lastUpdatedAt:1704220579,formattedLastUpdatedAt:"Jan 2, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guilds",previous:{title:"Home",permalink:"/guilds/"},next:{title:"Language Config",permalink:"/guilds/configuration/language-config"}},s={},p=[{value:"Spigot",id:"spigot",level:2},{value:"Proxy Mode",id:"proxy-mode",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Optional Dependencies",id:"optional-dependencies",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("h2",{id:"spigot"},"Spigot"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the latest version of the plugin from ",(0,o.kt)("a",{parentName:"li",href:"https://www.spigotmc.org/resources/110931/"},"SpigotMC"),"\nor ",(0,o.kt)("a",{parentName:"li",href:"https://polymart.org/r/2915"},"Polymart")," or ",(0,o.kt)("a",{parentName:"li",href:"https://builtbybit.com/resources/27980/"},"BuiltByBit"),"."),(0,o.kt)("li",{parentName:"ol"},"Place the downloaded jar file in your server's ",(0,o.kt)("inlineCode",{parentName:"li"},"plugins")," folder."),(0,o.kt)("li",{parentName:"ol"},"Restart your server."),(0,o.kt)("li",{parentName:"ol"},"Enjoy!")),(0,o.kt)("h2",{id:"proxy-mode"},"Proxy Mode"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the latest version of the plugin from ",(0,o.kt)("a",{parentName:"li",href:"https://www.spigotmc.org/resources/110931/"},"SpigotMC"),"\nor ",(0,o.kt)("a",{parentName:"li",href:"https://polymart.org/r/2915"},"Polymart")," or ",(0,o.kt)("a",{parentName:"li",href:"https://builtbybit.com/resources/27980/"},"BuiltByBit"),"."),(0,o.kt)("li",{parentName:"ol"},"Place the downloaded jar file in your Proxy's and in your Spigot servers ",(0,o.kt)("inlineCode",{parentName:"li"},"plugins")," folder."),(0,o.kt)("li",{parentName:"ol"},"Restart your proxy and your servers."),(0,o.kt)("li",{parentName:"ol"},"In each server set in the Guilds config file (",(0,o.kt)("inlineCode",{parentName:"li"},"plugins/Guilds/config.yml"),") ",(0,o.kt)("inlineCode",{parentName:"li"},"guilds.settings.bungeecord.enabled"),"\nto ",(0,o.kt)("inlineCode",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ol"},"Restart your servers."),(0,o.kt)("li",{parentName:"ol"},"Enjoy!")),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Java 8 or higher"),(0,o.kt)("li",{parentName:"ul"},"A 1.8.8 - 1.20.1 Spigot server"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"(Optional)")," BungeeCord or Velocity for Proxy Mode"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"(Optional)")," A MySQL server")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The plugin officially supports ",(0,o.kt)("inlineCode",{parentName:"p"},"Spigot")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Paper")," servers. Other forks may work, but are not officially supported.")),(0,o.kt)("h2",{id:"optional-dependencies"},"Optional Dependencies"),(0,o.kt)("p",null,"Guilds doesn't require any other plugins to work, but it can hook into some external plugins to provide additional\nfeatures."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.spigotmc.org/resources/placeholderapi.6245/"},"PlaceholderAPI")," - Required for placeholders"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://polymart.org/resource/bedwars1058.1152"},"Bedwars1058")," - Required for giving guild experience and other on\ncertain events")))}c.isMDXComponent=!0}}]);