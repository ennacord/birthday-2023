<template>
  <v-carousel height="100%" hide-delimiters progress>
    <v-carousel-item :src="Cookbook01" contain ></v-carousel-item>
    <v-carousel-item :src="Cookbook02" contain ></v-carousel-item>
    <v-carousel-item :src="Cookbook03" contain ></v-carousel-item>
    <v-carousel-item :src="Cookbook04" contain ></v-carousel-item>
    <v-carousel-item :src="Cookbook05" contain ></v-carousel-item>
  </v-carousel>
</template>

<script>
import Cookbook01 from '@/assets/mural.jpg';
import Cookbook02 from '@/assets/mural.jpg';
import Cookbook03 from '@/assets/mural.jpg';
import Cookbook04 from '@/assets/mural.jpg';
import Cookbook05 from '@/assets/mural.jpg';

export default {
  data() {
    return {
      Cookbook01,
      Cookbook02,
      Cookbook03,
      Cookbook04,
      Cookbook05,
    }
  },
  mounted() {
  },
}
</script>

<style lang="scss" scoped>

</style>
