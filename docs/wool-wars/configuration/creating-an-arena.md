# Creating an Arena

## Interactive Setup

1. Run the command `/woolwars setup <id>` to start the setup process.
2. A GUI will open: <br/>

	![](/img/setup.png)

3. Complete all the steps and click the emerald block to save the arena.
4. You can now join the arena using the command `/woolwars join <id>`.

## Manually editing an arena configuration

Here you can find an explained version of an arena configuration file:

```yaml title="example.yml"
# The displayed name of the arena
displayname: Urban

# The group of the arena. This is used for the /woolwars join <group> command and for some placeholders.
group: 4v4

# The location of the waiting lobby. (Format: world:x:y:z:yaw:pitch)
lobby-location: urban:-10.246799445222704:35.0:7.537029879923992:90.62368:-1.4038824

# The maximum amount of players allowed in a team.
max-players-per-team: 4

# The minimum amount of players required to start a match.
min-players: 8

# The amount of points required to win the match.
win-points: 3

# The two opposite corners of the arena. (Format: world:x:y:z:yaw:pitch)
arena:
  pos1: urban:45.18659910545357:75.26937512731548:-23.637419056945376:61.245728:13.4217415
  pos2: urban:-68.06385957460992:17.16326849838637:34.48349152753095:244.38086:3.927539

# The two opposite corners of the center area: where the wool is placed. (Format: world:x:y:z:yaw:pitch)
center:
  pos1: urban:-16.0:34.0:6.0
  pos2: urban:-14.0:34.0:8.0


teams:

  # The team color. (Available colors: RED-BLUE-GREEN-YELLOW-AQUA-WHITE-PINK-GRAY-DARK_GREEN-PURPLE-ORANGE-DARK_GRAY-DARK_AQUA)
  RED:

    # The team name.
    name: Red

    # The spawn location of the team. (Format: world:x:y:z:yaw:pitch)
    spawn-location: urban:19.726533254889375:35.0:7.535394896518646:90.1001:-0.19494508

    # The two opposite corners of the team's barrier. (Format: world:x:y:z:yaw:pitch)
    barrier:
      pos1: urban:15.0:35.0:0.0
      pos2: urban:15.0:50.0:14.0

    # The two opposite corners of the team's base. (Format: world:x:y:z:yaw:pitch)
    base:
      pos1: urban:15.699999988079082:33.0:-1.537473589165458:270.99573:49.02512
      pos2: urban:36.78390094835717:63.64437466524372:20.455237034269178:120.58618:26.289003

  BLUE:
    name: Blue
    spawn-location: urban:-50.28451168147723:35.0:7.540310771710887:269.84784:-1.3192612
    barrier:
      pos1: urban:-45.0:51.0:14.0
      pos2: urban:-45.0:35.0:0.0
    base:
      pos1: urban:-69.60219328899193:63.64437466524372:-9.262688721402766:307.1952:10.79843
      pos2: urban:-44.69999998807907:33.0:16.410240841139277:89.48328:58.644215

  # You aren't limited to 2 teams. You can add as many teams as you want.		  

# The locations of the powerups. (Format: world:x:y:z:yaw:pitch)	  
powerups:
  - urban:-14.69482314273969:32.0:-2.676415134016782:187.81433:90.0
  - urban:-14.591850157292582:32.0:17.59402242090085:6.083618:86.37721
  - urban:-41.425202197928876:33.0:25.26048742644185:276.04462:90.0
  - urban:-41.620314881907355:33.0:-10.559345699435298:187.34906:90.0
  - urban:12.426240282389438:33.0:-10.539807015025715:277.92224:90.0
  - urban:12.565456659400164:33.0:25.477387273628626:2.7470703:90.0
```