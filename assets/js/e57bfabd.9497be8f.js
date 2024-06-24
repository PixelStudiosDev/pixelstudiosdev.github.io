"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6519],{7719:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>a,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var d=s(4848),r=s(8453);const n={title:"Item Format",slug:"/item-format"},i=void 0,c={id:"useful-stuff/item-format",title:"Item Format",description:"Follow the format below to configure an item in config files.",source:"@site/docs/useful-stuff/item-format.md",sourceDirName:"useful-stuff",slug:"/item-format",permalink:"/item-format",draft:!1,unlisted:!1,editUrl:"https://github.com/PixelStudiosDev/pixelstudiosdev.github.io/edit/master/docs/useful-stuff/item-format.md",tags:[],version:"current",lastUpdatedAt:1719233455e3,frontMatter:{title:"Item Format",slug:"/item-format"},sidebar:"usefulstuff"},o={},l=[{value:"Example Configuration",id:"example-configuration",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.p,{children:["Follow the format below to configure an item in config files.",(0,d.jsx)("br",{})]}),"\n",(0,d.jsx)(t.admonition,{type:"tip",children:(0,d.jsxs)(t.p,{children:["Display names and lores support legacy (e.g. ",(0,d.jsx)(t.code,{children:"&c"}),") and hex (e.g. ",(0,d.jsx)(t.code,{children:"#ff0000"}),") color formats."]})}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Property"}),(0,d.jsx)(t.th,{children:"Description"}),(0,d.jsx)(t.th,{children:"Examples"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"material"})}),(0,d.jsxs)(t.td,{children:["Sets the material of the item",(0,d.jsx)("br",{}),"Supports custom heads,",(0,d.jsx)("br",{}),(0,d.jsx)(t.a,{href:"https://www.spigotmc.org/resources/73355/",children:"ItemsAdder"}),", ",(0,d.jsx)(t.a,{href:"https://www.spigotmc.org/resources/72448/",children:"Oraxen"})," and ",(0,d.jsx)(t.a,{href:"https://www.spigotmc.org/resources/39267/",children:"MMOItems"})]}),(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:"<material>"}),(0,d.jsx)("br",{}),(0,d.jsx)(t.code,{children:"texture:<value>"}),(0,d.jsx)("br",{}),(0,d.jsx)(t.code,{children:"itemsadder:<namespace>:<id>"}),(0,d.jsx)("br",{}),(0,d.jsx)(t.code,{children:"ia:<namespace>:<id>"}),(0,d.jsx)("br",{}),(0,d.jsx)(t.code,{children:"oraxen:<id>"})," ",(0,d.jsx)(t.code,{children:"oxn:<id>"}),(0,d.jsx)("br",{}),(0,d.jsx)(t.code,{children:"mmoitems:<type>:<id>"})]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"name"})}),(0,d.jsx)(t.td,{children:"Sets the display name of the item"}),(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:"&e&lExample"}),(0,d.jsx)("br",{}),(0,d.jsx)(t.code,{children:"#ffff00Example"})]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"lore"})}),(0,d.jsx)(t.td,{children:"Sets the lore of the item"}),(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:'- "&dFirst Line"'}),(0,d.jsx)("br",{}),(0,d.jsx)(t.code,{children:'- "&dSecond Line"'})]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"glow"})}),(0,d.jsx)(t.td,{children:"Adds a glowing effect to the item"}),(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:"true"})," ",(0,d.jsx)(t.code,{children:"false"})]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"texture"})}),(0,d.jsx)(t.td,{children:"Sets the texture of a player head"}),(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:"<uuid>"})," ",(0,d.jsx)(t.code,{children:"<username>"})," ",(0,d.jsx)(t.code,{children:"<base64-value>"}),(0,d.jsx)("br",{}),(0,d.jsx)(t.code,{children:"https://textures.minecraft.net/<hash>"})]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"amount"})}),(0,d.jsx)(t.td,{children:"Sets the amount of the item"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"<number>"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"custom-model-data"})}),(0,d.jsx)(t.td,{children:"Sets the custom model data of the item"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"<number>"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"unbreakable"})}),(0,d.jsx)(t.td,{children:"Sets the unbreakable state of the item"}),(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:"true"})," ",(0,d.jsx)(t.code,{children:"false"})]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"durability"})}),(0,d.jsx)(t.td,{children:"Sets the durability of the item"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"<number>"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"color"})}),(0,d.jsxs)(t.td,{children:["Sets the color of the item",(0,d.jsx)("br",{}),"Supports ",(0,d.jsx)(t.a,{href:"https://hub.spigotmc.org/javadocs/spigot/org/bukkit/DyeColor.html",children:"Dye Colors"})," and RGB values"]}),(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:"<dye-color>"}),(0,d.jsx)("br",{}),(0,d.jsx)(t.code,{children:"<rr>,<gg>,<bb>"})]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"flags"})}),(0,d.jsxs)(t.td,{children:["Adds a list of ",(0,d.jsx)(t.a,{href:"https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/ItemFlag.html",children:"item flags"})," to the item"]}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"- <flag>"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"effects"})}),(0,d.jsxs)(t.td,{children:["Adds a list of ",(0,d.jsx)(t.a,{href:"https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html",children:"potion effects"})," to a potion"]}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"- <type>,[seconds],[level] "})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"enchantments"})}),(0,d.jsxs)(t.td,{children:["Adds a list of ",(0,d.jsx)(t.a,{href:"https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html",children:"enchantments"})," to the item"]}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"- <type>,[level]"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"modifiers"})}),(0,d.jsxs)(t.td,{children:["Adds a list of ",(0,d.jsx)(t.a,{href:"https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html",children:"attribute modifiers"})," to the item"]}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"- <type>,<value>,[equipment-slot]"})})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"example-configuration",children:"Example Configuration"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-yaml",children:'example-item:\n  material: DIAMOND_SWORD\n  name: "&e&lExample"\n  lore:\n    - "&dFirst Line"\n    - "&dSecond Line"\n  glow: true\n  amount: 1\n  custom-model-data: 123\n  unbreakable: true\n  flags:\n    - "HIDE_ENCHANTS"\n  enchantments:\n    - "FIRE_ASPECT,2"\n  modifiers:\n    - "GENERIC_MOVEMENT_SPEED,1"\n'})})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>c});var d=s(6540);const r={},n=d.createContext(r);function i(e){const t=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),d.createElement(n.Provider,{value:t},e.children)}}}]);