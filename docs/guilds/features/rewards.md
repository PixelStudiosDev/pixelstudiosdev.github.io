---
sidebar_position: 4
title: Custom Rewards
---

## What are custom rewards?

Custom rewards are a feature that allows you to create your own rewards for the guilds. <br/>
An example is the `ORANGE` TAG color, which is originally available only for VIP guild leaders. <br/>

As other features, you can find the dedicated configuration file: `rewards.yml`. <br/>

## How to configure the rewards system

```yaml title="rewards.yml"
tags:
  orange:
    color: ORANGE
    display-name: Orange
    conditions:
      - RANK:MASTER
      - MC_PERMISSION:guilds.mvp++
```

In this example, we can see how to create a custom TAG color reward. <br/>
We have set the color, display name and the conditions to use it. <br/>
The `RANK:MASTER` is set to allow only the guild leader to be checked for the condition. <br/>

:::info
Check the [Supported types](#supported-types) section to check all the supported types. <br/>
:::

## Supported types

The conditions are available for all the rewards. <br/>

| Section | Type      | Options             | Description                            |
|---------|-----------|---------------------|----------------------------------------|
| tags    | Guild TAG | color, display-name | The color and display name of the TAG. |

## Condition types

Each condition type has its own format. <br/>
Usually, the format is `TYPE:VALUE`. <br/>

| Type          | Description                          | Format                       | Values                                                  | Example                    |
|---------------|--------------------------------------|------------------------------|---------------------------------------------------------|----------------------------|
| RANK          | The rank of the player.              | `RANK:{type}`                | `MASTER`, `DEFAULT`, rank name                          | `RANK:admin`               |
| RANK_PERM     | The permission of the player's rank. | `RANK_PERM:{permission}`     | [Guild Rank Perm](/guilds/useful#rank-permissions-list) | `RANK_PERM:modify-tag`     |
| MC_PERMISSION | The permission of the player.        | `MC_PERMISSION:{permission}` | Any permission                                          | `MC_PERMISSION:guilds.mvp` |
