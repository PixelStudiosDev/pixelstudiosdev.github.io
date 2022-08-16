---
sidebar_position: 7
---

# Developer API

## Getting started

Add WoolWars as dependency in your project:

:::info
Replace `Tag` with the version number. You can find the available versions in the [Releases](https://github.com/CubeCrafter/WoolWars/releases/) page.
:::

### Maven
```xml
<repositories>
    <repository>
        <id>jitpack.io</id>
        <url>https://jitpack.io</url>
    </repository>
</repositories>
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

:::tip
Remember to add `WoolWars` as depend or softdepend in your `plugin.yml` file.
:::

## Usage

The plugin provides a bunch of events and static methods to easily interact with the plugin.

### Events

```
GameEndEvent
GameStartEvent
GameStateChangeEvent
RoundEndEvent
RoundStartEvent
PlayerCollectPowerUpEvent
PlayerJoinArenaEvent
PlayerLeaveArenaEvent
PlayerKillEvent
PlayerSelectKitEvent
PlayerUseAbilityEvent
```

### Methods

```
WoolWarsAPI#getLobbyLocation()
WoolWarsAPI#getArenas()
WoolWarsAPI#getArenaByPlayer(Player)
WoolWarsAPI#getArenaById(String)
WoolWarsAPI#getArenasByGroup(String)
WoolWarsAPI#getGroups()
WoolWarsAPI#getKitById(String)
WoolWarsAPI#getKits()
WoolWarsAPI#getPlayerData(Player)
WoolWarsAPI#isPlaying(Player)
WoolWarsAPI#joinRandomArena(Player)
WoolWarsAPI#joinRandomArena(Player, String)
```