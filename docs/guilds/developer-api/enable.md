# Using the Guilds API

- Add `Guilds` as soft/hard dependency in your `plugin.yml`:

```yaml title="plugin.yml"
softdepend: [Guilds]
# or
depend: [Guilds]
```

- Check if the plugin is enabled on the server: <br/>
(You don't need to do this if you added `Guilds` as hard dependency)

```java title="ExamplePlugin.java"
@Override
public void onEnable() {
    if (!getServer().getPluginManager().isPluginEnabled("Guilds")) {
        getLogger().severe("Guilds not found! Disabling...");
        getServer().getPluginManager().disablePlugin(this);
        return;
    }
    
    // Other Code
}
```