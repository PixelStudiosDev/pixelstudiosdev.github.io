---
sidebar_position: 3
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

### Events

Here you can find all the events provided by the plugin: [Link](https://github.com/CubeCrafter/WoolWars/tree/master/src/main/java/me/cubecrafter/woolwars/api/events)

### Methods

All the API methods are accessible through the [WoolWarsAPI](https://github.com/CubeCrafter/WoolWars/blob/master/src/main/java/me/cubecrafter/woolwars/api/WoolWarsAPI.java) class.