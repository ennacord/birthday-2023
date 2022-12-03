import Phaser from 'phaser';

import SplashScene from './splash';
import TeahouseScene from './teahouse';

import SpineImportedJson from '../assets/spine/imported.json';
import SpineImportedAtlas from '../assets/spine/imported.atlas?url';

import ImageAp1 from '../assets/images/ap1.png';
import ImageAp2 from '../assets/images/ap2.png';
import ImageBush from '../assets/images/bush.png';
import ImagePillars from '../assets/images/pillars.png';
import ImageTeaset from '../assets/images/teaset.png';

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

    // Images
    this.load.image('ap1', ImageAp1);
    this.load.image('ap2', ImageAp2);
    this.load.image('bush', ImageBush);
    this.load.image('pillars', ImagePillars);
    this.load.image('teaset', ImageTeaset);

    // Scenes
    this.scene.add('splash', SplashScene);
    this.scene.add('teahouse', TeahouseScene);
  }

  create() {
    this.scene.start('splash');
  }
}

export default IndexScene;
