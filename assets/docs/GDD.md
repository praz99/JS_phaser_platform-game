## Game Development
- This game has been developed in various stages. First of all, the basic knowledge about phaser 3 library, its instruction sets and working mechanish was obtained by visiting the [phaser](https://phaser.io/) website, [phaser tutorials](https://phaser.io/tutorials/getting-started-phaser3), and [phaser documentation](https://photonstorm.github.io/phaser3-docs/).  
- The basic concept for this game has been take from [this](https://www.emanueleferonato.com/tag/endless-runner/) tutorial.

- The game was developed in 5 working days in following pattern:

  - Day 1: Learning about Phaser Library, following the tutorials, setup development environment and creating a basic template for the game.
  - Day 2: Dsigning game, collecting the assets and writing this GDD.
  - Day 3: Creating various scenes such as boot scene, preloader scene, title scene etc. for the project including the main game scene and adding player.
  - Day 4: Making the player jump, double jump and adding fire as obstacle and coins as collectable items.
  - Day 5: Prepare leaderbaord feature with leaderboard API, testing game, fixing bugs and deployment.

### Game Levels
- There are not any specific levels in the game, since it is the infinite runner game, the player is expected to run as far as possible jumping over the platforms, dodging the obstacles(fires) and collecting the coins.

### Assets
- The assets used in this game (sound effects, background music, animation sprites) have been take from [OpenGameArt](https://opengameart.org/) and [Game Art 2D](https://www.gameart2d.com/freebies.html).

### Template

- The basic template of this game following the sequence of BootScene, PreloaderScene, LoginScene, TitleScene, OptionsScene, CreditsScene, GameScene, GameOverScene, and LeaderBoardScene has been implemented following [this](https://phasertutorials.com/creating-a-phaser-3-template-part-1/) tutorial.

### Login
- The implement the Login feature, [this](https://labs.phaser.io/view.html?src=src%5Cgame%20objects%5Cdom%20element%5Cinput%20test.js) tutorial has been followed.

### API
- The Score submission and LeaderBoard retrival feature has been implemented using [this](https://www.notion.so/Leaderboard-API-service-24c0c3c116974ac49488d4eb0267ade3) API service.