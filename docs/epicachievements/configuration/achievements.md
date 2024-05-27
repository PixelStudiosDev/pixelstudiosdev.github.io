# Creating an Achievement

## Interactive Setup

1. Run the command `/achievement editor` to open the editor.
2. Select a category or create a new one.
3. Click on the `Edit Achievements` button.
4. Click on the `Create Achievement` button.
5. Enter the achievement's name in the chat.
6. Choose the achievement's task from the list in the chat.
7. The achievement will be created and you can now edit it.

## Manually editing an arena configuration

Here you can find an explained version of an achievement configuration file:

:::note
You can find the achievement configuration files in the `plugins/EpicAchievements/achievements/<category>` folder.
:::

```yaml title="example.yml"
eater:
  # The displayed name of the achievement
  name: Eater
  
  # The description of the achievement
  description:
    - '&fEat 5 apples'
      
    # The task type
  type: CONSUME_ITEM
  
    # The permission required to view and progress in the achievement
  permission: achievements.eater
  
  # Conditions that need to be met to progress in the achievement
  
  # The worlds where the achievement can be completed
  worlds:
    - world
  
  # Game modes where the achievement can be completed 
  game-modes:
    - SURVIVAL

  # Task-specific conditions
  materials:
    - APPLE
      
  # The tiers of the achievement
  tiers:
    
    # The first tier of the achievement
    '1':
      # The amount of progress required to complete the tier
      required-amount: 10
      
      # The amount of points the player will receive when completing the tier
      points: 25
      
      # The rewards the player will receive when completing the tier
      # Format: REWARD_TYPE:VALUE
      # Check the rewards documentation for more information
      rewards:
        - COMMAND:say {player} has completed the Eater achievement!
        - VAULT:100
        - EXPERIENCE:50
          
    # Other tiers of the achievement can be added below     
    '2':
      required-amount: 15
      points: 15
```