# Advancement Task

This task triggers when a player completes an advancement. <br/>
The in-game editor doesn't allow you to set all the necessary properties, so editing the configurations manually is highly recommended.

:::warning
These achievements are limited to only **1** tier.
:::

It's necessary to set the `advancement` property.

If no namespace is specified, `minecraft` will be used by default. <br/>
You can find a list of valid advancement [here](https://minecraft.fandom.com/wiki/Advancements#List_of_advancements). The ID can be found in the `Resource location` column.

Example configuration:

```yaml title="achievements/survival/achievements.yml"
birdwatcher:
  type: ADVANCEMENT
  # You can also specify a custom namespace 
  # <namespace>:<resource-location>
  advancement: "adventure/spyglass_at_parrot"
  name: "Birdwatcher"
  description:
  - "&fWatch a parrot through a spyglass!"
  tiers:
    1:
      required-amount: 1
      points: 10
```