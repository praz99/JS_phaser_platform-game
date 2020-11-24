/* eslint-disable no-unused-vars */

import Phaser from 'phaser';
import Button from '../Objects/Button';
import { showScore } from '../leaderBoard';
import { gameConfig } from '../Config/config';

export default class leaderBoardScene extends Phaser.Scene {
  constructor() {
    super('LeaderBoard');
  }

  create() {
    const leaderText = this.add.text(300, 100, 'TOP 5 SCORERS', { color: 'white', fontSize: '30px' });
    this.topScore();
    this.backButton = new Button(this, 350, gameConfig.height / 2 + 100, 'blueButton1', 'blueButton2', 'Back', 'GameOver');
  }

  async topScore() {
    const resultObject = await showScore();
    const scores = resultObject.result.sort((a, b) => ((a.score > b.score) ? -1 : 1));
    for (let i = 0; i < 5; i += 1) {
      const text = this.add.text(300, 200 + i * 40, `${scores[i].user}: ${scores[i].score}`, { color: 'white', fontFamily: 'monospace', fontSize: '25px' });
    }
  }
}

/* eslint-enable no-unused-vars */