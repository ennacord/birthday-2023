<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="6">
        <v-sheet class="ma-2 pa-2">
          <h2 class="text-center">Enna Button</h2>
          <h4 class="text-center">
            A dedicated site for a soundboard / button to play a sepcific Enna voiceline
          </h4>
          <h4 class="text-center mb-2">
            <a href="https://bishbuttonbuild20230212.github.io" class="text-decoration-none" target="_blank">
              https://bishbuttonbuild20230212.github.io
            </a>
          </h4>
          <a href="https://bishbuttonbuild20230212.github.io" target="_blank">
            <img :src="buttonImgUrl" class="button-img">
          </a>
        </v-sheet>
      </v-col>
      <v-col cols="6">
        <v-sheet class="ma-2 pa-2">
          <h2 class="text-center">picrew</h2>
          <h4 class="text-center">
            ?
          </h4>
          <h4 class="text-center mb-2">
            <a href="/" class="text-decoration-none" target="_blank">
              ?
            </a>
          </h4>
          <a href="/" target="_blank">
            <img :src="buttonImgUrl" class="button-img">
          </a>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ButtonImg from '@/assets/images/bishbtn.png';

export default {
  data() {
    return {
      buttonImgUrl: ButtonImg,
    }
  },
  mounted() {
  },
}
</script>

<style lang="scss" scoped>
.button-img {
  width:auto;
  height:100%;
  margin:0px auto;
  display:block;
}
</style>
