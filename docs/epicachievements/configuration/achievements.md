---
sidebar_position: 1
---

# Achievements

:::info
There are two types of achievements:
- `CHALLENGE` - Single tier
- `TIERED` - Multiple tiers

The type is automatically determined by the number of tiers.
:::

### Interactive setup

The easiest way to create and edit achievements is by using the in-game editor. <br/>
You can access it by typing `/achievements editor`.

### Manually editing configurations

If you're a more advanced user, you can manually edit the achievements' configurations.

:::note
Achievements are located in the `plugins/EpicAchievements/achievements/<category>` folder. <br/>
You can have as many achievement files as you want in a category. <br/>
By default, the in-game editor will create new achievements in a file named `achievements.yml` if none exists.
:::

Below is an example of an achievement configuration:

```yaml title="achievements/survival/achievements.yml"
# Unique identifier. Don't modify it or players will lose their progress!
builder: 
  # The type of task: See https://wiki.pixelstudios.dev/epicachievements/configuration/tasks
  type: PLACE
  # The name used in messages and menus
  name: "Builder"
  # The description of the achievement
  description:
    - "&fPlace blocks."
  # (Optional) Permission required to progress in the achievement
  # permission: achievements.builder

  # Conditions: See https://wiki.pixelstudios.dev/epicachievements/configuration/conditions
  blocks:
    - STONE_BRICKS
    - BRICKS
  worlds:
    - world
    - resource_world
  game-modes:
    - SURVIVAL
      
  # A list of tiers. There must be at least one tier
  tiers:
    1:
      # Progress required to complete the tier
      required-amount: 10
      # Points awarded when completing the tier
      points: 25
      # A list of rewards. See https://wiki.pixelstudios.dev/epicachievements/configuration/rewards
      # Format: REWARD_TYPE:VALUE
      rewards:
        - "VAULT:100"
        - "COMMAND:say {player} has completed the Builder achievement!"
    # Other tiers can be added below
```