import Phaser from 'phaser';

class SplashScene extends Phaser.Scene {
  create() {
    const { width, height } = this.game.canvas;

    const background = this.add.graphics();
    background.fillStyle(0xfff7f9);
    background.fillRect(0, 0, width, height);

    this.add.text(0, height * 0.45, 'Happy Bithday Enna Alouette!', {
      fontFamily: 'Pacifico',
      fontSize: 50,
      align: 'center',
      fixedWidth: width,
      color: '#bc517c',
      stroke: '#f3c9d4',
      strokeThickness: 5,
    });

    this.add.text(0, height * 0.55, 'Touch to start the tea party...', {
      fontFamily: 'Pacifico',
      fontSize: 30,
      align: 'center',
      fixedWidth: width,
      color: '#bc517c',
    });

    this.add.text(0, height - 30, 'WEBGL MODE', {
      fontFamily: 'Arial',
      fontSize: 16,
      align: 'center',
      fixedWidth: width,
      color: '#bc517c',
    });

    this.input.once('pointerdown', () => {
      this.scene.start('teahouse');
    });
  }
}

export default SplashScene;
