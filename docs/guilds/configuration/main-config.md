---
sidebar_position: 1
---

# Main Config

## File location

The main configuration file is located in `plugins/Guilds/config.yml`.

## Editing the file

Here you can find all the information regarding the configuration of the file:

```yaml title="config.yml"
# Guilds v1.2.0-BETA-4 made by [itz_leoo].
# Dependencies: [].
# SoftDependencies: [BedWars1058, BedWarsProxy, PlaceholderAPI, Vault].
# Read the wiki for more info: https://wiki.pixelstudios.dev/guilds
# Join my discord for support: https://pixelstudios.dev/discord

#Database settings
mysql:
  # Database type: mysql, sqlite, mongodb
  type: mongodb
  host: localhost
  port: 3306
  name: guilds
  username: root
  password: ''
  ssl: true

#Redis settings
#You can leave empty username/password if you don't have it
redis:
  host: localhost
  port: 6379
  username: ''
  password: ''

guilds:
  settings:
    #Bungeecord settings
    bungeecord:
      #True if you are running the plugin on multiple servers
      enabled: false
      #Refresh rate in seconds of data between servers
      refresh: 10
      #Delay in milli seconds from the player's join in the server and the sending of the join message
      join-delay: 50

    #True for printing in console of the plugin database actions and other things    
    debug: false

    guild-players:
      #Max members in a guild
      max-members: 125

      #Symbol shown in members list message
      online-offline-symbol: ●

    guild-name:
      #Max characters allowed in a guild name 
      max-name-length: 10

      #Allow characters in the guild name
      #It's a regex pattern, don't modify it unless you know how it works
      #By default: alphabet letters, numbers and these chars ✧ ✪ ✖ ✓ ✿ ✌ ❤
      chars: ^[a-zA-Z0-9✧✪✖✓✿✌❤]*$

    guild-tag:
      #Tag Placeholder format
      #You can use internal placeholders
      format: '{tag_color}[{tag}]'
      
      #True to make uppercase all Guilds Tag
      #Example: [tag] -> [TAG]
      uppercase: false
      
      #Default max Guild Tag Length
      default-max-length: 6

      #Tag colors of guild tag based on level
      #Colors: GRAY, DARK_AQUA, DARK_GREEN, YELLOW, ORANGE, DARK_RED, RED, GREEN, AQUA, DARK_BLUE, BLUE, LIGHT_PURPLE, DARK_PURPLE, WHITE, DARK_GRAY, BLACK
      #Format: colorValue:&colorNumber:colorDisplayName
      tag:
        - GRAY:&7:Gray
        - DARK_AQUA:&3:Dark Acqua
        - DARK_GREEN:&2:Dark Green
        - YELLOW:&e:Yellow
        - 45-other:&e-YELLOW:&e-Yellow

    guild-rank-tag:
      #Guild's Rank Tag Format
      #You can use internal placeholders
      format: '{rankTagColor}[{rankTag}]'

    guild-level:
      #Command executed on these events
      #The events are based on the hook plugins
      kill-reward: guild addxp {guild} 10
      final-kill-reward: guild addxp {guild} 20
      bed-destroy-reward: guild addxp {guild} 15
      win-reward: guild addxp {guild} 200
        
    progress-bar:
      #Bar character
      char: '|'

      #Bar characters count
      chars-count: 40
      
      #Bar character unlocked color
      locked-color: '&7'

      #Bar character locked color
      unlocked-color: '&6'
      
    guild-time:
      #Guild time format
      #Check https://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html
      format: yyyy-MM-dd HH:mm z
      
    guild-invite:
      #Time of guild invite expire in minutes
      time-in-minutes: 1
      
    guild-party:
      #Command executed on /guild party command
      party-command: party invite {player}
      
    guild-chat:
      #Chat cooldown time
      mute-time: 10

      #Player with guilds admin permission can see all guilds chat messages
      admin-spy:
        #Enable admin spy
        enabled: true
      
  permissions:
    #Permission for creating a guild
    create: guilds.create

    #Permission for joining a guild
    join: ''

    #Permission for getting access to admin features
    admin: guilds.admin

    #Permission to receive the orange guild tag
    orange-tag: guilds.mvp++
```