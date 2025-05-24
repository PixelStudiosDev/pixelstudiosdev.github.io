---
sidebar_position: 1
title: Main Config
---

## File location

The main configuration file is located in `plugins/Guilds/config.yml`.

## Editing the file

Here you can find all the information regarding the configuration of the file:

```yaml title="config.yml"
# Guilds v2.0.0-BETA made by [itz_leoo].
# Dependencies: [PixelLibs].
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

  # SQL driver class (leave empty for default)
  driver-class: ''

  # MongoDB URI (leave empty for using credentials)
  mongo-uri: mongodb://localhost:27017

  # SQL table names
  tables:
    guilds: guilds
    players: players
    ranks: ranks

#Redis settings
#You can leave empty username/password if you don't have it
redis:
  host: localhost
  port: 6379
  username: ''
  password: ''

guilds:

  #Plugin update checker
  update-checker: true

  settings:
    #Bungeecord settings
    bungeecord:
      #True if you are running the plugin on multiple servers
      enabled: false
      #Refresh rate in seconds of data between servers
      refresh: 10
      #Delay in milliseconds from the player's join in the server and the sending of the join message
      join-delay: 50

    #True for printing in console of the plugin database actions and other things    
    debug: false

    guild-players:
      #Max members in a guild
      max-members: 125

      #Online and offline players settings
      online:
        #Symbol of the player status
        symbol: ●

        #Color of the player status
        color: '&a'

      offline:
        symbol: ●
        color: '&c'

      #Guild player format (used in various places)
      format: '%vault_prefix%{playerName}'

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
      
      #Disable color system
      disable-color-system: false

      #Tag colors of guild tag based on level
      #Format: color_id:color_display_name
      tag:
        - NONE:None
        - GRAY:Gray
        - DARK_AQUA:Dark Aqua
        - DARK_GREEN:Dark Green
        - YELLOW:Yellow
        # other colors...  

      #Orange tag display name  
      orange-tag: Orange

    guild-rank-tag:
      #Guild's Rank Tag Format
      #You can use internal placeholders
      format: '{rankTagColor}[{rankTag}]'

    guild-level:

      # Choose to enable or disable the guild level system
      enabled: true

      #Command executed on these events
      #The events are based on the hook plugins
      kill-reward: guild addxp {guildName} 10
      final-kill-reward: guild addxp {guildName} 20
      bed-destroy-reward: guild addxp {guildName} 15
      win-reward: guild addxp {guildName} 200

    guild-finder:
      sorting:

        #Symbols shown in guild finder menu
        symbol:
          selected: '&a➠'
          not-selected: '&7 '

        #Size filters in guild finder menu
        #Format: min-max (min and max are included)
        #If only one number is provided, it will be considered as the minimum
        sizes:
          - 1-20
          - 21-50
          - 51-80
          - '81'

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

    guild-kick:

      #Set to true to require a reason for kicking a player from the guild
      require-reason: true

  # Commands settings
  commands:

    # Command: /guild
    guild:

      # Aliases for /guild command
      aliases:
        - guilds
        - g
        - clan
        - c
        - clans

      # Sub-command /guild achievements    
      achievements:

        # Aliases for /guild achievements sub-command
        aliases:
          - achievementmenu
          
        # Disable the sub command
        disabled: true

        # Require confirmation
        confirm: true

    # other commands...        
    
    guildadmin:
      aliases:
        - gadmin
        - guildsadmin

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