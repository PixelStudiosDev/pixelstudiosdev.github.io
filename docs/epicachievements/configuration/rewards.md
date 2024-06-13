# Rewards

EpicAchievements offers a bunch of built-in rewards. <br/>
Below is a list of them:

:::tip
You can use the `{player}` placeholder in all rewards.
:::

| Reward              | Description                        |
|---------------------|------------------------------------|
| `BROADCAST`         | Broadcast a message to the server  |
| `COMMAND`           | Execute a console command          | 
| `EXPERIENCE_LEVELS` | Give experience levels to a player |
| `EXPERIENCE`        | Give experience points to a player |
| `MESSAGE`           | Send a message to a player         |
| `VAULT`             | Give money to a player             |

## Reward leveling system

Using the points earned by completing achievements, players can unlock rewards. <br/>
Below is an example configuration:

:::tip
You can use the `{level}` placeholder to get the current level. <br/>
Math expressions and functions are supported!
:::

```yaml title="rewards.yml"
rewards:
  # Range of levels
  1-100:
    # Points required to unlock the reward. Math expressions are supported!
    required-points: "{level} * 100"
    # A list of rewards
    rewards:
      - "VAULT:{level} * 10"
    # Item displayed when the reward is locked
    locked-item:
      material: "COAL"
      name: "&cAchievement Reward"
      lore:
        - "&8Level {level}"
        - "&7Required Points: &e{points}"
        - ""
        - "&7Reward:"
        - "{rewards}"
        - ""
        - "{status}"
    # Item displayed when the reward is unlocked
    unlocked-item:
      material: "GOLD_NUGGET"
      name: "&aAchievement Reward"
      lore:
        - "&8Level {level}"
        - "&7Required Points: &e{points}"
        - ""
        - "&7Reward:"
        - "{rewards}"
        - ""
        - "{status}"
  # Other levels can be added below
```
