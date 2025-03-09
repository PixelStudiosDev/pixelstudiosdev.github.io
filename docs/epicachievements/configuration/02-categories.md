
# Categories

Achievements are organized into categories. For each category, you can specify the servers where the achievements can be completed.

:::info
The server id is defined in the `config.yml` file:
```yaml title="config.yml"
# The id of the server
server: survival
:::
  
Below is an example configuration:

```yaml title="categories.yml"
# Unique category identifier
global:
  # Category name
  name: "Global"
  # Category description
  description:
    - "&7Achievements that can be completed"
    - "&7across all servers."
  # Servers where the category is enabled
  servers:
    - ALL
  # Item displayed in the main menu
  item:
    material: COMPASS
    slot: 12
  # (Optional) Permission required to access the category
  # permission: achievements.global
```