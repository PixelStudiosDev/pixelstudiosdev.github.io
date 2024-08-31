---
sidebar_position: 4
---

# Conditions

Conditions are used to set requirements to progress in an achievement. <br/>
Below is a list of all the built-in conditions:

:::tip
Custom items and blocks from ItemsAdder, Oraxen and MMOItems are supported! <br/>
Discover more about it [here](../../useful-stuff/item-format.md).
:::

### Global Conditions
Supported by all types of achievements.

| Condition            | Description                                                                                                       | Examples                 |
|----------------------|-------------------------------------------------------------------------------------------------------------------|--------------------------|
| `game-modes`         | Allowed game modes                                                                                                | `- SURVIVAL`             |
| `worlds`             | Allowed worlds                                                                                                    | `- "world"`              |
| `item-in-hand`       | Requires the player to have an item in hand                                                                       | `- <material>`           |
| `item-equipped`      | Requires the player to have an item equipped                                                                      | `- <material>`           |
| `riding-entity`      | Requires the player to ride an entity                                                                             | `- ALL`<br/>`- <entity>` |
| `regions`            | A list of [WorldGuard](https://dev.bukkit.org/projects/worldguard) regions                                        | `- <region-id>`          |
| `is-sneaking`        | Requires the player to be sneaking                                                                                | `true` `false`           |
| `is-sprinting`       | Requires the player to be sprinting                                                                               | `true` `false`           |
| `is-flying`          | Requires the player to be flying                                                                                  | `true` `false`           |
| `has-open-inventory` | Checks if the player has an inventory open.<br/>It isn't possible to check if the player's own inventory is open. | `true` `false`           |

### Task-specific Conditions
Supported only by some types of achievements.

| Condition        | Description                                                                                          | Examples                                                    |
|------------------|------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| `entities`       | A list of entities                                                                                   | `- CHICKEN`<br/>`- mythicmobs:<mob-id>`<br/>`- mm:<mob-id>` |
| `items`          | A list of items                                                                                      | `- <material>`                                              |
| `blocks`         | A list of blocks                                                                                     | `- <material>`                                              |
| `potion-effects` | A list of [potion types](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionType.html) | `- SWIFTNESS`                                               |

