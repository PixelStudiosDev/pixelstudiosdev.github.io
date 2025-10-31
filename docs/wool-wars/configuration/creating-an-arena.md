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
lobby-location: urban:-10.25:35.0:7.54:90.62:-1.40
# The location of the spectator spawn point. (Format: world:x:y:z:yaw:pitch)
spectator-spawn: urban:-9.83:81.41:0.38:269.13:2.89
# The maximum amount of players allowed in a team.
max-players-per-team: 4
# The minimum amount of players required to start a match.
min-players: 8
# The amount of points required to win the match.
win-points: 3
# The two opposite corners of the arena. (Format: world:x:y:z:yaw:pitch)
arena:
  pos1: urban:45.19:75.27:-23.64:61.25:13.42
  pos2: urban:-68.06:17.16:34.48:244.38:3.93
# The two opposite corners of the center area: where the wool is placed. (Format: world:x:y:z:yaw:pitch)
center:
  pos1: urban:-16.0:34.0:6.0
  pos2: urban:-14.0:34.0:8.0
  
teams:
  # The team ID defined in teams.yml
  RED:
    # The spawn location of the team. (Format: world:x:y:z:yaw:pitch)
    spawn-location: urban:19.73:35.0:7.54:90.10:-0.19
    # The location of the kit selector NPC. (Format: world:x:y:z:yaw:pitch)
    npc-location: urban:0.16:77.0:27.04:357.11:10.91
    # The two opposite corners of the team's barrier. (Format: world:x:y:z:yaw:pitch)
    barrier:
      pos1: urban:15.0:35.0:0.0
      pos2: urban:15.0:50.0:14.0
    # The two opposite corners of the team's base. (Format: world:x:y:z:yaw:pitch)
    base:
      pos1: urban:15.70:33.0:-1.54:271.00:49.03
      pos2: urban:36.78:63.64:20.46:120.59:26.29
  BLUE:
    spawn-location: urban:-50.28:35.0:7.54:269.85:-1.32
    npc-location: urban:0.16:77.0:27.04:357.11:10.91    
    barrier:
      pos1: urban:-45.0:51.0:14.0
      pos2: urban:-45.0:35.0:0.0
    base:
      pos1: urban:-69.60:63.64:-9.26:307.20:10.80
      pos2: urban:-44.70:33.0:16.41:89.48:58.64
  # You aren't limited to 2 teams. You can add as many teams as you want.  

# The locations of the powerups. (Format: world:x:y:z:yaw:pitch)  
powerups:
  - urban:-14.69:32.0:-2.68:187.81:90.0
  - urban:-14.59:32.0:17.59:6.08:86.38
  - urban:-41.43:33.0:25.26:276.04:90.0
  - urban:-41.62:33.0:-10.56:187.35:90.0
  - urban:12.43:33.0:-10.54:277.92:90.0
  - urban:12.57:33.0:25.48:2.75:90.0
# Portals
portals:
  '1':
    pos1: urban:22.0:73.0:-4.0
    pos2: urban:22.0:79.0:4.0
    destination: urban:-18.46:73.0:0.54:-90.33:3.26
  '2':
    pos1: urban:-22.0:73.0:4.0
    pos2: urban:-22.0:79.0:-4.0
    destination: urban:20.54:73.0:0.49:-269.88:0.03
```