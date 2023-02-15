<template>
  <v-container class="container pa-0 ma-0">
    <v-row no-gutters style="height:100%;">
      <v-col cols="3">
        <div class="py-2 px-4">
          credits
        </div>
      </v-col>
      <v-col cols="9">
        <iframe
          width="100%" height="100%"
          src="https://www.youtube-nocookie.com/embed/W8aBDsSNmWI"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; web-share" 
          allowfullscreen>
        </iframe>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
  },
}
</script>

<style lang="scss" scoped>
.container {
  width:100%; height:100%; max-width:100%;
}
</style>
