import Phaser from 'phaser';

import SplashScene from './splash';
import TeahouseScene from './teahouse';

class IndexScene extends Phaser.Scene {
  preload() {
    const { width, height } = this.game.canvas;

    // Background
    const background = this.add.graphics();
    background.fillStyle(0xf0f0f0);
    background.fillRect(0, 0, width, height);

    // Loading text
    this.add.text((width * 0.5) - 150, (height * 0.5) - 10, 'Loading...', {
      fontFamily: 'Arial, Helvetica, sans-serif',
      fontSize: 30,
      align: 'center',
      fixedWidth: 300,
      color: '#000000',
    });

    // Google Fonts
    this.load.rexWebFont({
      google: { families: ['Zen Maru Gothic'] },
      testString: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 1234567890 !@#$%^&*()-_=+[{]}\\|;:\'",<.>/?',
    });

    // Scenes
    this.scene.add('splash', SplashScene);
    this.scene.add('teahouse', TeahouseScene);
  }

  create() {
    this.scene.start('splash');
  }
}

export default IndexScene;
