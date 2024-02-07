# Getting Started

- Add the Guilds dependency in your project:

:::info
You need to use the plugin's jar as dependency.
:::

### Maven
```xml
<dependency>
    <groupId>me.leoo.guilds</groupId>
    <artifactId>bukkit</artifactId>
    <version>Tag</version>
    <scope>system</scope>
    <systemPath>${project.basedir}/path/to/plugin.jar</systemPath>
</dependency>
```

### Gradle
```groovy
dependencies {
    implementation files("${project.projectDir}/path/to/plugin.jar")
}
```

:::note
Replace `Tag` with the version number. You can find the available versions in the [Releases](https://github.com/CubeCrafter/WoolWars/releases/) page.
Replace path/to/plugin.jar with the path to the plugin's jar file.
:::

- Add `WoolWars` as soft/hard dependency in your `plugin.yml`:

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