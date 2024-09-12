"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6075],{9303:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var t=i(4848),o=i(8453);const a={sidebar_position:2},s="Menu Config",l={id:"guilds/configuration/menu-config",title:"Menu Config",description:"File location",source:"@site/docs/guilds/configuration/menu-config.md",sourceDirName:"guilds/configuration",slug:"/guilds/configuration/menu-config",permalink:"/guilds/configuration/menu-config",draft:!1,unlisted:!1,editUrl:"https://github.com/PixelStudiosDev/pixelstudiosdev.github.io/edit/master/docs/guilds/configuration/menu-config.md",tags:[],version:"current",lastUpdatedAt:172615497e4,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guilds",previous:{title:"Main Config",permalink:"/guilds/configuration/main-config"},next:{title:"Ranks Config",permalink:"/guilds/configuration/rank-config"}},r={},u=[{value:"File location",id:"file-location",level:2},{value:"Gui Item Configuration",id:"gui-item-configuration",level:2},{value:"Editing the file",id:"editing-the-file",level:2}];function c(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"menu-config",children:"Menu Config"}),"\n",(0,t.jsx)(e.h2,{id:"file-location",children:"File location"}),"\n",(0,t.jsxs)(e.p,{children:["The menu configuration file is located in ",(0,t.jsx)(e.code,{children:"plugins/Guilds/menu.yml"}),"."]}),"\n",(0,t.jsx)(e.h2,{id:"gui-item-configuration",children:"Gui Item Configuration"}),"\n",(0,t.jsx)(e.p,{children:"Here you can find all the information regarding a gui item configuration:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-yaml",metastring:'title="example.yml"',children:"items:\n\n  #A custom gui item\n  test-item:\n\n    #Item Material\n    #Formats: MATERIAL  /  MATERIAL:DATA  /  texture:skin-texture\n    #Examples: WOOL (white)  /  WOOL:14 (red)  /  texture:4d1ebd794085e0648159e8f8fd504bdb5ccd26fd32a6a5ab2d669031931064b5\n    material: WOOL:14\n\n    #Item Amount\n    amount: 1\n\n    #True to make enchanted the item\n    enchanted: false\n\n    #Gui Slot\n    #From 0 to Gui Slots - 1\n    #Example: Gui Slots 27 --\x3e 0 to 26\n    slot: 0\n\n    #Item Name\n    name: '&aInvite Player'\n\n    #Item Lore\n    lore:\n      - '&7Click here to invite a player to'\n      - '&7your Guild.'\n\n    #Command on click\n    #Action types:\n\n    #Remove the string to execute the plugin's default action\n\n    #Chat Message -> [chat] value\n    #Player Command -> [player] command without slash\n    #Console Message -> [console] command without slash\n    #Server Connection -> [server] bungee/velocity server name\n    #No action -> [no-action]\n\n    #Examples:\n    #[chat] hello world\n    #[player] gamemode creative\n    #[console] give {player} diamond\n    #[server] lobby-2\n    #[no-action]\n    \n    command: '[player] gamemode creative'\n\n    #Item Functions\n    \n    #Available functions:\n    #SELF_SKIN -> Set the item's skin to the own player's skin\n    \n    #Other functions will be added in future updates\n    \n    functions:\n      - SELF_SKIN      \n"})}),"\n",(0,t.jsx)(e.h2,{id:"editing-the-file",children:"Editing the file"}),"\n",(0,t.jsx)(e.p,{children:"Here you can find all the information regarding the configuration of the file:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-yaml",metastring:'title="menu.yml"',children:"guilds:\n  \n  # Menu Gui Configuration\n  # name -> Gui name\n  # slot -> Gui slots\n  # (optional) ...-slots -> slot used for variable gui items\n  inventory:\n    home:\n      name: '&8Guild'\n      slot: 45\n      players-slots: 27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,42,43,44\n    home-no-guild:\n      name: '&8Guild'\n      slot: 27\n    gsettings:\n      name: '&8Guild Settings'\n      slot: 36\n      status:\n        'on': '&aON'\n        'off': '&cOFF'\n    tag-color:\n      name: '&8Guild Tag Color'\n      slot: 36\n      tag-slots: 10,11,12,13,14,15,16,19,20,21,22,23,24,25\n    games:\n      name: '&8Select Guild Games'\n      slot: 36\n      game-slots: 10,11,12,13,14,15,16,19,20,21,22,23,24,25,28,29,30,31,32,33,34,35\n    psettings:\n      name: '&8Personal Guild Settings'\n      slot: 36\n    finder:\n      name: '&8Guild Finder'\n      slot: 54\n      guilds-slots: 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35\n    permissions:\n      name: '&8Permission Menu'\n      slot: 45\n      rank-slots: 10,11,12,13,14,15\n      rank-items: EMERALD-0,DIAMOND-0,GOLD_INGOT-0,IRON_INGOT-0,REDSTONE-0,INK_SACK-3\n    rank:\n      name: '&8Rank Menu'\n      slot: 54\n    rank-delete:\n      name: '&8Delete Rank Menu'\n      slot: 27\n"})})]})}function d(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>s,x:()=>l});var t=i(6540);const o={},a=t.createContext(o);function s(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);