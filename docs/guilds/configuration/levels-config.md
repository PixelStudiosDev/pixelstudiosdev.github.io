---
sidebar_position: 4
title: Levels Config
---

## File location

The main configuration file is located in `plugins/Guilds/levels.yml`.

## Editing the file

Here you can find all the information regarding the configuration of the file:

It is recommended to read all the details of the [leveling system](/guilds/features/leveling).

Except for the level's xp and rewards customization, there are a few other things you can configure in the file. <br/>

```yaml title="levels.yml"
total-levels: 100
levels:
  other:
    xp-requirement: 20000
```

The `total-levels` option allows you to set the maximum level of the guild, avoiding issues trying to change the levels. <br/>
The `other` section allows you to set the xp requirement for levels that are not defined in the file. If you have set only the first 20 levels, after the 20th level the 
xp requirement will be the one defined in the `other` section. <br/>