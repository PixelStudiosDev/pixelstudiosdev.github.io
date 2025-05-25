# Working with Guilds Events

- Guilds provides a set of events that you can use to listen to guild-related actions.
- The events are related to guilds, levels, members and ranks.

# Guilds Events List

## V2 Changes
Path change: `me.leoo.guilds.bukkit.api.events` to `me.leoo.guilds.api.events`.

New event:
- `GuildQuestCompleteEvent`: Called when a guild quest is completed.

### Guilds

:::note
GuildCreateEvent and GuildDeleteEvent events cannot be cancelled.
:::

- `GuildDeleteEvent`: Called when a guild is deleted.
- `GuildRenameEvent`: Called when a guild is renamed.
- `GuildTagEvent`: Called when a guild's tag is changed.

### Guild Level

- `GuildLevelChangeEvent`: Called when the guild's level changes.
- `GuildXpChangeEvent`: Called when the guild's xp changes.

### Guild Player

- `GuildDemoteEvent`: Called when a player is demoted in the guild.
- `GuildJoinEvent`: Called when a player joins a guild.
- `GuildKickEvent`: Called when a player is kicked from the guild.
- `GuildLeaveEvent`: Called when a player leaves a guild.
- `GuildMuteEvent`: Called when a player is muted in the guild.
- `GuildPromoteEvent`: Called when a player is promoted in the guild.
- `GuildTransferEvent`: Called when the guild is transferred to another player.
- `GuildUnmuteEvent`: Called when a player is unmuted in the guild.

### Guild Rank

- `GuildRankCreateEvent`: Called when a rank is created in the guild.
- `GuildRankDeleteEvent`: Called when a rank is deleted in the guild.
- `GuildRankPermissionEvent`: Called when a rank's permission is changed in the guild.
- `GuildRankRenameEvent`: Called when a rank is renamed in the guild.
- `GuildRankTagEvent`: Called when a rank's tag is changed in the guild.

# Example

```java title="ExampleListener.java"
//Code to cancel the GuildTransferEvent if the new leader is not online.

@EventHandler
public void onGuildTransfer(GuildTransferEvent event) {
    Guild guild = event.getGuild();
    GuildPlayer oldLeader = event.getOldLeader();
    GuildPlayer newLeader = event.getNewLeader();

    if (newLeader.getOnlinePlayer() == null) {
        oldLeader.sendMessage("§cThe new leader is not online.");

        event.setCancelled(true);
        return;aq
    }
}
```