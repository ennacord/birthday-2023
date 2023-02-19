<template>
  <div class="sites">
    <div class="site">
      <v-card height="100%">
        <a href="https://bishbuttonbuild20230212.github.io" target="_blank" class="text-decoration-none">
          <v-img :src="buttonImgUrl" gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,.7)" class="align-end" cover height="100%">
            <v-card-title class="text-white pb-8">
              <h2 class="text-center mb-2">Enna Bish Button</h2>
              <p class="text-center site-desc">
                A dedicated site for a soundboard / button to play a specific Enna voiceline
              </p>
              <p class="text-center site-credits">
                Programming: Alpaka, Art: Matahari
              </p>
            </v-card-title>
          </v-img>
        </a>
      </v-card>
    </div>
    <div class="site">
      <v-card height="100%">
        <a href="https://picrew.me/image_maker/1908383" target="_blank" class="text-decoration-none">
          <v-img :src="picrewImgUrl" gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,.7)" class="align-end" cover height="100%">
            <v-card-title class="text-white pb-8">
              <h2 class="text-center mb-2">Aloupeeps Maker Game</h2>
              <p class="text-center site-desc">
                Aloupeeps dress up to celebrate EnnDay2023!
              </p>
              <p class="text-center site-credits">
                (picrew) Art by <a href="https://twitter.com/quanxb" target="_blank" class="text-white">gummy bear🕊🎐</a><br />
              </p>
            </v-card-title>
          </v-img>
        </a>
      </v-card>
    </div>  
  </div>
</template>

<script>
import ButtonImg from '@/assets/images/bishbtn.png';
import PicrewImg from '@/assets/images/picrew.png';

export default {
  data() {
    return {
      buttonImgUrl: ButtonImg,
      picrewImgUrl: PicrewImg,
    }
  },
  mounted() {
  },
}
</script>

<style lang="scss" scoped>
.sites {
  display:flex;
  height:100%;

  .site {
    width:50%;
    height:100%;

    .site-desc {
      white-space: normal;
      line-height:1.3em;
    }
  }
}
</style>
