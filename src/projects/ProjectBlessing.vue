<template>
  <div class="container">
    <v-img :src="TeasertImg" class="teaser-img" height="100%" />
  </div>
</template>

<script>
import TeasertImg from '@/assets/teaser/blessing.png';

export default {
  data() {
    return {
      TeasertImg,
    }
  },
  mounted() {
  },
}
</script>

<style lang="scss" scoped>
.container {
  width:100%;
  height:100%;
  background:#1a1a1a;

  .teaser-img {
    max-width:100%;
    max-height:100%;
  }
}
</style>
