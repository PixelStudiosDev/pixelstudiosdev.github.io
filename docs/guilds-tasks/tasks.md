---
title: Tasks
sidebar_position: 3
---

## Structure

```yaml title="tasks.yml"
get_diamonds:
  type: block_break
  conditions:
    - materials:
        - DIAMOND_ORE
      type: block
  rewards:
    - guild_xp:100
```

Description of the task structure:

- `get_diamonds`: The name of the task.
- `type`: The type of task, check the [task types](/guilds-tasks/tasks#types) page for more information.
- `conditions`: A list of conditions that must be met for the task to be completed. Check
  the [conditions](/guilds-tasks/conditions#types) page for more information.
- `rewards`: A list of rewards that will be given to the player when the task is completed. Check
  the [rewards](/guilds-tasks/rewards#types) page for more information.

## Types 

Below is a list of all task types that can be used in the `type` field of a task.

| Type             | Description              | 
|------------------|--------------------------|
| `block_break`    | Break a block.           |
| `block_place`    | Place a block.           |
| `entity_kill`    | Kill an entity.          |
| `item_pickup`    | Pick up an item.         |
| `item_craft`     | Craft an item.           |
| `fishing`        | Fish a fish.             |
| `achievement`    | Complete an achievement. |
| `enchant_item`   | Enchant an item.         |
| `biome_enter`    | Enter a biome.           |
| `potion_consume` | Consume a potion.        |
| `entity_damage`  | Damage an entity.        |
| `entity_shoot`   | Shoot an entity.         |
| `item_drop`      | Drop an item.            |



