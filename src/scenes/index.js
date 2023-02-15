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

import AtlasParticlesPng from '../assets/atlas/particles.png';
import AtlasParticlesJson from '../assets/atlas/particles.json?url';
import AtlasConfettiPng from '../assets/atlas/confetti.png';
import AtlasConfettiJson from '../assets/atlas/confetti.json?url';

import ImageCloud1 from '../assets/images/cloud1.png';
import ImageCloud2 from '../assets/images/cloud2.png';
import ImageCloud3 from '../assets/images/cloud3.png';
import ImageCake from '../assets/images/cake.png';
import ImagePot from '../assets/images/pot.png';
import ImageTray from '../assets/images/tray.png';
import ImageCursor from '../assets/images/cursor.png';

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

    this.load.atlas('particles', AtlasParticlesPng, AtlasParticlesJson);
    this.load.atlas('confetti', AtlasConfettiPng, AtlasConfettiJson);

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
    // Cursor
    this.input.setDefaultCursor(`url(${ImageCursor}), auto`);
  
    this.scene.start('splash');
  }
}

export default IndexScene;
