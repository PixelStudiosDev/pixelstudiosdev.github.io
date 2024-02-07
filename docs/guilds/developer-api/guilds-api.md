# Working with Guilds API

- Once you have added `Guilds` as a dependency in your project, you can start using the Guilds API.
- The main class of the Guilds API is `GuildsAPI`. You can use this class to access the API methods.

# GuildsAPI class methods

### Guilds

- `getGuilds()`: Returns a list of all guilds on the server.
- `getShownGuilds()`: Returns a list of all shown guilds.

### Getting a guild

#### By guild's UUID
- `getGuildByUuid(UUID uuid)`: Returns the guild with the given UUID. Returns `null` if the guild does not exist.

#### By player's UUID
- `getGuildByPlayer(UUID playerUuid)`: Returns the guild of the player with the given UUID. Returns `null` if the player is not in a guild.

#### By guild's name
- `getGuildByName(String name)`: Returns the guild with the given name. Returns `null` if the guild does not exist.

# Example

```java title="ExampleListener.java"
@EventHandler
public void onJoin(PlayerJoinEvent event) {
    Player player = event.getPlayer();

    Guild guild = GuildsAPI.getGuildByPlayer(player.getUniqueId());
    if (guild == null) {
        return;
    }

    player.sendMessage("You are in the guild " + guild.getName() + "!");
}
```