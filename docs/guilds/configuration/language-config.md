---
sidebar_position: 5
title: Language Config
---

## File location

The language configuration file is located in `plugins/Guilds/language.yml`.

You can edit the file messages to your liking. <br/>
You only have to remember that you must not edit the type of the message,
for example where you see a message between `''` you can set a list or a number.

## Editing the file

We are going to see only the configuration of a command, but the same applies to all commands. <br/>
Other things can be normally edited. <br/>

```yaml title="config.yml"
#Command name (don't edit)
accept:
  #Message in /guild help
  help: '&e/guild accept - &bAccepts a guild invitation'

  #Hidden command in /guild help
  #Set to true to hide the command in /guild help
  hidden: false

  #Command set in chat on click in /guild help
  hover-command: /guild accept

  #Message shown in chat on hover in /guild help
  hover-text: '&bAccepts a guild invitation'

  #Message sent when command usage is not correct
  use: '&cUse: /guild accept'

  #Other messages of the command (depends on the command)
  click-hover-message: '&eClick to accept!'
  joined-broadcast:
    - '&b&m-------------------------------------------------------------'
    - '&7{player} &ejoined the guild!'
    - '&b&m-------------------------------------------------------------'
  joined-player:
    - '&b&m-------------------------------------------------------------'
    - '&eYou accepted the invite to &6{guild} &eguild!'
    - '&b&m-------------------------------------------------------------'
  not-invited:
    - '&b&m-------------------------------------------------------------'
    - '&eYou do not have invitation requests!'
    - '&b&m-------------------------------------------------------------'
```