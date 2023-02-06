/* eslint-disable import/no-unresolved */
import Phaser from 'phaser';

import SplashScene from './splash';
import TeahouseScene from './teahouse';

import SpineImportedJson from '../assets/spine/imported.json';
import SpineImportedAtlas from '../assets/spine/imported.atlas?url';
import SpineMenupeepJson from '../assets/spine/menupeep.json';
import SpineMenupeepAtlas from '../assets/spine/menupeep.atlas?url';
import SpineTwerkpeepJson from '../assets/spine/twerkpeep.json';
import SpineTwerkpeepAtlas from '../assets/spine/twerkpeep.atlas?url';
import SpineBgitemsJson from '../assets/spine/bgitems.json';
import SpineBgitemsAtlas from '../assets/spine/bgitems.atlas?url';

import ImageBush from '../assets/images/bush.png';
import ImagePillars from '../assets/images/pillars.png';

import ImageCake from '../assets/frames/cake.png';
import ImagePot from '../assets/frames/pot.png';
import ImageTray from '../assets/frames/tray.png';

class IndexScene extends Phaser.Scene {
  preload() {
    const { width, height } = this.game.canvas;

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

    // Spine
    this.load.spine('enna', SpineImportedJson, [SpineImportedAtlas], true);
    this.load.spine('menupeep', SpineMenupeepJson, [SpineMenupeepAtlas], true);
    this.load.spine('twerkpeep', SpineTwerkpeepJson, [SpineTwerkpeepAtlas], true);
    this.load.spine('bgitems', SpineBgitemsJson, [SpineBgitemsAtlas], true);

    // Images
    // this.load.image('ap1', ImageAp1);
    // this.load.image('ap2', ImageAp2);
    this.load.image('bush', ImageBush);
    this.load.image('pillars', ImagePillars);
    // this.load.image('teaset', ImageTeaset);

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
