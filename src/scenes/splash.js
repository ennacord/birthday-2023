import Phaser from 'phaser';

class SplashScene extends Phaser.Scene {
  create() {
    const { width, height } = this.game.canvas;

    const background = this.add.graphics();
    background.fillStyle(0xf0f0f0);
    background.fillRect(0, 0, width, height);

    // Click to start, to be enabled later on
    // this.add.text((width * 0.5) - 200, height * 0.6, 'CLICK TO START', {
    //   fontFamily: 'Zen Maru Gothic',
    //   fontStyle: 'bold',
    //   fontSize: 40,
    //   align: 'center',
    //   fixedWidth: 400,
    //   color: '#ffffff',
    //   stroke: '#000000',
    //   strokeThickness: 5,
    // });

    // this.input.once('pointerdown', () => {
    //   this.scene.start('teahouse');
    // });

    this.scene.start('teahouse');
  }
}

export default SplashScene;
