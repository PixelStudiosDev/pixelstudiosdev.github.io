---
sidebar_position: 4
---

# Levels Config

## File location

The main configuration file is located in `plugins/Guilds/levels.yml`.

## Editing the file

Here you can find all the information regarding the configuration of the file:

:::info
By default, only a few TAG colors are set in the level rewards. <br/>
If you want to use other TAG colors, you need to manually add them to the `rewards` section of a level.

For example, the `DARK_RED` TAG is not available by default.  <br/>
To enable it, add `- tag:DARK_RED` to the `rewards` section of a level. <br/>
You can check level 5, which by default includes the `GRAY` TAG color as an example.
:::

<br/>

:::info
To define default rewards for all levels, use the `rewards` section of `level-1`.
:::

:::note
The same logic applies to **all other reward** types, not just TAG colors.

In practice:

- if you're using the leveling system -> you should add the desired TAG colors either in **each level’s rewards**
- otherwise, you can add them to the `level-1` rewards section, and they will be applied to all levels.
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