# Levels Config

## File location

The main configuration file is located in `plugins/Guilds/levels.yml`.

## Editing the file

Here you can find all the information regarding the configuration of the file:

```yaml title="levels.yml"
# Guilds v1.1.3 made by [itz_leoo].
# Dependencies: [].
# SoftDependencies: [BedWars1058, BedWarsProxy, PlaceholderAPI, Vault].
# Join my discord for support: https://discord.gg/dtwanz4GQg

levels:

  #Level Settings
  level-1:
    #Required experience to unlock the level
    xp-requirement: 11000
    
    #Given rewards after unlocking the new level
    #Reward types:
    #Double coins -> double-coins:amount
    #Double experience -> double-xp:amount
    #Guild TAG -> tag:tagValue  (see: config.yml -> guilds.settings.guild-tag.tag)
    #Guild name/tag chars -> chars:char1,char2, ...
    rewards:
    - double-xp:1
    - chars:&
    
  #Other levels above  
```