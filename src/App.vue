<template>
  <div>
    <div id="game"></div>
  </div>
</template>

<script>
import Phaser from 'phaser';
import scene from './scenes';
import plugins from './plugins';
export default {
  mounted() {
    // eslint-disable-next-line no-new
    new Phaser.Game({
      type: Phaser.WEBGL,
      parent: 'game',
      banner: false,
      backgroundColor: Phaser.Display.Color.HexStringToColor('#d0d0d0').color,
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 937,
      },
      plugins,
      scene,
    });
  }
}
</script>

<style lang="scss" scoped>

</style>
