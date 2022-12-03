import Phaser from 'phaser';

class TeaHouseScene extends Phaser.Scene {
  create() {
    const { width, height } = this.game.canvas;
    const centerX = width * 0.5;
    const centerY = height * 0.5;

    const background = this.add.graphics();
    background.fillStyle(0xfff8ff);
    background.fillRect(0, 0, width, height);

    this.movables = [
      {
        obj: this.add.container(0, 0, [this.add.image(0, 0, 'bush').setOrigin(0, 0)]),
        str: 0.2,
      },
      {
        obj: this.add.container(0, 0, [this.add.image(0, 0, 'pillars').setOrigin(0, 0)]),
        str: 0.4,
      },
      {
        obj: this.add.container(0, 0, [this.add.spine(width * 0.5, height, 'enna')]),
        str: 0,
      },
      {
        obj: this.add.container(0, 0, [this.add.image(0, -height * 0.1, 'teaset').setOrigin(0, 0)]),
        str: -0.2,
      },
      {
        obj: this.add.container(0, 0, [this.add.image(0, -height * 0.1, 'ap2').setOrigin(0, 0)]),
        str: -0.3,
      },
      {
        obj: this.add.container(0, 0, [this.add.image(0, height * 0.1, 'ap1').setOrigin(0, 0)]),
        str: -0.4,
      },
    ];

    this.input.on('pointermove', (pointer) => {
      const dx = pointer.x - centerX;
      const dy = pointer.y - centerY;
      this.movables.forEach(({ obj, str }) => {
        const newX = (dx * 0.05) * str;
        const newY = (dy * 0.03) * str;
        obj.setPosition(newX, newY);
      });
    });
  }
}

export default TeaHouseScene;
