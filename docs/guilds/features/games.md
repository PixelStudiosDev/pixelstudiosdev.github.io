---
sidebar_position: 7
title: Guild Games
---

## What are Guild Games?

Guild Games are **ONLY** a list of the games that a guild usually plays. <br/>
They are not a game mode or a feature of the plugin, but a way to show the games that a guild plays: for example, in the
Guild Finder
you can filter guilds by the games they play. <br/>

## So the plugin has no games?

No, the plugin does not have any games integrated. <br/>

## How should I use Guild Games?

You can create new guild games in the `menu.yml` file, in the `guilds.guild-games` section. <br/>

By default, there are a few games already created, such as `BedWars`, `SkyWars`, `Survival Games`, etc. <br/>
You can edit these games or create new ones, as you prefer. <br/>

## Example

### Default configuration

```yaml title="menu.yml"
menu-games:
  bedwars:
    to-select:
      material: BED
      slot: 10
      name: '&aBedWars'
      lore:
        - '&eClick to select!'
    selected:
      material: STAINED_GLASS_PANE:3
      slot: 10
      name: '&aBedWars'
      lore:
        - '&6SELECTED!'
  skywars:
    to-select:
      material: EYE_OF_ENDER
      slot: 11
      name: '&aSkyWars'
      lore:
        - '&eClick to select!'
    selected:
      material: STAINED_GLASS_PANE:3
      slot: 11
      name: '&aSkyWars'
      lore:
        - '&6SELECTED!'

  # Other games...
```

We see that there are two games, `BedWars` and `SkyWars`, each with the `to-select` and `selected` items. <br/>

:::info
It would be usually better to set the same `slot` for both items of each game.
:::

### Adding a new game

If you would like to add the `KitPvP` game, you can do it like this:

```yaml title="menu.yml"
menu-games:
  kitpvp:
    to-select:
      material: DIAMOND_SWORD
      slot: 12
      name: '&aKitPvP'
      lore:
        - '&eClick to select!'
    selected:
        material: STAINED_GLASS_PANE:3
        slot: 12
        name: '&aKitPvP'
        lore:
            - '&6SELECTED!'

  # Other games...
```