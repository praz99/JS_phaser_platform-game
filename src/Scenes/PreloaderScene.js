import Phaser from 'phaser';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  init() {
    this.readyCount = 0;
  }

  preload() {
    // add logo image
    this.add.image(400, 200, 'logo');

    // display progress bar
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    assetText.setOrigin(0.5, 0.5);

    // update progress bar
    this.load.on('progress', (value) => {
      percentText.setText(`${parseInt(value * 100)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    // update file progress text
    this.load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset: ${file.key}`);
    });

    // remove progress bar when complete
    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    });

    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);

    // load assets needed in our game
    this.load.image('blueButton1', 'assets/ui/blue-button.png');
    this.load.image('blueButton2', 'assets/ui/blue-button-2.png');
    this.load.image('box', 'assets/ui/grey_box.png');
    this.load.image('checkedBox', 'assets/ui/blue_boxCheckmark.png');

    this.load.image('platform', 'assets/platform.png');
    // player is a sprite sheet made by 52.26x48 pixels
    this.load.spritesheet('player_run', 'assets/player_run.png', {
      frameWidth: 52.26,
      frameHeight: 48,
    });

    this.load.spritesheet('player_jump', 'assets/player_jump.png', {
      frameWidth: 52.26,
      frameHeight: 48,
    });

    this.load.spritesheet('player_dead', 'assets/player_dead.png', {
      frameWidth: 52.26,
      frameHeight: 48,
    });

    // the coin is a sprite sheet made by 20x20 pixels
    this.load.spritesheet('coin', 'assets/coin.png', {
      frameWidth: 20,
      frameHeight: 20,
    });

    // the firecamp is a sprite sheet made by 32x58 pixels
    this.load.spritesheet('fire', 'assets/fire.png', {
      frameWidth: 40,
      frameHeight: 70,
    });

    // mountains are a sprite sheet made by 512x512 pixels
    this.load.spritesheet('mountain', 'assets/mountain.png', {
      frameWidth: 512,
      frameHeight: 512,
    });
    this.load.audio('bgMusic', ['assets/sound/TownTheme.mp3']);
    this.load.audio('pickup', ['assets/sound/pickup.mp3']);
    this.load.audio('dead', ['assets/sound/dead.mp3']);
  }

  create() {
    // setting player running animation
    this.anims.create({
      key: 'run',
      frames: this.anims.generateFrameNumbers('player_run', {
        start: 0,
        end: 14,
      }),
      frameRate: 20,
      repeat: -1,
    });

    // setting player jumping animation
    this.anims.create({
      key: 'jump',
      frames: this.anims.generateFrameNumbers('player_jump', {
        start: 0,
        end: 14,
      }),
      frameRate: 15,
      repeat: 0,
    });

    // setting player dead animation
    this.anims.create({
      key: 'dead',
      frames: this.anims.generateFrameNumbers('player_dead', {
        start: 0,
        end: 14,
      }),
      frameRate: 15,
      repeat: 0,
    });

    // setting coin animation
    this.anims.create({
      key: 'rotate',
      frames: this.anims.generateFrameNumbers('coin', {
        start: 0,
        end: 5,
      }),
      frameRate: 15,
      yoyo: true,
      repeat: -1,
    });

    // setting fire animation
    this.anims.create({
      key: 'burn',
      frames: this.anims.generateFrameNumbers('fire', {
        start: 0,
        end: 4,
      }),
      frameRate: 15,
      repeat: -1,
    });
  }

  ready() {
    this.scene.start('Login');
    this.readyCount += 1;
    if (this.readyCount === 2) {
      this.scene.start('Login');
    }
  }
}
