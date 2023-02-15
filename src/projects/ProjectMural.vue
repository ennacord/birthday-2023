<template>
  <div class="boards">
    <div class="board">
      <v-card height="100%">
        <a :href="miral1ImgUrl" target="_blank" class="text-decoration-none">
          <v-img :src="miral1ImgUrl" gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,.7)" class="align-end" cover height="100%">
            <v-card-title class="text-white">
              <h2 class="text-center pb-4">Drawings Part 1</h2>
            </v-card-title>
          </v-img>
        </a>
      </v-card>
    </div>
    <div class="board">
      <v-card height="100%">
        <a :href="miral2ImgUrl" target="_blank" class="text-decoration-none">
          <v-img :src="miral2ImgUrl" gradient="to top, rgba(0,0,0,0), rgba(0,0,0,.7)" class="align-start" cover height="100%">
            <v-card-title class="text-white">
              <h2 class="text-center pt-2">Drawings Part 2</h2>
            </v-card-title>
          </v-img>
        </a>
      </v-card>
    </div>
    <div class="board">
      <v-card height="100%">
        <a :href="miral3ImgUrl" target="_blank" class="text-decoration-none">
          <v-img :src="miral3ImgUrl" gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,.7)" class="align-end" cover height="100%">
            <v-card-title class="text-white">
              <h2 class="text-center pb-4">Drawings Part 3</h2>
            </v-card-title>
          </v-img>
        </a>
      </v-card>
    </div>
  </div>
  
</template>

<script>
import Mural1Img from '@/assets/enna-bday2023-aggie1.jpg';
import Mural2Img from '@/assets/enna-bday2023-aggie2.jpg';
import Mural3Img from '@/assets/enna-bday2023-aggie3.jpg';

export default {
  data() {
    return {
      miral1ImgUrl: Mural1Img,
      miral2ImgUrl: Mural2Img,
      miral3ImgUrl: Mural3Img,
    }
  },
  mounted() {
  },
}
</script>

<style lang="scss" scoped>
.boards {
  display:flex;
  height:100%;

  .board {
    width:33%;
    height:100%;
  }
}

.mural-img {
  // width:auto;
  // height:100%;
  // margin:0px auto;
  // display:block;
}
</style>
