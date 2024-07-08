# Placeholder Task

This task allows EpicAchievements to integrate with basically any other plugin that has some [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) placeholders. <br/>
The in-game editor doesn't allow you to set all the necessary properties, so editing the configurations manually is highly recommended.

## Placeholders that output integer numbers

The configuration is essentially the same as for other task types. It's necessary to set the `placeholder` property.

Example configuration:

```yaml title="achievements/survival/achievements.yml"
lumberjack:
  type: PLACEHOLDER
  placeholder: "%auraskills_foraging%"
  name: "Professional Lumberjack"
  description:
  - "&fCut down trees!"
  tiers:
    1:
      required-amount: 1
      points: 10
    2:
      required-amount: 2
      points: 15
    3:
      required-amount: 3
      points: 20
```

## Placeholders that output text

:::warning
Due to internal limitations, these achievements are limited to only **1** tier.
:::

You can use one of the operators below to test the placeholder. It's necessary to set the `placeholder` property.

| Operator                 | Description                                                             |
|--------------------------|-------------------------------------------------------------------------|
| `EQUALS`                 | Checks if the output matches the specified value.                       |
| `EQUALS_IGNORE_CASE`     | Checks if the output matches the specified value, ignoring case.        |
| `NOT_EQUALS`             | Checks if the output does not match the specified value.                |
| `NOT_EQUALS_IGNORE_CASE` | Checks if the output does not match the specified value, ignoring case. |
| `CONTAINS`               | Checks if the output contains the specified value as a substring.       |
| `STARTS_WITH`            | Checks if the output begins with the specified value.                   |
| `ENDS_WITH`              | Checks if the output ends with the specified value.                     |
| `REGEX`                  | Checks if the output matches the specified regular expression.          |

Example configuration:

```yaml title="achievements/survival/achievements.yml"
first-nap:
  type: PLACEHOLDER
  placeholder: '%player_is_sleeping%'
  name: "First Nap"
  description:
  - '&fSleep for the first time!'
  tiers:
    1:
      placeholder:
        operator: EQUALS
        value: "yes"
      points: 10
      rewards: []
```