---
sidebar_position: 5
---

# Commands and Permissions

:::info
To disable commands or edit their aliases, you can do so in the `plugins/Guilds/config.yml` file.
:::

## Player Commands

- `/guildchat <text>` <br/>
  Send a guid message <br/>
  Aliases: `gchat`

## Player Sub Commands

Usage: `/guild <subCommandName>` <br/> <br/>

- `accept` <br/>
  Accept a guild invitation <br/>

- `chat <text>` <br/>
  Send a guild message <br/>

- `create <name>` <br/>
  Create a guild with the specified name <br/>

- `demote <player>` <br/>
  Demote the player to the previous rank <br/>

- `disband` <br/>
  Disbands the guild <br/>

- `discord [reset]` <br/>
  Set or view the guild's discord link <br/>

- `help` <br/>
  Prints the command list <br/>

- `info` <br/>
  Prints information about your guild <br/>

- `invite <player>` <br/>
  Invite the player to your guild <br/>

- `join <guild>` <br/>
  Join a specified guild <br/>

- `leave` <br/>
  Leave your current guild <br/>

- `members` <br/>
  Lists players in your guild <br/>

- `mute <player>/everyone <time>` <br/>
  Mutes the player or the whole guild <br/>

- `notifications` <br/>
  Toggle guild join / leave notifications <br/>

- `online` <br/>
  Show the current online members of your guild <br/>

- `onlinemode` <br/>
  Toggle if offline players are displayed in the guild list <br/>

- `party` <br/>
  Forms a party from your online guild members <br/>

- `promote <player>` <br/>
  Promotes the player to the next rank <br/>

- `rename <name>` <br/>
  Renames the guild <br/>

- `settings SHOWN <true/false>` <br/>
  Lets players join without being invited and vice versa <br/>

- `settings DESCRIPTION <text>` <br/>
  Modify the guild's description <br/>

- `slow` <br/>
  Toggle slow chat, requiring guild members to wait 10 seconds between messages <br/>

- `tag <tag>/reset` <br/>
  Sets the guild [TAG] or resets it <br/>

- `tagcolor <tagcolor>` <br/>
  Sets the guild tag color <br/>

- `toggle` <br/>
  Toggle guild chat for yourself <br/>

- `transfer <player>` <br/>
  Transfers ownership of the guild to another player <br/>

- `unmute <player>/everyone` <br/>
  Unmute a player or the whole guild <br/>

## Administration Commands

Usage: `/guildadmin <subCommandName>` <br/> <br/>

- `/guildadmin info <guild>` <br/>
  Get information about a guild <br/>

- `/guildadmin members <guild>` <br/>
  List the members of a guild <br/>

- `/guildadmin menu` <br/>
  Open the admin menu <br/>

- `/guildadmin create <name> <player>` <br/>
  Create a guild for a player <br/>

- `/guildadmin disband <guild>/<player>` <br/>
  Disband a guild by guild name or player name <br/>

- `/guildadmin kick <player>` <br/>
  Kick a player from their guild <br/>

- `/guildadmin motd <guild> list/clear` <br/>
  List or clear the MOTD of a guild <br/>

- `/guildadmin mute <guild> <player> <time>` <br/>
  Mute a player from their guild <br/>

- `/guildadmin unmute <guild> <player>` <br/>
  Unmute a player from their guild <br/>

- `/guildadmin setlevel <guild> <level>` <br/>
  Set the level of a guild <br/>

- `/guildadmin setxp <guild> <xp>` <br/>
  Set the xp of a guild <br/>

- `/guildadmin addlevel <guild> <level>` <br/>
  Add levels to a guild <br/>

- `/guildadmin addxp <guild> <xp>` <br/>
  Add xp to a guild <br/>

- `/guildadmin settag <guild> <tag>` <br/>
  Set the tag of a guild <br/>

- `/guildadmin settagcolor <guild> <color>` <br/>
  Set the tag color of a guild <br/>

- `/guildadmin transfer <guild> <player>` <br/>
  Transfer the ownership of a guild <br/>

- `/guildadmin addleader <guild> <player>` <br/>
  Add a player to a guild and make them leader <br/>

- `/guildadmin achievement <guild> <achievement> <action> [value]` <br/>
  Manage guild achievements. Actions: add, set, reset <br/>

- `/guildadmin spy <true/false>` <br/>
  Enable or disable guild chat spy <br/>

These commands require the `admin` permission. The command root can also be aliased through `gadmin` or `guildsadmin` in `plugins/Guilds/config.yml`.

## Permissions

Config permissions are defined in the `plugins/Guilds/config.yml` file. <br/>

| Path      | Description                                                                                       |
|-----------|---------------------------------------------------------------------------------------------------|
| `create`  | Allows players to create a guild.                                                                 |
| `admin`   | Allows players to use `/guildadmin` commands.                                                     |
| `join`    | Allows players to join a guild without an invitation. (only if `settings SHOWN` is set to `true`) |
| `tag`     | Allows players to set a guild tag.                                                                |
| `discord` | Allows players to set a guild discord link.                                                       |
