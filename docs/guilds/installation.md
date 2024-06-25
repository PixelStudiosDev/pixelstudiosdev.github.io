---
sidebar_position: 2
---

# Installation

## Spigot

1. Download the latest version of the plugin from [SpigotMC](https://www.spigotmc.org/resources/110931/)
   or [Polymart](https://polymart.org/r/2915) or [BuiltByBit](https://builtbybit.com/resources/27980/).
2. Place the downloaded jar file in your server's `plugins` folder.
3. Restart your server.
4. Enjoy!

## Proxy Mode

1. Download the latest version of the plugin from [SpigotMC](https://www.spigotmc.org/resources/110931/)
   or [Polymart](https://polymart.org/r/2915) or [BuiltByBit](https://builtbybit.com/resources/27980/).
2. Place the downloaded jar file in your Proxy's and in your Spigot servers `plugins` folder.
3. Restart your proxy and your servers.
4. In each server set in the Guilds config file (`plugins/Guilds/config.yml`) `guilds.settings.bungeecord.enabled`
   to `true`
5. Restart your servers.
6. Enjoy!

## Requirements

- Java 8 or higher
- A 1.8.8 - 1.20.4 Spigot server
- **(Optional)** BungeeCord or Velocity for Proxy Mode
- **(Optional)** A MySQL or MongoDB server

:::caution
The plugin officially supports `Spigot` and `Paper` servers. Other forks may work, but are not officially supported.
:::

## Optional Dependencies

Guilds doesn't require any other plugins to work, but it can hook into some external plugins to provide additional
features.

- [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) - Required for placeholders
- [Bedwars1058](https://polymart.org/resource/bedwars1058.1152) - Required for giving guild experience or other kind of rewards on
  certain events

