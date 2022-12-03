import Phaser from 'phaser';

class TeaHouseScene extends Phaser.Scene {
  create() {
    const { width, height } = this.game.canvas;

    const background = this.add.graphics();
    background.fillStyle(0xfff8ff);
    background.fillRect(0, 0, width, height);

    this.add.image(0, 0, 'bush').setOrigin(0, 0);
    this.add.image(0, 0, 'pillars').setOrigin(0, 0);
    this.add.spine(width * 0.5, height, 'enna');
    this.add.image(0, -height * 0.1, 'teaset').setOrigin(0, 0);
    this.add.image(0, -height * 0.1, 'ap2').setOrigin(0, 0);
    this.add.image(0, height * 0.1, 'ap1').setOrigin(0, 0);
  }
}

export default TeaHouseScene;
