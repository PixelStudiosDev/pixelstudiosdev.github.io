---
sidebar_position: 4
---

# Levels Config

## File location

The main configuration file is located in `plugins/Guilds/levels.yml`.

## Editing the file

Here you can find all the information regarding the configuration of the file:

:::info
By default only some TAG colors are set in the levels rewards. <br/>
To add more TAG colors, you need to add them in the levels rewards section.

For example to add the `DARK_RED` (that by default is not available) you have to set it in the `rewards` section of a level. <br/>
So you should add `- tag:DARK_RED` in the rewards section of a level. <br/>
You can check the 5th level that by default has the `GRAY` TAG color.
:::

<br/>

:::info
To set default level rewards use the first level (level-1).
:::

:::note
The example above can be followed for all the other reward types.
:::

<br/>

```yaml title="levels.yml"
levels:

  #Level Settings
  level-1:
    #Required experience to unlock the level
    xp-requirement: 11000
    
    #Given rewards after unlocking the new level
    #Reward types:
    #Double coins -> double-coins:amount
    #Double experience -> double-xp:amount
    #Guild TAG -> tag:tag_id  (see: config.yml -> guilds.settings.guild-tag.tag)
    #Guild name/tag chars -> chars:char1,char2, ...
    #Guild max members  -> max-members:amount 
    rewards:
    - double-xp:1
    - double-coins:5
    - tag:GRAY
    - tag-length:7
    - chars:✧,✪,✖,✓
    - max-members:20
    
  #Other levels above  
```