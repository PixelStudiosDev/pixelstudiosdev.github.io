---
sidebar_position: 3
---

# Categories

Achievements are organized into categories. For each category, you can specify the servers where the achievements can be completed.
Categories can be created and edited using the in-game editor, by typing `/achievements editor`.

:::info
The server id is defined in the `config.yml` file:
```yaml title="config.yml"
# The id of the server
server: survival
:::
  
Below is an example configuration:

```yaml title="categories.yml"
# Unique identifier of the category
global:
  # The name used in messages and menus
  name: Global
  # The description of the category
  description:
    - '&7Achievements that can be completed'
    - '&7across all servers.'
  # A list of servers where the achievements can be completed
  servers:
    - ALL
  # Item displayed in the main menu
  item:
    material: COMPASS
    slot: 12
```