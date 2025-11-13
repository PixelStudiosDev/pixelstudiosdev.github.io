# PlaceholderAPI

:::note
- `<required>` - Required argument<br/>
- `[optional]` - Optional argument
:::

| Placeholder                                                                                           | Description                                                                          |
|-------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| `%achievements_points_[category]_[challenge/tiered]%`                                                 | The player's points in a category.                                                   |
| `%achievements_points_percentage_[category]_[challenge/tiered]%`                                      | The player's points percentage in a category.                                        |
| `%achievements_points_total_[category]_[challenge/tiered]%`                                           | Total points available in a category.                                                |
| `%achievements_unlocked_[category]_[challenge/tiered]%`                                               | Number of achievements unlocked by the player.                                       |
| `%achievements_unlocked_percentage_[category]_[challenge/tiered]%`                                    | Percentage of achievements unlocked by the player.                                   |
| `%achievements_total_[category]_[challenge/tiered]%`                                                  | Total number of achievements in a category.                                          |
| `%achievements_achievement_<id>_`<br/>`<points/requirement/progress/percentage/bar/unlocked>_[tier]%` | Information about a specific achievement.<br/>Tier defaults to `1` when unspecified. |
| `%achievements_tracked%`                                                                              | Number of achievements the player is tracking.                                       |
| `%achievements_unclaimed%`                                                                            | Number of unclaimed rewards.                                                         |