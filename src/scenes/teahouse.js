import Phaser from 'phaser';

class TeaHouseScene extends Phaser.Scene {
  create() {
    const { width, height } = this.game.canvas;
    const centerX = width * 0.5;
    const centerY = height * 0.5;

    const background = this.add.graphics();
    background.fillGradientStyle(0xcee0ed, 0xcee0ed, 0xffffff, 0xffffff);
    background.fillRect(0, 0, width, height);

    this.cameras.main.fadeIn(2000, 255, 247, 249);

    // Tasks
    this.tasks = {
      messages: {
        text: 'Messages',
        cleared: false,
        tick: null,
      },
      mural: {
        text: 'Mural',
        cleared: false,
        tick: null,
      },
      blessing: {
        text: 'Blessing MV',
        cleared: false,
        tick: null,
      },
      cookbook: {
        text: 'Cookbook',
        cleared: false,
        tick: null,
      },
      button: {
        text: 'Enna Button',
        cleared: false,
        tick: null,
      },
      vnteaser: {
        text: 'VN Teaser',
        cleared: false,
        tick: null,
      },
      cake: {
        text: 'Secret Event',
        cleared: false,
        tick: null,
      },
    };

    // Movable layers for parallax
    this.movables = [
      {
        origin: [width * 0.5, height * 0.63],
        obj: this.add.container(0, 0, [
          this.add.image(0, 0, 'cloud3').setScale(0.5),
        ]),
        str: 1.6,
      },
      {
        origin: [width * 0.5, height * 0.63],
        obj: this.add.container(0, 0, [
          this.add.image(0, 0, 'cloud2').setScale(0.5),
        ]),
        str: 1.2,
      },
      {
        origin: [width * 0.5, height * 0.63],
        obj: this.add.container(0, 0, [
          this.add.image(0, 0, 'cloud1').setScale(0.5),
        ]),
        str: 0.8,
      },
      {
        origin: [width * 0.5, height * 1.125],
        obj: this.add.container(0, 0, [
          this.bgitems = this.add.spine(0, 0, 'bgitems').setScale(0.49),
        ]),
        str: 0.3,
      },
      {
        origin: [(width * 0.5) + 60, (height * 1.11) + 20],
        obj: this.add.container(0, 0, [
          this.enna = this.add.spine(0, 0, 'enna').setScale(0.51),
        ]),
        str: -0.1,
      },
      {
        origin: [0, 0],
        obj: this.add.container(0, 0, [
          this.twekpeep = this.add.spine(1600, 900, 'twerkpeep').setScale(0.41),
        ]),
        str: -0.15,
      },
      {
        origin: [0, 0],
        obj: this.add.container(0, 0, [
          this.add.image(515, 330, 'tray').setScale(0.82).setOrigin(0, 0),
        ]),
        str: -0.15,
      },
      {
        origin: [0, 0],
        obj: this.add.container(0, 0, [
          this.add.image(815, 705, 'pot').setScale(0.7).setOrigin(0, 0),
        ]),
        str: -0.18,
      },
      this.menupeepLayer = {
        origin: [0, 0],
        obj: this.add.container(0, 0, [
          this.menu = this.add.container(210, 540, [
            this.menupeep = this.add.spine(80, 575, 'menupeep').setScale(0.4),
            this.menuTasks = this.add.container(0, 0, Object.entries(this.tasks)
              .map(([key, { text }], i) => {
                let hit;
                const entry = this.add.container(0, 40 * i, [
                  hit = this.add.rectangle(0, 0, 190, 39, 0xff0000, 0).setOrigin(0, 0),
                  this.add.text(35, 0, text, { fontFamily: 'Pacifico', fontSize: 24, color: '#6b40a5' }),
                  this.tasks[key].tick = this.add
                    .text(-5, -10, '✓', { fontFamily: 'Arial', fontSize: 50, color: '#33aa33' })
                    .setVisible(false),
                ]);
                if (key !== 'cake') {
                  hit.setInteractive({ useHandCursor: true }).on('pointerup', () => {
                    this.tasks[key].cleared = true;
                    this.tasks[key].tick.setVisible(true);
                    this.game.vue.onProject({ key });
                    this.menupeepLand();
                  });
                }
                return entry;
              })
              .concat([
                this.add.rectangle(0, -230, 190, 200, 0xff0000, 0)
                  .setOrigin(0, 0)
                  .setInteractive({ useHandCursor: true })
                  .on('pointerdown', () => {
                    this.menupeepLand();
                  }),
              ])
            )
            .setVisible(false).setAngle(-4),
          ]),
        ]).setScale(1.05),
        str: -0.23,
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
        const newX = origin[0] + (dx * 0.04) * str;
        const newY = origin[1] + (dy * 0.07) * str;
        obj.setPosition(newX, newY);
      });
    });

    // Other animations
    this.twekpeep.addAnimation(0, 'TwerkPeep_Twerk', true);
    this.bgitems.addAnimation(0, 'animation', true);
    this.enna.addAnimation(0, 'Enna_idle', true);

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

    // const menuPeepHover = this.add.tween({
    //   targets: this.menu,
    //   y: { from: this.menu.y, to: this.menu.y - 10 },
    //   duration: 670,
    //   yoyo: true,
    //   loop: -1,
    // });
    // menuPeepHover.pause();

    this.menupeep.setInteractive({ useHandCursor: true }).on('pointerdown', () => {
      if (this.menuPeepTrn) return;
      if (this.menuPeepFly) return;
      this.menuPeepFly = true;
      this.menuPeepTrn = true;
      this.menupeep.clearTrack(1);
      this.menupeep.addAnimation(1, 'MenuPeep_hoverUp', true);
      // this.menupeepLayer.str = -0.6;
      this.add.tween({
        targets: this.menupeep,
        y: { from: this.menupeep.y, to: this.menupeep.y - 270 },
        duration: 900,
        ease: 'Back.easeOut',
        onComplete: () => {
          this.menupeep.clearTrack(2);
          this.menupeep.addAnimation(2, 'MenuPeep_ShowMenu');
          setTimeout(() => {
            this.menuTasks.setVisible(true);
            this.menuPeepTrn = false;
          }, 300);
          // menuPeepHover.play().resume();
        },
      });
    });
  }

  menupeepLand() {
    this.menuPeepFly = false;
    this.menuPeepTrn = true;
    this.menuTasks.setVisible(false);
    this.menupeep.clearTrack(2);
    this.menupeep.addAnimation(2, 'MenuPeep_HideMenu');
    // menuPeepHover.pause();
    this.add.tween({
      targets: this.menupeep,
      y: { from: this.menupeep.y, to: this.menupeep.y + 270 },
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
  }
}

export default TeaHouseScene;
