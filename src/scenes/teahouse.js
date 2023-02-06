import Phaser from 'phaser';

class TeaHouseScene extends Phaser.Scene {
  create() {
    const { width, height } = this.game.canvas;
    const centerX = width * 0.5;
    const centerY = height * 0.5;

    const background = this.add.graphics();
    background.fillStyle(0xfff8ff);
    background.fillRect(0, 0, width, height);

    // Movable layers for parallax
    this.movables = [
      {
        origin: [-30, 0],
        obj: this.add.container(0, 0, [
          this.add.image(0, 0, 'bush').setScale(1.3).setOrigin(0, 0),
        ]),
        str: 0.6,
      },
      {
        origin: [width * 0.5, height * 1.1],
        obj: this.add.container(0, 0, [
          this.bgitems = this.add.spine(0, 0, 'bgitems').setScale(0.5),
        ]),
        str: 0.3,
      },
      {
        origin: [0, 0],
        obj: this.add.container(0, 0, [
          this.add.spine(width * 0.5, height + 10, 'enna'),
        ]),
        str: 0.2,
      },
      {
        origin: [0, 0],
        obj: this.add.container(0, 0, [
          this.add.image(480, 300, 'tray').setScale(0.85).setOrigin(0, 0),
        ]),
        str: 0.16,
      },
      {
        origin: [0, 0],
        obj: this.add.container(0, 0, [
          this.add.image(800, 600, 'pot').setOrigin(0, 0),
        ]),
        str: 0.12,
      },
      {
        origin: [0, 0],
        obj: this.add.container(0, 0, [
          this.twekpeep = this.add.spine(1400, 920, 'twerkpeep').setScale(0.4),
        ]),
        str: 0.1,
      },
      this.menupeepLayer = {
        origin: [0, 0],
        obj: this.add.container(0, 0, [
          this.menu = this.add.container(0, 20, [
            this.menupeep = this.add.spine(320, 1100, 'menupeep').setScale(0.4),
            this.menuTasks = this.add.container(240, 490, [
              this.add.text(0, 0, 'Task 1', { fontFamily: 'Arial', fontSize: 24, color: '#000000' }),
              this.add.text(0, 40, 'Task 2', { fontFamily: 'Arial', fontSize: 24, color: '#000000' }),
              this.add.text(0, 80, 'Task 3', { fontFamily: 'Arial', fontSize: 24, color: '#000000' }),
              this.add.text(0, 120, 'Task 4', { fontFamily: 'Arial', fontSize: 24, color: '#000000' }),
              this.add.text(0, 160, 'Task 5', { fontFamily: 'Arial', fontSize: 24, color: '#000000' }),
              this.add.text(0, 200, 'Task 6', { fontFamily: 'Arial', fontSize: 24, color: '#000000' }),
            ]).setVisible(false).setAngle(-4),
          ]),
        ]),
        str: 0.1,
      },
    ];

    // Initial positions
    const { x: px, y: py } = this.input;
    this.movables.forEach(({ origin, obj, str }) => {
      const newX = origin[0] + ((px - centerX) * 0.05) * str;
      const newY = origin[1] + ((py - centerY) * 0.03) * str;
      obj.setPosition(newX, newY);
    });

    // Parallax
    this.input.on('pointermove', (pointer) => {
      const dx = pointer.x - centerX;
      const dy = pointer.y - centerY;
      this.movables.forEach(({ origin, obj, str }) => {
        const newX = origin[0] + (dx * 0.05) * str;
        const newY = origin[1] + (dy * 0.03) * str;
        obj.setPosition(newX, newY);
      });
    });

    // Other animations
    this.twekpeep.addAnimation(0, 'TwerkPeep_Twerk', true);
    this.bgitems.addAnimation(0, 'animation', true);

    // Menu Peep Animations
    // 0 MenuPeep_blink
    // 0 MenuPeep_blinkSmile
    // 1 MenuPeep_hover
    // 1 MenuPeep_hoverUp
    this.menuPeepFly = false;
    this.menuPeepTrn = false;
    this.menupeep.addAnimation(0, 'MenuPeep_blink', true);
    this.menupeep.addAnimation(1, 'MenuPeep_hover', true);
    this.menupeep.addAnimation(2, 'MenuPeep_NoMenu');

    const menuPeepHover = this.add.tween({
      targets: this.menu,
      y: { from: this.menu.y, to: this.menu.y - 10 },
      duration: 670,
      yoyo: true,
      loop: -1,
    });
    menuPeepHover.pause();

    this.menupeep.setInteractive({ useHandCursor: true }).on('pointerdown', () => {
      if (this.menuPeepTrn) return;
      if (this.menuPeepFly) {
        this.menuPeepFly = false;
        this.menuPeepTrn = true;
        this.menuTasks.setVisible(false);
        this.menupeep.clearTrack(1);
        this.menupeep.addAnimation(1, 'MenuPeep_hoverUp', true);
        this.menupeep.addAnimation(2, 'MenuPeep_HideMenu');
        menuPeepHover.pause();
        this.add.tween({
          targets: this.menupeep,
          y: { from: 800, to: 1100 },
          duration: 1000,
          ease: 'Circ.easeInOut',
          onComplete: () => {
            this.menupeep.clearTrack(1);
            this.menupeep.addAnimation(1, 'MenuPeep_hover', true);
            this.menupeep.clearTrack(2);
            // this.menupeepLayer.str = 0.1;
            this.menuPeepTrn = false;
          },
        });
      } else {
        this.menuPeepFly = true;
        this.menuPeepTrn = true;
        this.menupeep.clearTrack(1);
        this.menupeep.addAnimation(1, 'MenuPeep_hoverUp', true);
        // this.menupeepLayer.str = -0.6;
        this.add.tween({
          targets: this.menupeep,
          y: { from: 1100, to: 800 },
          duration: 1000,
          ease: 'Back.easeOut',
          onComplete: () => {
            this.menupeep.clearTrack(1);
            this.menupeep.clearTrack(2);
            this.menupeep.addAnimation(1, 'MenuPeep_hover', true);
            this.menupeep.addAnimation(2, 'MenuPeep_ShowMenu');
            this.menuTasks.setVisible(true);
            menuPeepHover.play().resume();
            this.menuPeepTrn = false;
          },
        });
      }
    });
  }
}

export default TeaHouseScene;
