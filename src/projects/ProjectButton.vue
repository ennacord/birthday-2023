<template>
  <a href="https://bish.ennaalouette.com" target="_blank">
    <img :src="buttonImgUrl" class="button-img">
  </a>
</template>

<script>
import ButtonImg from '@/assets/mural.jpg';

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
