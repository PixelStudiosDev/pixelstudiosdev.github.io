"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[49],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),i=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),s=i(a),u=n,c=s["".concat(p,".").concat(u)]||s[u]||k[u]||l;return a?r.createElement(c,o(o({ref:t},m),{},{components:a})):r.createElement(c,o({ref:t},m))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[s]="string"==typeof e?e:n,o[1]=d;for(var i=2;i<l;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7347:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var r=a(7462),n=(a(7294),a(3905));const l={},o="PlaceholderAPI",d={unversionedId:"wool-wars/placeholders/placeholderapi",id:"wool-wars/placeholders/placeholderapi",title:"PlaceholderAPI",description:"You need to have PlaceholderAPI installed.",source:"@site/docs/wool-wars/placeholders/placeholderapi.md",sourceDirName:"wool-wars/placeholders",slug:"/wool-wars/placeholders/placeholderapi",permalink:"/wool-wars/placeholders/placeholderapi",draft:!1,editUrl:"https://github.com/PixelStudiosDev/pixelstudiosdev.github.io/edit/master/docs/wool-wars/placeholders/placeholderapi.md",tags:[],version:"current",lastUpdatedAt:1693604178,formattedLastUpdatedAt:"Sep 1, 2023",frontMatter:{},sidebar:"woolwars",previous:{title:"Internal Placeholders",permalink:"/wool-wars/placeholders/internal-placeholders"},next:{title:"Developer API",permalink:"/wool-wars/developer-api"}},p={},i=[{value:"General Placeholders",id:"general-placeholders",level:3},{value:"In-Game Placeholders",id:"in-game-placeholders",level:3}],m={toc:i},s="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(s,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"placeholderapi"},"PlaceholderAPI"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"You need to have ",(0,n.kt)("a",{parentName:"p",href:"https://www.spigotmc.org/resources/placeholderapi.6245/"},"PlaceholderAPI")," installed.")),(0,n.kt)("h3",{id:"general-placeholders"},"General Placeholders"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"%woolwars_wins%")),(0,n.kt)("td",{parentName:"tr",align:null},"Get the player wins")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"%woolwars_losses%")),(0,n.kt)("td",{parentName:"tr",align:null},"Get the player losses")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"%woolwars_games_played%")),(0,n.kt)("td",{parentName:"tr",align:null},"Get the number of games played")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"%woolwars_kills%")),(0,n.kt)("td",{parentName:"tr",align:null},"Get the player kills")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"%woolwars_deaths%")),(0,n.kt)("td",{parentName:"tr",align:null},"Get the player deaths")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"%woolwars_wool_placed%")),(0,n.kt)("td",{parentName:"tr",align:null},"Get the amount of wool placed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"%woolwars_blocks_broken%")),(0,n.kt)("td",{parentName:"tr",align:null},"Get the amount of blocks broken")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"%woolwars_powerups_collected%")),(0,n.kt)("td",{parentName:"tr",align:null},"Get the amount of powerups collected")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"%woolwars_selected_kit%")),(0,n.kt)("td",{parentName:"tr",align:null},"Get the name of the selected kit")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"%woolwars_win_streak%")),(0,n.kt)("td",{parentName:"tr",align:null},"Get the player win streak")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"%woolwars_kdr%")),(0,n.kt)("td",{parentName:"tr",align:null},"Get the player KDR")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"%woolwars_count_total%")),(0,n.kt)("td",{parentName:"tr",align:null},"Get the total amount of players playing")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"%woolwars_count_<group>%")),(0,n.kt)("td",{parentName:"tr",align:null},"Get the amount of players playing in the specified group")))),(0,n.kt)("h3",{id:"in-game-placeholders"},"In-Game Placeholders"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"%woolwars_arena_id%")),(0,n.kt)("td",{parentName:"tr",align:null},"Get the current arena ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"%woolwars_arena_displayname%")),(0,n.kt)("td",{parentName:"tr",align:null},"Get the current arena display name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"%woolwars_arena_group%")),(0,n.kt)("td",{parentName:"tr",align:null},"Get the current arena group")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"%woolwars_arena_state%")),(0,n.kt)("td",{parentName:"tr",align:null},"Get the current arena state")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"%woolwars_arena_time%")),(0,n.kt)("td",{parentName:"tr",align:null},"Get the current arena time in seconds")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"%woolwars_arena_time_formatted%")),(0,n.kt)("td",{parentName:"tr",align:null},"Get the current arena time formatted as mm:ss")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"%woolwars_arena_win_points%")),(0,n.kt)("td",{parentName:"tr",align:null},"Get the current arena win points")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"%woolwars_arena_players%")),(0,n.kt)("td",{parentName:"tr",align:null},"Get the current number of players in the arena")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"%woolwars_arena_max_players%")),(0,n.kt)("td",{parentName:"tr",align:null},"Get the current arena max players")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"%woolwars_arena_kills%")),(0,n.kt)("td",{parentName:"tr",align:null},"Get the current kills")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"%woolwars_arena_deaths%")),(0,n.kt)("td",{parentName:"tr",align:null},"Get the current deaths")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"%woolwars_arena_wool_placed%")),(0,n.kt)("td",{parentName:"tr",align:null},"Get the current amount of wool placed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"%woolwars_arena_blocks_broken%")),(0,n.kt)("td",{parentName:"tr",align:null},"Get the current amount of blocks broken")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"%woolwars_arena_round_kills%")),(0,n.kt)("td",{parentName:"tr",align:null},"Get the current round kills")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"%woolwars_arena_round_wool_placed%")),(0,n.kt)("td",{parentName:"tr",align:null},"Get the current round wool placed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"%woolwars_arena_round_blocks_broken%")),(0,n.kt)("td",{parentName:"tr",align:null},"Get the current round blocks broken")))))}k.isMDXComponent=!0}}]);