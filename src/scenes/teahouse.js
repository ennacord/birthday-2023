import Phaser from 'phaser';

class TeaHouseScene extends Phaser.Scene {
  create() {
    const { width, height } = this.game.canvas;

    // Background
    const background = this.add.graphics();
    background.fillStyle(0xfff8ff);
    background.fillRect(0, 0, width, height);

    this.add.text((width * 0.5) - 200, (height * 0.5) - 10, 'TEAHOUSE', {
      fontFamily: 'Zen Maru Gothic',
      fontStyle: 'bold',
      fontSize: 30,
      align: 'center',
      fixedWidth: 400,
      color: '#ffffff',
      stroke: '#000000',
      strokeThickness: 5,
    });
  }
}

export default TeaHouseScene;
