# Getting Started

- Add the WoolWars dependency in your project:

### Maven
```xml
<repository>
    <id>jitpack.io</id>
    <url>https://jitpack.io</url>
</repository>
```
```xml
<dependency>
    <groupId>com.github.CubeCrafter</groupId>
    <artifactId>WoolWars</artifactId>
    <version>Tag</version>
    <scope>provided</scope>
</dependency>
```

### Gradle
```groovy
repositories {
    maven { url 'https://jitpack.io' }
}
```
```groovy
dependencies {
    compileOnly 'com.github.CubeCrafter:WoolWars:Tag'
}
```

:::note
Replace `Tag` with the version number. You can find the available versions in the [Releases](https://github.com/CubeCrafter/WoolWars/releases/) page.
:::

- Add `WoolWars` as soft/hard dependency in your `plugin.yml`:

```yaml title="plugin.yml"
softdepend: [WoolWars]
# or
depend: [WoolWars]
```

- Check if the plugin is enabled on the server: <br/>
(You don't need to do this if you added `WoolWars` as hard dependency)

```java title="ExamplePlugin.java"
@Override
public void onEnable() {
    if (!getServer().getPluginManager().isPluginEnabled("WoolWars")) {
        getLogger().severe("WoolWars not found! Disabling...");
        getServer().getPluginManager().disablePlugin(this);
        return;
    }
}
```