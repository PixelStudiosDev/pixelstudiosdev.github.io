---
sidebar_position: 2
title: Leveling System
---

## How does the rewards system work?

In this section, we will explain how to configure the rewards system in the plugin. <br/>

It includes:

- Maximum guild name and TAG length
- Guild name and TAG allowed characters
- Guild TAG colors
- Guild Maximum members
- Coins and experience multipliers

:::info
Read all the information carefully, as it will help you understand how to configure the rewards system. <br/>
One of the most common mistakes is regarding the TAG colors functionality. <br/>
:::

## How does it work?

In the main `config.yml` file, you can find many options to configure, which usually are
the **default values** for the rewards system. <br/>

Some examples are:

- Maximum guild members: 125
- Default guild TAG length: 6

In the `levels.yml` file, you can find the **level rewards**, which are the rewards you will receive when you level
up. <br/>
Each reward, based on its type, will be applied to the guild, for example increasing the maximum guild members or
changing the guild TAG allowed colors. <br/>

Taking a look at the `levels.yml` file, you can easily understand how the rewards system works. <br/>

Here is an example:

```yaml title="levels.yml"
  level-1:
    xp-requirement: 11000
    rewards:
      - double-xp:1

  level-3:
    xp-requirement: 13000
    rewards:
      - double-coins:1

  level-5:
    xp-requirement: 15000
    rewards:
      - double-xp:4
      - tag:GRAY

  level-50:
    xp-requirement: 20000
    rewards:
      - tag-length:7
```

We can see that:

- Level 1 gives you a double exp multiplier of 1%.
- Level 3 gives you a double coins multiplier of 1%.
- Level 5 gives you a double exp multiplier of 4% and the `GRAY` TAG color.
- Level 50 gives you a maximum TAG length of 7 characters.

Since by default the max tag length is 6 chars, when you reach level 50, you will be able to set a TAG of 7
characters. <br/>
The same applies to all the other **configurable rewards**.

## Configurable reward types

| Type         | Description              | Accepted Values         | Example           |
|--------------|--------------------------|-------------------------|-------------------|
| double-coins | Double coins probability | 1 to 100                | doubles-coins:34  | 
| double-xp    | Double xp probability    | 1 to 100                | double-xp:10      |
| tag          | Guild TAG color          | Tag ID from main config | tag:RED           |
| tag-length   | Guild TAG length         | N > 0                   | tag-length:7      |
| chars        | Guild name/TAG chars     | Any characters          | chars:!,@,#,$,%,^ |
| max-members  | Guild maximum members    | N > 0                   | max-members:100   |

## How to configure the level settings

:::note
To set default values for all levels, you can set them in the `level-1` section. <br/>
:::

Each level has:

- `xp-requirement`: The amount of experience required to unlock the level, which resets when the player
  levels up.
- `rewards`: The rewards given when the player levels up.

## Guild TAG colors

#### We want to make sure you understand how the guild TAG colors work.

Using the leveling system, as any other reward, you have to reach levels to unlock rewards. <br/>
Until you reach the first tag reward, you will **not be able** to set a TAG color. <br/>

Check the `config.yml` file to see the TAG colors available (`guild-tag` section). <br/>

The plugin sets, in some special cases, a gray TAG color for the guild. <br/>

## Example

Imagine you want to set these rewards and configurations:

- Xp requirement of 2000 for each level.
- Tag Length of **7 characters** at level 5, of **9** at level 10, and of **12** at level 20.
- A maximum of **200 members** at level 10.
- A `YELLOW` TAG color at level 5, a `DARK_RED` at level 8, and a `DARK_AQUA` at level 20.
- Give **$ and &** characters to the guild TAG at level 5, and **@ and #** at level 10.

```yaml title="levels.yml"
levels:
  level-5:
    xp-requirement: 2000
    rewards:
      - tag:YELLOW
      - tag-length:7
      - chars:$,&

  level-8:
    xp-requirement: 2000
    rewards:
      - tag:DARK_RED

  level-10:
    xp-requirement: 2000
    rewards:
      - max-members:200
      - tag-length:9
      - chars:@,#

  level-20:
    xp-requirement: 2000
    rewards:
      - tag:DARK_AQUA
      - tag-length:12
```

## What happens if a disable the leveling system?

You can disable the leveling system from the `config.yml` file. Check the [configuration guide](/guilds/configuration/main-config) for more information. <br/>
You have to restart the server to apply the changes. <br/>

When you disable the leveling system:
- No experience will be given to the guild. (Neither from the API nor from the hooks)
- No levels will be given to the guild.
- No levels will be loaded from the `levels.yml` file except the `level-1` section.
- The progress bar will not be loaded.