import './style.css';

import Phaser from 'phaser';
// import scene from './scenes';
// import plugins from './plugins';

// Phaser Game Instance
// eslint-disable-next-line no-new
new Phaser.Game({
  type: Phaser.AUTO,
  parent: 'game',
  banner: false,
  disableContextMenu: true,
  backgroundColor: Phaser.Display.Color.HexStringToColor('#d0d0d0').color,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1920,
    height: 937,
  },
  // plugins,
  // scene,
});
