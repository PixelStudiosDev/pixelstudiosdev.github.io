# PlaceholderAPI

:::note
- `<required>` - Required argument<br/>
- `[optional]` - Optional argument
:::

| Placeholder                                                                     | Description                                                                          |
|---------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| `%achievements_points_[category]_[challenge/tiered]%`                           | Returns the points that a players has                                                |
| `%achievements_points_percentage_[category]_[challenge/tiered]%`                | Returns the percentage of points that a player has                                   |
| `%achievements_unlocked_[category]_[challenge/tiered]%`                         | Returns the number of achievements unlocked by a player                              |
| `%achievements_unlocked_percentage_[category]_[challenge/tiered]%`              | Returns the percentage of achievements unlocked by a player                          |
| `%achievements_achievement_<id>_<points/requirement/progress/unlocked>_[tier]%` | Returns information about an achievement.<br/>Tier defaults to `1` when unspecified. |
| `%achievements_tracked%`                                                        | Returns the number of achievements being tracked by a player                         |
| `%achievements_unclaimed%`                                                      | Returns the number of unclaimed rewards                                              |                                 