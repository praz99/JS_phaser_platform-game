import Phaser from 'phaser';
import { gameConfig } from '../Config/config';
import * as leaderBoard from '../leaderBoard';
import Button from '../Objects/Button';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  init (data) {
    this.username = data.user;
    this.finalScore = data.score;
  }

  preload() {
    
  }

  create() {
    leaderBoard.sendScore(this.username, this.finalScore);
    this.gameOverText = this.add.text(0, 0, 'Game Over', { fontSize: '32px', fill: '#fff' });
    this.scoreText = this.add.text(0, 0, `You scored: ${ this.finalScore }`, { fontSize: '26px', fill: '#fff' });
    this.zone = this.add.zone(gameConfig.width / 2, gameConfig.height / 2, gameConfig.width, gameConfig.height);

    this.restartButton = new Button(this, gameConfig.width / 2, gameConfig.height / 2 - 100, 'blueButton1', 'blueButton2', 'Play Again', 'Game');
    this.homeButton = new Button(this, gameConfig.width / 2, gameConfig.height / 2, 'blueButton1', 'blueButton2', 'Home', 'Login');
    this.leaderBoardButton = new Button(this, gameConfig.width / 2, gameConfig.height / 2 + 100, 'blueButton1', 'blueButton2', 'Leaderboard', 'Game');

    Phaser.Display.Align.In.Center(
      this.gameOverText,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      this.scoreText,
      this.zone,
    );

    this.scoreText.setY(1000);

    this.creditsTween = this.tweens.add({
      targets: this.gameOverText,
      y: -100,
      ease: 'Power1',
      duration: 3000,
      delay: 1000,
      onComplete() {
        this.destroy;
      },
    });

    this.madeByTween = this.tweens.add({
      targets: this.scoreText,
      y: -300,
      ease: 'Power1',
      duration: 8000,
      delay: 1000,
      onComplete: function () {
        this.madeByTween.destroy;
        // this.scene.start('Title');
      }.bind(this),
    });
  }
}