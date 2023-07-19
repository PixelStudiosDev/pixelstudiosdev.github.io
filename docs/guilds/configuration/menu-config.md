# Menu Config

## File location

The menu configuration file is located in `plugins/Guilds/menu.yml`.

## Editing the file

Here you can find all the information regarding the configuration of the file:

```yaml title="menu.yml"
# Guilds v1.1.3 made by [itz_leoo].
# Dependencies: [].
# SoftDependencies: [BedWars1058, BedWarsProxy, PlaceholderAPI, Vault].
# Join my discord for support: https://discord.gg/dtwanz4GQg

guilds:
  
  #Settings of each menu
  #name -> Gui name
  #slot -> Gui slots
  #(optional) ...-slots -> slot used for variable gui items
  inventory:
    home:
      name: '&8Guild'
      slot: 45
      players-slots: 27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,42,43,44
    home-no-guild:
      name: '&8Guild'
      slot: 27
    gsettings:
      name: '&8Guild Settings'
      slot: 36
      status:
        'on': '&aON'
        'off': '&cOFF'
    tag-color:
      name: '&8Guild Tag Color'
      slot: 36
      tag-slots: 10,11,12,13,14,15,16,19,20,21,22,23,24,25
    games:
      name: '&8Select Guild Games'
      slot: 36
      game-slots: 10,11,12,13,14,15,16,19,20,21,22,23,24,25,28,29,30,31,32,33,34,35
    psettings:
      name: '&8Personal Guild Settings'
      slot: 36
    finder:
      name: '&8Guild Finder'
      slot: 54
      guilds-slots: 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35
    permissions:
      name: '&8Permission Menu'
      slot: 45
      rank-slots: 10,11,12,13,14,15
      rank-items: EMERALD-0,DIAMOND-0,GOLD_INGOT-0,IRON_INGOT-0,REDSTONE-0,INK_SACK-3
    rank:
      name: '&8Rank Menu'
      slot: 54
    rank-delete:
      name: '&8Delete Rank Menu'
      slot: 27
      
  menu:
    #Item menu name
    home:
      #Example of gui item
      invite-player:
        #Gui Slot
        slot: 0
        
        #Item material
        material: BOOK
        
        #Item name
        name: '&aInvite Player'
        
        #Item lore
        lore:
          - '&7Click here to invite a player to'
          - '&7your Guild.'
            
        #Item data
        data: 0
        
        #Enchanted: false or true
        enchanted: false
        
        #Command on click:
        #if "default-action" -> default plugin action
        #else command set
        command: default-action
```