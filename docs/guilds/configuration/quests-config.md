---
sidebar_position: 5
---

# Quests Config

## File location

The main configuration file is located in `plugins/Guilds/quests.yml`.

## Editing the file

Here you can find all the information regarding the configuration of the file:

```yaml title="levels.yml"
quests:
  
  #Quests Settings
  settings:
    
    #Reset day of the week
    #List: Sunday = 1, Monday = 2, Tuesday = 3, Wednesday = 4, Thursday = 5, Friday = 6, Saturday = 7
    reset-day: 6
    
    #Reset time of the day
    #Format: HH:mm:ss
    reset-time: '02:00:00'
    
    #Quests reset format
    reset-format: '{hours}hours, {minutes}minutes'
    
    #Quests tiers based on guilds experience
    #Format: 'required:reward'
    tiers:
      - 25:50000
      - 100:50000
      - 500:50000
      - 1500:50000
    
    #Tier format
    #You can user internal quests placeholders
    tier-format: '&7Tier {quest_tier}: &6{quest_progress}&7/{quest_required}'

```