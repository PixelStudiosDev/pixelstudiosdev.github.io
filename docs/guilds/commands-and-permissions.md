---
sidebar_position: 4
---

# Commands and Permissions

## Player Commands

- `/guildchat <text>` <br/>
  Send a guid message <br/>
  Aliases: `gchat`

## Sub Commands

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
  Toggle if offline players are diplayed in the guild list <br/>

- `party` <br/>
  Forms a party from your online guild members <br/>

- `promote <player>` <br/>
  Promotes the player to the next rank <br/>

- `rename <name>` <br/>
  Renames the guild <br/>

- `settings SHOWN <true/false>` <br/>
  Lets players join without being invited and vice - versa <br/>

- `settings DESCRIPTION <text>` <br/>
  Modify the guild's description <br/>

- `slow` <br/>
  Toggle slow chat, requiring guild members to wait 10 seconds between messages <br/>

- `tag <tag>/reset` <br/>
  Sets the guild [TAG] or reset it <br/>

- `tagcolor <tagcolor>` <br/>
  Sets the guild tag color <br/>

- `toggle` <br/>
  Toggle guild chat for yourself <br/>

- `transfer <player>` <br/>
  Transfers ownership of the guild to another player <br/>

- `unmute <player>/everyone` <br/>
  Unmute a player or the whole guild <br/>

## Administration Commands

### These commands can be performed only by operators

- `setlevel <guildName>/<playerName> <amount>` <br/>
  Set guild's level by giving its name or the name of player<br/>

- `setxp <guildName>/<playerName> <amount>` <br/>
  Set guild's xp by giving its name or the name of player<br/>

- `addlevel <guildName>/<playerName> <amount>` <br/>
  Give a certain levels amount to a guild by giving its name or the name of player<br/>

- `addxp <guildName>/<playerName> <amount>` <br/>
  Give a certain xp amount to a guild by giving its name or the name of player<br/>

## Permissions

- `string in config: guilds.permissions.create` <br/>
  Create a Guild.

- `string in config: guilds.permissions.admin` <br/>
  Admin features.

- `guilds.mvp++` <br/>
  Add the Orange Guild TAG Color