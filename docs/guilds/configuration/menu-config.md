# Menu Config

## File location

The menu configuration file is located in `plugins/Guilds/menu.yml`.

## Gui Item Configuration

Here you can find all the information regarding a gui item configuration:

```yaml title="example.yml"

items:

  #A custom gui item
  test-item:

    #Item Material
    #Formats: MATERIAL  /  MATERIAL:DATA  /  texure:skin-texture
    #Examples: WOOL (white)  /  WOOL:14 (red)  /  texture:4d1ebd794085e0648159e8f8fd504bdb5ccd26fd32a6a5ab2d669031931064b5
    material: WOOL:14

    #Item Amount
    amount: 1

    #True to make enchanted the item
    enchanted: false

    #Gui Slot
    #From 0 to Gui Slots - 1
    #Example: Gui Slots 27 --> min: 0  -  max: 26
    slot: 0

    #Item Name
    name: '&aInvite Player'

    #Item Lore
    lore:
      - '&7Click here to invite a player to'
      - '&7your Guild.'

    #Command on click
    #Action types:

    #Remove the string to execute the plugin's default action

    #Chat Message -> [chat] value
    #Player Command -> [player] command without slash
    #Console Message -> [console] command without slash
    #Server Connection -> [server] bungee/velocity server name
    #No action -> [no-action]

    #Examples:
    #[chat] hello world
    #[player] gamemode creative
    #[console] give {player} diamond
    #[server] lobby-2
    #[no-action]
    
    command: '[player] gamemode creative'
```

## Editing the file

Here you can find all the information regarding the configuration of the file:

```yaml title="menu.yml"
# Guilds v1.2.0-BETA-4 made by [itz_leoo].
# Dependencies: [].
# SoftDependencies: [BedWars1058, BedWarsProxy, PlaceholderAPI, Vault].
# Read the wiki for more info: https://wiki.pixelstudios.dev/guilds
# Join my discord for support: https://pixelstudios.dev/discord

guilds:
  
  #Settings of each gui
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
```