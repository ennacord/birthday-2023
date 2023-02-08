import Phaser from 'phaser';

import SplashScene from './splash';
import TeahouseScene from './teahouse';

import SpineEnnaJson from '../assets/spine/ennatable.json';
import SpineEnnaAtlas from '../assets/spine/ennatable.atlas?url';
import SpineMenupeepJson from '../assets/spine/menupeep.json';
import SpineMenupeepAtlas from '../assets/spine/menupeep.atlas?url';
import SpineTwerkpeepJson from '../assets/spine/twerkpeep.json';
import SpineTwerkpeepAtlas from '../assets/spine/twerkpeep.atlas?url';
import SpineBgitemsJson from '../assets/spine/bgitems.json';
import SpineBgitemsAtlas from '../assets/spine/bgitems.atlas?url';

import ImageCloud1 from '../assets/frames/cloud1.png';
import ImageCloud2 from '../assets/frames/cloud2.png';
import ImageCloud3 from '../assets/frames/cloud3.png';
import ImageCake from '../assets/frames/cake.png';
import ImagePot from '../assets/frames/pot.png';
import ImageTray from '../assets/frames/tray.png';

class IndexScene extends Phaser.Scene {
  preload() {
    const { width, height } = this.game.canvas;

    const background = this.add.graphics();
    background.fillStyle(0xfff7f9);
    background.fillRect(0, 0, width, height);

    // Google Fonts
    this.load.rexWebFont({
      google: { families: ['Pacifico'] },
      testString: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 1234567890 !@#$%^&*()-_=+[{]}\\|;:\'",<.>/?',
    });

    // Spine
    this.load.spine('enna', SpineEnnaJson, [SpineEnnaAtlas], true);
    this.load.spine('menupeep', SpineMenupeepJson, [SpineMenupeepAtlas], true);
    this.load.spine('twerkpeep', SpineTwerkpeepJson, [SpineTwerkpeepAtlas], true);
    this.load.spine('bgitems', SpineBgitemsJson, [SpineBgitemsAtlas], true);

    this.load.image('cloud1', ImageCloud1);
    this.load.image('cloud2', ImageCloud2);
    this.load.image('cloud3', ImageCloud3);
    this.load.image('cake', ImageCake);
    this.load.image('pot', ImagePot);
    this.load.image('tray', ImageTray);

    // Scenes
    this.scene.add('splash', SplashScene);
    this.scene.add('teahouse', TeahouseScene);
  }

  create() {
    this.scene.start('splash');
  }
}

export default IndexScene;
