# PlaceholderAPI

:::info
You need to have [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) installed.
:::

### Guild Placeholders

:::tip
To have a Colored TAG use `%guilds_tag_color%` or `%guilds_tag_formatted%` placeholder. You can configure the format in
the config file.
:::

| Placeholder                                      | Description                                       | Example                              |
|--------------------------------------------------|---------------------------------------------------|--------------------------------------|
| `%guilds_name%`                                  | The player's guild name                           | LeoGuild                             |
| `%guilds_uuid%`                                  | The player's guild UUID                           | d8b46fa7-137e-4819-afca-58c5af49c01e |
| `%guilds_level%`                                 | The player's guild level                          | 1                                    |
| `%guilds_xp%`                                    | The player's guild experience                     | 1000                                 |
| `%guilds_tag%`                                   | The player's guild tag                            | LeoTag                               |
| `%guilds_tag_color%` or `%guilds_tag_formatted%` | The player's guild tag, formatted                 | [LeoTag]    <br/>                    |
| `%guilds_members%`                               | Number of members in the player's guild           | 5                                    |
| `%guilds_online%`                                | Number of online members in the player's guild    | 3                                    |

### Player Placeholders

| Placeholder                    | Description                               | Example                   |
|--------------------------------|-------------------------------------------|---------------------------|
| `%guilds_status%`              | The player's guild status                 | Online                    |
| `%guilds_rank%`                | The player's rank in their guild          | guildmaster               |
| `%guilds_rank_display_name%`   | The display name of the player's rank     | Guild Master              |
| `%guilds_rank_tag%`            | The tag of the player's rank              | GM                        |
| `%guilds_rank_priority%`       | The priority of the player's rank         | 1                         |
| `%guilds_rank_members%`        | Members with the same rank as the player  | Player1, Player2, Player3 |
| `%guilds_rank_members_online%` | Online members with the same rank         | Player1, Player2          |
| `%guilds_rank_formatted%`      | The player's rank, formatted              | [Guild Master]            |
