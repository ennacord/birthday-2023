<template>
  <v-row no-gutters style="height:100%;">
    <v-col cols="3">
      <div class="py-2 px-4">
        credits
      </div>
    </v-col>
    <v-col cols="9" style="background:#1a1a1a; height:100%;">
      <v-carousel height="100%" hide-delimiters progress>
        <v-carousel-item :src="Cookbook01" contain ></v-carousel-item>
        <v-carousel-item :src="Cookbook02" contain ></v-carousel-item>
        <v-carousel-item :src="Cookbook03" contain ></v-carousel-item>
        <v-carousel-item :src="Cookbook04" contain ></v-carousel-item>
        <v-carousel-item :src="Cookbook05" contain ></v-carousel-item>
        <v-carousel-item :src="Cookbook06" contain ></v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
</template>

<script>
import Cookbook01 from '@/assets/cookbook/cb1.png';
import Cookbook02 from '@/assets/cookbook/cb2.png';
import Cookbook03 from '@/assets/cookbook/cb3.png';
import Cookbook04 from '@/assets/cookbook/cb4.png';
import Cookbook05 from '@/assets/cookbook/cb5.png';
import Cookbook06 from '@/assets/cookbook/cb6.png';

export default {
  data() {
    return {
      Cookbook01,
      Cookbook02,
      Cookbook03,
      Cookbook04,
      Cookbook05,
      Cookbook06,
    }
  },
  mounted() {
  },
}
</script>

<style lang="scss" scoped>

</style>
