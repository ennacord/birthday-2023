<template>
  <div>
    <div id="game"></div>
    <v-dialog v-model="show_messages">
      <div class="dialog">
        <div class="dialog-title">
          Birthday Messages
          <span>Many aloupeeps sincerely wish Enna Alouette a very happy birthday this year!</span>
          <div class="dialog-close">
            <v-btn variant="tonal" @click="show_messages = false">Close</v-btn>
          </div>
        </div>
        <div class="dialog-body">
          <ProjectMessages/>
        </div>
      </div>
    </v-dialog>
    <v-dialog v-model="show_mural">
      <div class="dialog">
        <div class="dialog-title">
          Drawing Boards
          <span>Some aloupeeps drew their greetings on three shared community boards!</span>
          <div class="dialog-close">
            <v-btn variant="tonal" @click="show_mural = false">Close</v-btn>
          </div>
        </div>
        <div class="dialog-body">
          <ProjectMural/>
        </div>
      </div>
    </v-dialog>
    <v-dialog v-model="show_cookbook">
      <div class="dialog cookbook">
        <div class="dialog-title">
          Cookbook Project Teaser
          <span>Aloupeeps gather their recipe into a cookbook!</span>
          <div class="dialog-close">
            <v-btn variant="tonal" @click="show_cookbook = false">Close</v-btn>
          </div>
        </div>
        <div class="dialog-body">
          <ProjectCookbook/>
        </div>
      </div>
    </v-dialog>
    <v-dialog v-model="show_blessing">
      <div class="dialog blessing">
        <div class="dialog-title">
          Blessing Project Teaser
          <span>Aloupeeps sing to give Enna some blessings for her birthday!</span>
          <div class="dialog-close">
            <v-btn variant="tonal" @click="show_blessing = false">Close</v-btn>
          </div>
        </div>
        <div class="dialog-body">
          <ProjectBlessing/>
        </div>
      </div>
    </v-dialog>
    <v-dialog v-model="show_heaven">
      <div class="dialog">
        <div class="dialog-title">
          Heaven Bird Waltz
          <span>Oh heavens, it's a bird dancing to a waltz melody!</span>
          <div class="dialog-close">
            <v-btn variant="tonal" @click="show_heaven = false">Close</v-btn>
          </div>
        </div>
        <div class="dialog-body">
          <ProjectHeaven/>
        </div>
      </div>
    </v-dialog>
    <v-dialog v-model="show_button">
      <div class="dialog">
        <div class="dialog-title">
          Websites
          <span>Dedicated websites and external links prepared by aloupeeps</span>
          <div class="dialog-close">
            <v-btn variant="tonal" @click="show_button = false">Close</v-btn>
          </div>
        </div>
        <div class="dialog-body">
          <ProjectButton/>
        </div>
      </div>
    </v-dialog>
    <v-dialog v-model="show_credits">
      <div class="dialog credits">
        <div class="dialog-title">
          Website Credits
          <div class="dialog-close">
            <v-btn variant="tonal" @click="show_credits = false">Close</v-btn>
          </div>
        </div>
        <div class="dialog-body">
          <ProjectCredits/>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import Phaser from 'phaser';
import scene from './scenes';
import plugins from './plugins';

import ProjectMessages from '@/projects/ProjectMessages.vue';
import ProjectMural from '@/projects/ProjectMural.vue';
import ProjectCookbook from '@/projects/ProjectCookbook.vue';
import ProjectBlessing from '@/projects/ProjectBlessing.vue';
import ProjectHeaven from '@/projects/ProjectHeaven.vue';
import ProjectButton from '@/projects/ProjectButton.vue';
import ProjectCredits from '@/projects/ProjectCredits.vue';

export default {
  data() {
    return {
      game: null,
      show_messages: false,
      show_mural: false,
      show_cookbook: false,
      show_blessing: false,
      show_heaven: false,
      show_button: false,
      show_credits: false,
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
  components: {
    ProjectMessages,
    ProjectMural,
    ProjectCookbook,
    ProjectBlessing,
    ProjectHeaven,
    ProjectButton,
    ProjectCredits,
  }
}
</script>

<style lang="scss" scoped>
.dialog {
  width:calc(100vw - 48px);
  height:calc(100vh - 48px);
  margin:0px auto;
  background:#fbeff2;
  border-radius: 12px;
  overflow:hidden;
  border:3px solid #563880;

  // &.cookbook {
  //   max-width:1400px;
  // }
  // &.blessing {
  //   max-width:1000px;
  // }
  &.credits {
    width:550px;
    min-width:500px;
    height:450px;
  }
  

  .dialog-title {
    height:60px;
    line-height:60px;
    font-size:24px;
    font-weight:bold;
    padding:0px 20px 0px 20px;
    background:#8163ab;
    color:#fff;

    span {
      font-size:16px;
      color:#d9cdeb;
      line-height:60px;
      vertical-align:middle;
      padding-left:20px;
    }

    .dialog-close {
      float:right;
    }
  }

  .dialog-body {
    width:calc(100vw - 48px);
    height:calc(100vh - 108px);
  }
}
</style>
