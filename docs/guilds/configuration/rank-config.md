# Ranks Config

## File location

The main configuration file is located in `plugins/Guilds/ranks.yml`.

## Editing the file

Here you can find all the information regarding the configuration of the file:

```yaml title="ranks.yml"
# Guilds v1.2.0-BETA-4 made by [itz_leoo].
# Dependencies: [].
# SoftDependencies: [BedWars1058, BedWarsProxy, PlaceholderAPI, Vault].
# Read the wiki for more info: https://wiki.pixelstudios.dev/guilds
# Join my discord for support: https://pixelstudios.dev/discord

guilds:
  #Settings of default ranks (on guild create)
  ranks:
    #Rank name
    master:
      #Rank display name
      displayName: Guild Master

      #Rank permissions
      #Set [ ] for any permissions
      #Permissions: modify-name, modify-motd, modify-tag, change-ranks, finder-options, officer-chat, kick, mute, invite, log, stats, party, settings, change-discord
      permissions:
        - modify-name
        - modify-motd
        - modify-tag
        - change-ranks
        - finder-options
        - officer-chat
        - kick
        - mute
        - invite
        - log
        - stats
        - party
        - settings
        - change-discord

      #Rank priority (min 0)
      priority: 6
      
      #Is default?
      default: false
      
      #Is master?
      master: true
    
    #other ranks...
```