# PlaceholderAPI

:::info
You need to have [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) installed.
:::

### Guild Placeholders

:::tip
To have a Colored TAG use `%guilds_tag_color%` or `%guilds_tag_formatted%` placeholder. You can configure the format in
the config file.
:::

| Placeholder                                      | Description                                | Example                              |
|--------------------------------------------------|--------------------------------------------|--------------------------------------|
| `%guilds_name%`                                  | Get the player's guild name                | LeoGuild                             |
| `%guilds_uuid%`                                  | Get the player's guild uuid                | d8b46fa7-137e-4819-afca-58c5af49c01e |
| `%guilds_level%`                                 | Get the player's guild level               | 1                                    |
| `%guilds_xp%`                                    | Get the player's guild experience          | 1000                                 |
| `%guilds_tag%`                                   | Get the player's guild TAG                 | LeoTag                               |
| `%guilds_tag_color%` or `%guilds_tag_formatted%` | Tag from config `guild-tag.format` string  | [LeoTag]    <br/>                    |
| `%guilds_members%`                               | Get the player's guild members SIZE        | 5                                    |
| `%guilds_online%`                                | Get the player's guild online members SIZE | 3                                    |

### Player Placeholders

| Placeholder                    | Description                                        | Example                   |
|--------------------------------|----------------------------------------------------|---------------------------|
| `%guilds_status%`              | Get the player's guild status (from config)        | Online                    |
| `%guilds_rank%`                | Get the player's guild rank                        | guildmaster               |
| `%guilds_rank_display_name%`   | Get the player's guild rank display name           | Guild Master              |
| `%guilds_rank_tag%`            | Get the player's guild rank TAG                    | GM                        |
| `%guilds_rank_priority%`       | Get the player's guild rank priority               | 1                         |
| `%guilds_rank_members%`        | Get the player's guild rank members (configurable) | Player1, Player2, Player3 |
| `%guilds_rank_members_online%` | Get the player's guild rank members online         | Player1, Player2          |
| `%guilds_rank_formatted%`      | Tag from config `guild-rank-tag.format` string     | [Guild Master]            |
