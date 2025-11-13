---
sidebar_position: 3
---

# Commands and Permissions

:::note
- `<required>` - Required argument<br/>
- `[optional]` - Optional argument
  :::

### Player Commands

- `/achievements` <br/>
  Opens the main achievements menu.

- `/achievements menu [category] [type]` <br/>
  Opens the specified achievements menu. <br/>

- `/achievements rewards` <br/>
  Opens the rewards GUI.

- `/achievements tracker` <br/>
  Opens the tracker GUI.

- `/achievements search [query]` <br/>
  Searches for achievements matching the query.

- `/achievements help` <br/>
  Displays the help message.

### Admin Commands

- `/achievements open <player> [category] [type]` <br/>
  Opens the specified achievements menu for a player.

- `/achievements progress <player> <achievement> <set/add/remove> <amount>` <br/>
  Sets the progress of an achievement for a player.

- `/achievements unlock <player> <achievement> [tier]` <br/>
  Unlocks an achievement for a player.

- `/achievements reset <player> [achievement/category/rewards] [id]` <br/>
  Resets the progress of an achievement for a player.

- `/achievements reload` <br/>
  Reloads the plugin's configuration files.

### Permissions

- `achievements.admin` <br/>
  Permission required to use admin commands.

- `achievements.track` <br/>
  Permission required to track achievements.