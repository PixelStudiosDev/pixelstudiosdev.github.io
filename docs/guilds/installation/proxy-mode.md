---
sidebar_position: 3
---

# Proxy Mode

:::danger
The plugin requires **REDIS** and a **MySQL** or **MongoDB** database to work in proxy mode. <br/>
If you don't have a REDIS server, you can use the plugin in standalone mode.
:::

1. Download the latest version of the plugin from [SpigotMC](https://www.spigotmc.org/resources/110931/)
   or [Polymart](https://polymart.org/r/2915) or [BuiltByBit](https://builtbybit.com/resources/27980/).
2. Put the downloaded jar file in your **Proxy**'s and in ALL your **Spigot** servers `plugins` folder.
3. Restart your proxy and your servers.
4. In each server set in the Guilds config file (`plugins/Guilds/config.yml`) `guilds.settings.bungeecord.enabled`
   to `true`
5. Set **Database** credentials in all **Spigot** servers in the config files
6. Install and configure **Redis**. Check the [Installing Redis](#installing-redis) section for more information.
5. Restart your servers.
6. Enjoy the plugin!

## Installing Redis

Here there are some information about the installation of Redis. <br/>

- All servers in the same machine:
  - Install and configure Redis in your machine
  - Set the Redis credentials in all servers in the config file
- Servers in different machines:
  - Choose a machine to host the Redis server
  - Install and configure Redis in the chosen machine
  - Set the Redis credentials in all servers in the config file
  - Make sure the Redis server is accessible from all servers

Example:

Let's assume the following IP addresses for the three machines:

- **Machine 1** (where Redis will be installed): `192.168.1.100`
- **Machine 2** (connecting to Redis on Machine 1): `192.168.1.101`
- **Machine 3** (connecting to Redis on Machine 1): `192.168.1.102`

We will install Redis on **Machine 1** and configure it. <br/>
Make sure that the Redis server is accessible from all machines, setting a password for major security. <br/>
Then, we will set the Redis credentials in the config files of the servers on ALL machines to connect to the Redis server on **Machine 1**.

In all servers we'll have a similar configuration in the `config.yml` file:

```yaml
redis:
  host: 192.168.1.100
  port: 6379
  username: ''
  password: 'Your_Password'
  
guilds:
  settings:
    bungeecord:
      enabled: true

# Other configurations...
```

<br/>

:::info
Make sure to replace `Your_Password` with the password you set for the Redis server. <br/>
If you chose a username for the Redis server, make sure to set it in the `username` field.
:::