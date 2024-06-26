# Internal Placeholders

The following placeholders work in commands and menu.

:::caution
These placeholders may not be available in all messages and menus. <br/>
Please report any problems in my [Discord Server](https://pixelstudios.dev/discord).
:::

### General Placeholders

| Placeholder                 | Description                                                |
|-----------------------------|------------------------------------------------------------|
| `{guildName}`               | Get the guild's name                                       |
| `{players}` and `{members}` | Get the guild's members count                              |
| `{onlinePlayers}`           | Get the guild's online members count                       |
| `{offlinePlayers}`          | Get the guild's offline members count                      |
| `{maxPlayers}`              | Get the guild's maximum members count                      |
| `{description}`             | Get the guild's description                                |
| `{motdEditor}`              | Get the latest guild's motd editor name                    |
| `{editTime}`                | Get the latest guild's motd edit time                      |
| `{creationTime}`            | Get the formatted guild's creation time                    |
| `{guildTag}`                | Get the guild's tag or none string if null                 |
| `{guildTagColor}`           | Get the guild's tag color                                  |
| `{guildTagColorName}`       | Get the guild's tag color name (ex: `DARK_AQUA`)           |
| `{guildTagFormatted}`       | Get the formatted guild's tag (config: `guild-tag.format`) |

### Guild Level

| Placeholder                          | Description                             |
|--------------------------------------|-----------------------------------------|
| `{level}` and `{currentLevel}`       | Get the guild's current level           |
| `{progressBar}`                      | Get the level progress bar              |
| `{nextLevel}` and `{nextGuildLevel}` | Get the guild's next level              |
| `{xp}`                               | Get the guild's xp                      |
| `{requiredXp}`                       | Get the required xp to the next level   |
| `{percentage}`                       | Get the xp percentage to the next level |

### Guild Rank

| Placeholder          | Description                                                    |
|----------------------|----------------------------------------------------------------|
| `{rankName}`         | Get the rank's name                                            |
| `{rankDisplayName}`  | Get the rank's display name                                    |
| `{rankTag}`          | Get the rank's tag                                             |
| `{rankTagFormatted}` | Get the formatted rank's tag (config: `guild-rank-tag.format`) |
| `{rankTagColor}`     | Get the rank's tag color                                       |
| `{rankPriority}`     | Get the rank's priority                                        |
| `{rankMembers}`      | Get the formatted rank's members name                          |

### Guild Quest

| Placeholder               | Description                          |
|---------------------------|--------------------------------------|
| `{quest_progress}`        | Get the quest's progress             |
| `{quest_next_reward}`     | Get the quest's next reward          |
| `{quest_next_reset}`      | Get the quest's next reset           |
| `{quest_tier}`            | Get the quest's tier id              |
| `{quest_required_amount}` | Get the quest's tier required amount |
| `{quest_tiers}`           | Get the quest's tiers message        |

### Guild Player

| Placeholder    | Description                       |
|----------------|-----------------------------------|
| `{player}`     | Get the player's name             |
| `{joinDate}`   | Get the player's join date        |
| `{lastOnline}` | Get the player's last online date |