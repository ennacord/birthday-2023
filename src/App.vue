<template>
  <div>
    <div id="game"></div>
    <v-dialog v-model="show_messages">
      <div class="dialog">messages</div>
    </v-dialog>
    <v-dialog v-model="show_mural">
      <div class="dialog">mural</div>
    </v-dialog>
    <v-dialog v-model="show_blessing">
      <div class="dialog">blessing</div>
    </v-dialog>
    <v-dialog v-model="show_cookbook">
      <div class="dialog">cookbook</div>
    </v-dialog>
    <v-dialog v-model="show_button">
      <div class="dialog">button</div>
    </v-dialog>
    <v-dialog v-model="show_vnteaser">
      <div class="dialog">vnteaser</div>
    </v-dialog>
  </div>
</template>

<script>
import Phaser from 'phaser';
import scene from './scenes';
import plugins from './plugins';
export default {
  data() {
    return {
      game: null,
      show_messages: false,
      show_mural: false,
      show_blessing: false,
      show_cookbook: false,
      show_button: false,
      show_vnteaser: false,
    }
  },
  methods: {
    onProject({ key }) {
      this[`show_${key}`] = true;
    }
  },
  mounted() {
    // eslint-disable-next-line no-new
    this.game = new Phaser.Game({
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
      callbacks: {
        postBoot: () => {
          this.game.vue = this;
        },
      },
    });
  },
}
</script>

<style lang="scss" scoped>
.dialog {
  width:calc(100vw - 48px);
  height:calc(100vh - 48px);
  background:#fbeff2;
}
</style>
