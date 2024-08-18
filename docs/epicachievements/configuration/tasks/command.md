# Command Task

This task triggers when a player executes a command. <br/>
The in-game editor doesn't allow you to set all the necessary properties, so editing the configurations manually is highly recommended.

:::warning
These achievements are limited to only **1** tier.
:::

It's necessary to set the `command` property. [RegEx](https://regex101.com/) is supported.

Example configuration:

```yaml title="achievements/survival/achievements.yml"
mayor:
  type: COMMAND
  # Matches any town name  
  command: "^town create .+$"  
  name: "Mayor"
  description:
    - "&fCreate your own town!"
  tiers:
    1:
      required-amount: 1
      points: 10
```