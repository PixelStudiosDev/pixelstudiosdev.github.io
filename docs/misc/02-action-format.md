---
title: Action Format
slug: /action-format
id: action-format
---

:::warning
This format applies **only** to [**EpicAchievements**](/epicachievements) and [**Wool Wars**](/wool-wars).
:::

You can assign custom actions to any item defined in the menu configuration.

## Attaching actions to items

### Global Actions
Actions will be executed on any type of click.

```yaml
my-item:
  material: DIAMOND
  # ... other item properties ...
  actions:
  - "message:&aYou clicked the item!"
  - "console:give {player} diamond 1"
```

### Specific Click Type Actions
Supported click types: `left`, `right`, `shift-left`, `shift-right`.

```yaml
my-item:
  material: DIAMOND
  # ... other item properties ...
  actions:
    left:
    - "message:&aYou left-clicked the item!"
    right:
    - "message:&aYou right-clicked the item!"
    shift-left:
    - "message:&aYou shift-left-clicked the item!"
    shift-right:
    - "message:&aYou shift-right-clicked the item!"
```

## Action Types
| Action              | Description                         |
|---------------------|-------------------------------------|
| `message:<text>`    | Sends a chat message to the player. |
| `console:<command>` | Executes a console command.         |
| `command:<command>` | Executes a command as the player.   |
| `sound:<sound>`     | Plays a sound to the player.        |
| `previous-page`     | Goes to the previous menu page.     |
| `next-page`         | Goes to the next menu page.         |
| `close`             | Closes the menu.                    |

:::tip
You can use the following placeholders in commands and messages:
- `{player}` - The name of the player.
- `{uuid}` - The UUID of the player.
:::