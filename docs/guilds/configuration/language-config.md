# Language Config

## File location

The language configuration file is located in `plugins/Guilds/language.yml`.

## Editing the file

Example of a guild command messages in the language file:

```yaml title="config.yml"
#Command name (don't edit)
accept:
  #Message in /guild help
  help: '&e/guild accept - &bAccepts a guild invitation'

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