import Phaser from 'phaser';
import { gameConfig } from '../Config/config';

export default class LoginScene extends Phaser.Scene {
  constructor() {
    super('Login');
  }

  preload() {
    this.load.html('nameform', 'assets/nameForm.html');
  }

  create() {
    const text = this.add.text(300, 10, 'Please enter your name', { color: 'white', fontSize: '30px' });
    const element = this.add.dom(400, 0).createFromCache('nameform');
    element.addListener('click');
    element.on('click', function (event) {
      if (event.target.name === 'playButton') {
        const inputText = this.getChildByName('nameField');
        if (inputText.value !== '') {
          this.removeListener('click');
          this.setVisible(false);
          text.setText(`player: ${inputText.value}`);
          gameConfig.user = inputText.value;
          window.game.scene.start('Title');
        } else {
          this.scene.tweens.add({
            targets: text,
            alpha: 0.2,
            duration: 250,
            ease: 'Power3',
            yoyo: true,
          });
        }
      }
    });
    this.tweens.add({
      targets: element,
      y: 300,
      duration: 3000,
      ease: 'Power3',
    });
  }
}