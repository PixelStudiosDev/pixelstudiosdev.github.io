---
sidebar_position: 3
title: Quest System
---

## How does the quest system work?

The quest system is a feature which simply gives a certain amount of XP to the guild 
when the guild reaches a certain amount of completed quests. <br/> 

The quests must be completed within a certain time limit, which is set in the configuration file, 
and that is reset every week at a specified time. <br/>

## How do players complete quests?

Players can complete quests in these ways:
- Using the `Guilds-Task` add-on, which allows creating quests and increasing the quest progress
- Creating quests using the Guilds API

We recommend using the `Guilds-Task` add-on, as it is easier to use and has a lot of features. <br/>
It supports default and custom tasks, custom rewards and conditions. <br/>

## How to configure the quest system

Here we can see how does it work in the practice. <br/>

```yaml title="quests.yml"
quests:
  settings:
    reset-day: 6
    reset-time: 02:00:00
    reset-format: '{hours}hours, {minutes}minutes'
    tiers:
    - 25:50000
    - 100:50000
    - 500:50000
    - 1500:50000
    tier-format: '&7Tier {quest_tier}: &6{quest_progress}&7/{quest_required}'
```

The `reset-day` and `reset-time` are the day and time when the quests will be reset. <br/>
The `reset-format` is the format of the reset message. <br/>

The `tiers` is the list of tiers and the amount of the required completed quests to unlock the tier and
the amount of XP that will be given to the guild when the tier is completed. <br/>

For example when completing 25 quests the guild will get 50.000 XP. <br/>

Finally, the `tier-format` is the format of the tier message. <br/>