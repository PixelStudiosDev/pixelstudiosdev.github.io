# Conditions

:::tip
Custom items and blocks from ItemsAdder, Oraxen and MMOItems are supported! <br/>
Discover more about it [here](../../useful-stuff/item-format.md).
:::

## Global Conditions
Supported by all types of achievements.

| Condition       | Description                                       | Examples               |
|-----------------|---------------------------------------------------|------------------------|
| `game-modes`    | A list of game modes                              | `- SURVIVAL`           |
| `worlds`        | A list of worlds                                  | `- "world"`            |
| `item-in-hand`  | A list of items needed to be in the player's hand | `- <material>`         |
| `item-equipped` | A list of items needed to be equipped             | `- <material>`         |
| `riding-entity` | A list of entities needed to be riding            | `- HORSE`<br/>`- BOAT` |

## Task-specific Conditions
Supported only by some types of achievements.

| Condition        | Description                                                                                          | Examples                                                    |
|------------------|------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| `entities`       | A list of entities                                                                                   | `- CHICKEN`<br/>`- mythicmobs:<mob-id>`<br/>`- mm:<mob-id>` |
| `items`          | A list of items                                                                                      | `- <material>`                                              |
| `blocks`         | A list of blocks                                                                                     | `- <material>`                                              |
| `potion-effects` | A list of [potion types](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionType.html) | `- SWIFTNESS`                                               |

