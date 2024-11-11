---
sidebar_position: 7
---

# Rewards Config

## File location

The main configuration file is located in `plugins/Guilds/rewards.yml`.

## Editing the file

Here you can find all the information regarding the configuration of the file:

```yaml title="rewards.yml"
tags:

  # The ID are used to identify the rewards
  red:

    # The TAG color of the reward
    color: RED

    # The display name of the reward
    display-name: '&cRed'

    # The conditions to get the reward
    # Format: <TYPE>:<VALUE>
    #
    # Below are the available conditions
    conditions:
      - RANK:MASTER
      - MC_PERMISSION:guilds.mvp++

  blue:
    color: BLUE
    display-name: '&1Blue'
    conditions:
      - RANK:admin
      - MC_PERMISSION:guilds.mvp++
```

## Conditions

The conditions are used to check if the player can get the reward. The format is `<TYPE>:<VALUE>`. 
Here are the current available conditions:

Other conditions can be added in the future.
It's possible to request a new condition by joining our [Discord](https://pixelstudios.dev/discord).


| Condition ID  | Description                  | Example                  |
|---------------|------------------------------|--------------------------|
| RANK          | Guild rank                   | MASTER / DEFAULT / admin |
| MC_PERMISSION | Minecraft default permission | guilds.mvp++             |