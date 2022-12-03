import 'phaser/plugins/spine/dist/SpinePlugin';
import WebFontLoaderPlugin from 'phaser3-rex-plugins/plugins/webfontloader-plugin';

export default {
  global: [
    {
      key: 'rexWebFontLoader',
      plugin: WebFontLoaderPlugin,
      start: true,
    },
  ],
  scene: [
  ],
};
