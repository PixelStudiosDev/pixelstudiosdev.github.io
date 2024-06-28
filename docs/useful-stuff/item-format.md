---
title: Item Format
slug: /item-format
---

Follow the format below to configure an item in config files.<br/>

:::tip
Display names and lores support legacy (e.g. `&c`) and hex (e.g. `#ff0000`) color formats.
:::

| Property            | Description                                                                                                                                                                                                                                                                                     | Examples                                                                                                                                     |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| `material`          | Sets the material of the item<br/><br/>Supports custom heads,<br/>[ItemsAdder](https://www.spigotmc.org/resources/73355/), [Oraxen](https://www.spigotmc.org/resources/72448/), [MMOItems](https://www.spigotmc.org/resources/39267/) and [EcoItems](https://www.spigotmc.org/resources/94601/) | `<material>` `texture:<value>`<br/>`<itemsadder/ia>:<namespace>:<id>`<br/>`<oraxen/oxn>:<id>`<br/>`mmoitems:<type>:<id>`<br/>`ecoitems:<id>` |
| `name`              | Sets the display name of the item                                                                                                                                                                                                                                                               | `&e&lExample`<br/>`#ffff00Example`                                                                                                           |
| `lore`              | Sets the lore of the item                                                                                                                                                                                                                                                                       | `- "&dFirst Line"`<br/>`- "&dSecond Line"`                                                                                                   |
| `glow`              | Adds a glowing effect to the item                                                                                                                                                                                                                                                               | `true` `false`                                                                                                                               |
| `texture`           | Sets the texture of a player head                                                                                                                                                                                                                                                               | `<uuid>` `<username>` `<base64-value>`<br/>`https://textures.minecraft.net/<hash>`                                                           |
| `amount`            | Sets the amount of the item                                                                                                                                                                                                                                                                     | `<number>`                                                                                                                                   |
| `custom-model-data` | Sets the custom model data of the item                                                                                                                                                                                                                                                          | `<number>`                                                                                                                                   |
| `unbreakable`       | Sets the unbreakable state of the item                                                                                                                                                                                                                                                          | `true` `false`                                                                                                                               |
| `durability`        | Sets the durability of the item                                                                                                                                                                                                                                                                 | `<number>`                                                                                                                                   |
| `color`             | Sets the color of the item<br/>Supports [Dye Colors](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/DyeColor.html) and RGB values                                                                                                                                                          | `<dye-color>`<br/>`<rr>:<gg>:<bb>`                                                                                                           |
| `flags`             | Adds a list of [item flags](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/ItemFlag.html) to the item                                                                                                                                                                            | `- <flag>`                                                                                                                                   |
| `effects`           | Adds a list of [potion effects](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html) to a potion                                                                                                                                                                   | `- <type>:[seconds]:[level] `                                                                                                                |
| `enchantments`      | Adds a list of [enchantments](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html) to the item                                                                                                                                                                    | `- <type>:[level]`                                                                                                                           |
| `modifiers`         | Adds a list of [attribute modifiers](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html) to the item                                                                                                                                                                  | `- <type>:<value>:[equipment-slot]`                                                                                                          |

### Example Configuration
```yaml
example-item:
  material: DIAMOND_SWORD
  name: "&e&lExample"
  lore:
    - "&dFirst Line"
    - "&dSecond Line"
  glow: true
  amount: 1
  custom-model-data: 123
  unbreakable: true
  flags:
    - "HIDE_ENCHANTS"
  enchantments:
    - "FIRE_ASPECT,2"
  modifiers:
    - "GENERIC_MOVEMENT_SPEED,1"
```