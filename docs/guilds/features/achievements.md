---
sidebar_position: 5
title: Achievements
---

## How is it structured?

Achievements are based on the task type and the tiers. <br/>

Each task will analyze a specific aspect of the guild, such as the guild level or the number
of online members. <br/>

It will return a **numeric value** that will be used to determine the tier of the achievement. <br/>

## Important note

The plugin stores the progress of the achievements in the database, 
so **once the guild has reached a specific tier**, **it will not lose it** even if the condition is not met anymore. <br/>

Example:
- Tier 2 of guild members task: If the guild loses members, it will keep the tier.

## Practical example

We are going to analyze the configuration of the achievements. <br/>

```yaml title="achievements.yml"
achievements:
  prestige:
    type: GUILD_LEVEL
    displayName: Prestige
    description:
    - Reach Guild level {requirement}
    item:
      material: EMERALD
    tiers:
      '1':
        requirement: 5
      '2':
        requirement: 10
      '3':
        requirement: 20
```

In this example, we have an achievement called **Prestige**. <br/>
The type of the achievement is **GUILD_LEVEL**, which returns the guild level. <br/>

We have got other information, such as the display name or the item, which are not important for 
understanding the functionality. <br/>

The tiers are defined as follows: <br/>
- The first tier is **1** and the requirement is **5**. <br/>
- The second tier is **2** and the requirement is **10**. <br/>
- The third tier is **3** and the requirement is **20**. <br/>

If the guild has level **6**, the achievement tier will be **1**. <br/>
If the guild has level **12**, the achievement tier will be **2**. <br/>