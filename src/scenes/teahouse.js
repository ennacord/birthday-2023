import Phaser from 'phaser';

class TeaHouseScene extends Phaser.Scene {
  create() {
    const { width, height } = this.game.canvas;
    const centerX = width * 0.5;
    const centerY = height * 0.5;

    this.background = this.add.graphics();
    this.background.fillGradientStyle(0xcee0ed, 0xcee0ed, 0xffffff, 0xffffff);
    this.background.fillRect(0, 0, width, height);

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
        unlocked: false,
      },
    };

    // Fireworks Particles
    this.fireworks = this.add.particles('particles');
    this.confetti = this.add.particles('confetti').setDepth(1000);

    // Movable layers for parallax
    this.movables = [
      {
        origin: [width * 0.5, height * 0.63],
        obj: this.add.container(0, 0, [
          this.cloud3 = this.add.image(0, 0, 'cloud3').setScale(0.5),
        ]),
        str: 1.6,
      },
      {
        origin: [width * 0.5, height * 0.63],
        obj: this.add.container(0, 0, [
          this.cloud2 = this.add.image(0, 0, 'cloud2').setScale(0.5),
        ]),
        str: 1.2,
      },
      {
        origin: [width * 0.5, height * 0.63],
        obj: this.add.container(0, 0, [
          this.cloud1 = this.add.image(0, 0, 'cloud1').setScale(0.5),
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
          this.objCake = this.add.image(-100, 400, 'cake').setScale(0.82).setOrigin(0, 0).setAlpha(0),
        ]),
        str: -0.15,
      },
      {
        origin: [0, 0],
        obj: this.add.container(0, 0, [
          this.objTray = this.add.image(515, 330, 'tray').setScale(0.82).setOrigin(0, 0),
        ]),
        str: -0.15,
      },
      {
        origin: [0, 0],
        obj: this.add.container(0, 0, [
          this.objPot = this.add.image(815, 705, 'pot').setScale(0.7).setOrigin(0, 0),
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
                  this.tasks[key].text = this.add
                    .text(35, 0, text, { fontFamily: 'Pacifico', fontSize: 24, color: '#6b40a5' }),
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
                    this.checkQuestCompletion();
                  });
                } else {
                  // Cake
                  this.tasks[key].tick.setPosition(-5, 5).setFontSize(24).setText('🔒').setVisible(true);
                  this.tasks[key].text.setColor('#881a1a').setAlpha(0.5);
                  // Secret Event
                  hit.setInteractive({ useHandCursor: true }).on('pointerup', () => {
                    if (!this.tasks[key].unlocked) return;
                    if (this.tasks[key].cleared) return;
                    this.tasks[key].cleared = true;
                    this.secretEvent();
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

  checkQuestCompletion() {
    const allDone = Object.entries(this.tasks)
      .filter(([c]) => c !== 'cake')
      .reduce((c, [, {cleared}]) => c && cleared, true);
    if (allDone) {
      this.tasks.cake.unlocked = true;
      this.tasks.cake.tick
        .setPosition(0, 0)
        .setFontSize(30)
        .setFontStyle('bold')
        .setText('☆')
        .setColor('#336699')
        .setVisible(true);
      this.tasks.cake.text.setColor('#336699').setAlpha(1);
    }
  }

  secretEvent() {
    this.menupeepLand();
    // Remove tray and teapot
    this.add.tween({
      targets: [this.objTray, this.objPot],
      duration: 1000,
      x: -1000,
      alpha: { from: 1, to: 0 },
      ease: 'Back.easeIn',
    });
    // Slide in cake
    this.add.tween({
      targets: [this.objCake],
      duration: 3000,
      x: { from: -1000, to: 480 },
      alpha: { from: 0, to: 1 },
      delay: 1500,
      ease: 'Circ.easeOut',
    });
    // Enna animation change
    this.time.addEvent({
      delay: 5500,
      loop: false,
      callback: () => {
        this.enna.clearTrack(0);
        this.enna.addAnimation(0, 'Enna_wish', true);
      },
    });
    // Sky change
    const { width, height } = this.game.canvas;
    this.background.fillGradientStyle(0x8093bf, 0x8093bf, 0x2f467c, 0x2f467c);
    this.background.fillRect(0, 0, width, height);
    this.cloud1.setTint(0xa5b6dd);
    this.cloud2.setTint(0xa5b6dd);
    this.cloud3.setTint(0xa5b6dd);
    // Fireworks
    this.time.addEvent({
      delay: 500,
      loop: -1,
      callback: () => {
        this.fireworks.createEmitter({
          frame: ['orange', 'gold', 'red', 'silver'],
          x: Math.random() * width,
          y: Math.random() * 500,
          scale: { min: 0.2, max: 0.4 },
          alpha: { start: 1, end: 0 },
          lifespan: 1200,
          speed: { min: -300, max: 300 },
          blendMode: 'ADD',
          gravityY: 200,
        }).explode(20);
      },
    });
    // Confetti
    this.confetti.createEmitter({
      frame: ['1', '2', '3', '4', '5', '6', '7', '8'],
      x: { min: 0, max: 1920 },
      y: { min: -300, max: -30 },
      scale: 0.4,
      gravityX: -3,
      gravityY: 50,
      frequency: 100,
      lifespan: 7000,
      speed: { min: 3, max: 15 },
    });
  }
}

export default TeaHouseScene;
