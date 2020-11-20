import 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }

  preload () {
    // load images
    this.load.image('ph_logo', 'assets/logo.png');
  }

  create () {
    this.add.image(400, 300, 'ph_logo');
  }
};
