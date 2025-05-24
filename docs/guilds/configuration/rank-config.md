---
sidebar_position: 3
title: Ranks Config
---

## File location

The main configuration file is located in `plugins/Guilds/ranks.yml`.

## Editing the file

These are the default ranks of a guild, which are set when the guild is created. <br/>

We will see the configuration of a rank, the operation can be done with all the ranks. <br/>

```yaml title="ranks.yml"
guilds:
  
  ranks:
    
    #Rank name/id
    master:
      
      #Rank display name
      displayName: Guild Master

      #Rank permissions
      #Set [ ] for no permissions
      permissions:
        - modify-name
        - modify-motd
        - modify-tag
        - change-ranks

      #Rank priority
      priority: 6
      
      #Is default?
      default: false
      
      #Is master?
      master: true
```



The `rank name/id` is the name of the rank, which will be used in the commands. <br/>
The `display name` is the name that will be shown in the guild. <br/>

The `permissions` are the permissions that the rank will have. Here is a [complete list](/guilds/useful#rank-permissions-list) of the available permissions. <br/>

The `priority` is the priority of the rank, used in the `/guild members` command. <br/> 

<br/>

:::warning
Avoid setting `master` to true in more than one rank, as it could cause issues with the guild. <br/>
The same applies to the `default` option.
:::
The `default` option is used to set the rank as default, which means that all new members will have this rank. <br/>

The `master` option is used to set the rank as master, which means that only one member can have this rank. <br/>
