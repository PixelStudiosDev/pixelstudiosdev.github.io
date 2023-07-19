# Main Config

## File location

The main configuration file is located in `plugins/Guilds/config.yml`.

## Editing the file

Here you can find all the information regarding the configuration of the file:

```yaml title="config.yml"
# Guilds v1.1.3 made by [itz_leoo].
# Dependencies: [].
# SoftDependencies: [BedWars1058, BedWarsProxy, PlaceholderAPI, Vault].
# Join my discord for support: https://discord.gg/dtwanz4GQg

#database settings
mysql:
  #Set to:
  #false -> SQLite
  #true -> MySQL
  enabled: false
  host: localhost
  port: 3306
  name: guilds
  username: root
  password: ''
  ssl: true

guilds:
  settings:
    #Bungeecord settings
    bungeecord:
      #True if you are running the plugin on multiple servers
      enabled: false
      #Refresh rate in seconds of data between servers
      refresh: 10

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
      #By default: alphabet letters, numbers and these chars ✧ ✪ ✖ ✓ ✿ ✌ ❤
      #Don't modify it unless you know how it works
      chars: ^[a-zA-Z0-9✧✪✖✓✿✌❤]*$

    guild-tag:
      #Tag colors of guild tag based on level
      #Colors: GRAY, DARK_AQUA, DARK_GREEN, YELLOW, ORANGE, DARK_RED, RED, GREEN, AQUA, DARK_BLUE, BLUE, LIGHT_PURPLE, DARK_PURPLE, WHITE, DARK_GRAY, BLACK
      #Format: minLevel-maxLevel:&colorNumber-colorValue:&colorNumber-colorDisplayName
      tag:
        - 0-14:&7-GRAY:&7-Gray
        - 15-24:&3-DARK_AQUA:&3-Dark Acqua
        - 25-44:&2-DARK_GREEN:&2-Dark Green
        - 45-other:&e-YELLOW:&e-Yellow

    guild-level:
      #Xp requirements based on level
      #Format: minLevel-maxLevel:xpAmount
      xp-requirements:
        - 0-0:10000
        - 1-1:11000
        - 2-2:12000
        - 3-3:13000
        - 4-4:14000
        - 5-49:15000
        - 50-other:20000

      #Command executed on these events
      #The events are based on the hook plugins
      kill-reward: guild addxp {guild} 10
      final-kill-reward: guild addxp {guild} 20
      bed-destroy-reward: guild addxp {guild} 15
      win-reward: guild addxp {guild} 200

    boosters:
      #Probability of playing a game with double xp
      #Format: minLevel-maxLevel:probability
      double-xp-start-probability:
        - 0-1:1
        - 2-3:2
        - 4-4:3
        - 5-6:4
        - 7-7:5
        - 8-9:6
        - 10-10:7
        - 11-12:8
        - 13-13:9
        - 14-15:10
        - 16-16:12
        - 17-18:12
        - 19-19:13
        - 20-other:14
        
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
      
  permissions:
    #Permission for creating a guild
    create: guilds.create

    #Permission for getting access to admin features
    admin: guilds.admin
```