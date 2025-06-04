
# Categories

Achievements are organized into categories. <br/>
Categories are especially helpful for grouping achievements that belong to the same server/game mode.

:::info
The server id is defined in the `config.yml` file:
```yaml title="config.yml"
# The id of the server
server: survival
:::
  
## Required Fields 
### `name`
The name of the category.
```yaml
name: "Global"
```

### `description`
The description of the category.
```yaml
description:
  - "&7Achievements that can be completed"
  - "&7across all servers."
```

### `servers`
A list of servers where the category is enabled. <br/>
**Use `ALL` to enable it on all servers.**
```yaml
servers:
  - ALL
```

### `item`
The item displayed in the main menu for the category.
- `material`: The item's material.
- `slot`: The slot in the menu where the item will be displayed.
```yaml
item:
  material: COMPASS
  slot: 12
```

## Optional Fields
### `permission`
A permission required to access the category. <br/>
**Default:** `None`
```yaml
permission: "achievements.global"
```
  
## Example Configuration

```yaml title="categories.yml" showLineNumbers=true
# Unique category identifier
survival:
  name: "Survival"
  description:
    - "&7Mine, craft and explore!"
  servers:
    - survival
  item:
    material: DIAMOND_PICKAXE
    slot: 12
```